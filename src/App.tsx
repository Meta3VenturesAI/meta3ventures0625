import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import { AuthProvider } from './contexts/AuthContext';
import { initializeTracking } from './lib/tracking';
import { ErrorFallback } from './components/ErrorFallback';
import { Toast } from './components/Toast';

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
    initializeTracking();
    
    // Force HTTPS redirect on client side
    if (typeof window !== 'undefined' && window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
      window.location.replace(window.location.href.replace('http:', 'https:'));
    }
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
            </div>
          </Router>
        </ErrorBoundary>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;