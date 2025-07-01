import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { performanceMonitor, measureWebVitals } from './lib/performance';
import { validateEnvironment } from './lib/security';

// Validate environment variables
if (!validateEnvironment()) {
  console.error('Environment validation failed. Please check your configuration.');
}

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  performanceMonitor.measurePageLoad();
  performanceMonitor.preloadCriticalResources();
  measureWebVitals();
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
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}