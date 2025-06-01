import { trackPageView } from './analytics';

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
}

function trackInitialPageView() {
  trackPageView({
    page: window.location.pathname,
    session_id: sessionId,
    referrer: document.referrer
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

function handleNavigation() {
  trackPageView({
    page: window.location.pathname,
    session_id: sessionId,
    referrer: document.referrer
  });
}

function handleBeforeUnload() {
  const duration = Date.now() - sessionStart;
  
  // Track exit page and session duration
  trackPageView({
    page: 'exit',
    session_id: sessionId,
    referrer: window.location.pathname,
    duration_ms: duration
  });

  // Clear session data
  sessionStorage.removeItem('sessionId');
  sessionStorage.removeItem('sessionStart');
}

export function getSessionId() {
  return sessionId;
}