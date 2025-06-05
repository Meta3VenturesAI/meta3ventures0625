import { trackPageView, trackEvent } from './analytics';
import toast from 'react-hot-toast';

let sessionId: string;
let sessionStart: number;

export function initializeTracking() {
  // Generate or retrieve session ID
  sessionId = sessionStorage.getItem('sessionId') || crypto.randomUUID();
  sessionStorage.setItem('sessionId', sessionId);
  
  // Record session start time
  sessionStart = Date.now();
  sessionStorage.setItem('sessionStart', sessionStart.toString());

  // Track initial page view
  trackInitialPageView();

  // Set up navigation tracking
  setupNavigationTracking();

  // Track errors
  setupErrorTracking();
}

function trackInitialPageView() {
  trackPageView({
    page: window.location.pathname,
    session_id: sessionId,
    referrer: document.referrer,
    user_agent: navigator.userAgent
  });
}

function setupNavigationTracking() {
  // Track history changes
  const originalPushState = history.pushState;
  history.pushState = function() {
    originalPushState.apply(this, arguments);
    handleNavigation();
  };

  window.addEventListener('popstate', handleNavigation);
  window.addEventListener('beforeunload', handleBeforeUnload);
}

function setupErrorTracking() {
  window.addEventListener('error', (event) => {
    trackEvent({
      event_type: 'error',
      event_data: {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      },
      session_id: sessionId,
      page_url: window.location.href
    });

    toast.error('An error occurred. Our team has been notified.');
  });

  window.addEventListener('unhandledrejection', (event) => {
    trackEvent({
      event_type: 'unhandled_rejection',
      event_data: {
        reason: event.reason?.toString()
      },
      session_id: sessionId,
      page_url: window.location.href
    });
  });
}

function handleNavigation() {
  trackPageView({
    page: window.location.pathname,
    session_id: sessionId,
    referrer: document.referrer,
    user_agent: navigator.userAgent
  });

  // Scroll to top on navigation
  window.scrollTo(0, 0);
}

function handleBeforeUnload() {
  const duration = Date.now() - sessionStart;
  
  // Track exit page and session duration
  trackPageView({
    page: 'exit',
    session_id: sessionId,
    referrer: window.location.pathname,
    duration_ms: duration,
    user_agent: navigator.userAgent
  });

  // Clear session data
  sessionStorage.removeItem('sessionId');
  sessionStorage.removeItem('sessionStart');
}

export function getSessionId() {
  return sessionId;
}