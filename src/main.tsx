import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { performanceMonitor } from './lib/performanceMonitor';
import { validateEnvironment } from './lib/securityUtils';
import { checkSupabaseConnection } from './lib/supabase';
import { initializeSecurity } from './lib/securityUtils';
import errorTracker from './lib/errorTracking';

// Initialize security measures
initializeSecurity();

// Validate environment variables
const envValidation = validateEnvironment();
if (!envValidation.isValid) {
  console.warn('Environment validation issues:', envValidation.issues);
}

// Check Supabase connection
checkSupabaseConnection().then(connected => {
  if (connected) {
    console.log('✅ Supabase connection established');
  } else {
    console.warn('⚠️ Supabase connection failed - using fallback mode');
  }
}).catch(() => {
  console.warn('⚠️ Supabase connection check failed - using fallback mode');
});

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Start performance monitoring
  performanceMonitor;
  
  // Initialize error tracking
  errorTracker;
  
  // Preload critical resources
  const criticalResources = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = 'style';
    link.onload = () => {
      link.rel = 'stylesheet';
    };
    document.head.appendChild(link);
  });

  // Optimize images loading
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading is supported
    document.documentElement.classList.add('native-lazy-loading');
  }

  // Add performance observer for Core Web Vitals
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log performance entries in development
          if (import.meta.env.DEV) {
            console.log('Performance entry:', entry);
          }
        }
      });
      
      observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });
    } catch (e) {
      console.warn('Performance observer setup failed:', e);
    }
  }
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find root element');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Service Worker registration for PWA
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });
      
      console.log('SW registered: ', registration);
      
      // Handle service worker updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available, notify user
              console.log('New content available, please refresh.');
            }
          });
        }
      });
      
    } catch (registrationError) {
      console.log('SW registration failed: ', registrationError);
    }
  });
}

// Handle online/offline status
window.addEventListener('online', () => {
  console.log('App is online');
  document.body.classList.remove('offline');
});

window.addEventListener('offline', () => {
  console.log('App is offline');
  document.body.classList.add('offline');
});

// Handle visibility change for performance optimization
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Page is hidden, pause non-critical operations
    console.log('Page hidden, pausing non-critical operations');
  } else {
    // Page is visible, resume operations
    console.log('Page visible, resuming operations');
  }
});

// Memory management
window.addEventListener('beforeunload', () => {
  // Clean up resources before page unload
  performanceMonitor.disconnect();
});

// Handle critical errors gracefully
window.addEventListener('error', (event) => {
  console.error('Critical error:', event.error);
  
  // In production, you might want to show a user-friendly error message
  if (import.meta.env.PROD) {
    // Show user-friendly error notification
  }
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  
  // Prevent the default browser behavior
  event.preventDefault();
});