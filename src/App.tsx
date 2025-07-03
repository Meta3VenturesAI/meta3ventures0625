import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import { AuthProvider } from './contexts/AuthContext';
import { ErrorFallback } from './components/ErrorFallback';
import { Toast } from './components/Toast';
import { debugCheckAllImages } from './utils/imageUtils';
import ImageDebugger from './components/ImageDebugger';

// Lazy load pages for better performance
const ServicesPage = React.lazy(() => import('./pages/Services'));
const AboutPage = React.lazy(() => import('./pages/About'));
const PortfolioPage = React.lazy(() => import('./pages/Portfolio'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const ResourcesPage = React.lazy(() => import('./pages/Resources'));
const BlogPage = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const BlogManagementPage = React.lazy(() => import('./pages/BlogManagement'));
const ApplyPage = React.lazy(() => import('./pages/Apply'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const NotFoundPage = React.lazy(() => import('./pages/NotFound'));

function App() {
  useEffect(() => {
    // Force HTTPS redirect on client side
    if (typeof window !== 'undefined' && window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
      window.location.replace(window.location.href.replace('http:', 'https:'));
    }

    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      // Basic performance tracking
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (perfData && import.meta.env.DEV) {
          console.log('Page load time:', perfData.loadEventEnd - perfData.startTime, 'ms');
        }
      });
    }

    // Debug check all images in development mode
    if (import.meta.env.DEV) {
      debugCheckAllImages().then(results => {
        const missingImages = results.filter(r => !r.exists);
        if (missingImages.length > 0) {
          console.warn('Missing images detected:', missingImages);
        } else {
          console.log('All images loaded successfully');
        }
      });
    }
    
    // Preload critical images
    const preloadImages = () => {
      const criticalImages = [
        '/images/Liron1.jpg',
        'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800'
      ];
      
      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadImages();
  }, []);

  return (
    <HelmetProvider>
      <AuthProvider>
        <ErrorBoundary>
          <Router>
            <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
              <Header />
              <main className="flex-grow pt-20">
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/portfolio" element={<PortfolioPage />} />
                      <Route path="/partners" element={<PartnersPage />} />
                      <Route path="/resources" element={<ResourcesPage />} />
                      <Route path="/blog" element={<BlogPage />} />
                      <Route path="/blog/:slug" element={<BlogPost />} />
                      <Route path="/blog/manage" element={<BlogManagementPage />} />
                      <Route path="/apply" element={<ApplyPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/404" element={<NotFoundPage />} />
                      <Route path="*" element={<Navigate to="/404" replace />} />
                    </Routes>
                  </Suspense>
                </ErrorBoundary>
              </main>
              <Footer />
              <Toast />
              {import.meta.env.DEV && <ImageDebugger />}
            </div>
          </Router>
        </ErrorBoundary>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;