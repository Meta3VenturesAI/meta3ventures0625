import React, { useState, useRef, useEffect, useCallback } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  fallbackText?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  srcSet?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  onLoad,
  onError,
  fallbackText,
  loading = 'lazy',
  sizes,
  srcSet
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Fallback images for different types
  const fallbackImages = {
    team: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    blog: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    general: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800'
  };

  // Generate optimized placeholder
  const generatePlaceholder = useCallback(() => {
    if (placeholder) return placeholder;
    
    // Generate a simple SVG placeholder
    const svg = `
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f3f4f6"/>
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="system-ui, sans-serif" font-size="14">
          Loading...
        </text>
      </svg>
    `;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  }, [placeholder]);

  // Set up intersection observer
  useEffect(() => {
    if (!imgRef.current || loading === 'eager') {
      setIsInView(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [loading]);

  // Handle image load
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  // Handle image error with fallback
  const handleError = useCallback(() => {
    console.warn(`Failed to load image: ${currentSrc}`);
    
    // Try fallback images
    if (currentSrc === src) {
      // First fallback: try a different Pexels image
      const fallbackSrc = alt.toLowerCase().includes('team') || alt.toLowerCase().includes('author') 
        ? fallbackImages.team
        : alt.toLowerCase().includes('blog') || alt.toLowerCase().includes('article')
        ? fallbackImages.blog
        : fallbackImages.general;
      
      setCurrentSrc(fallbackSrc);
      setIsLoading(true);
      return;
    }
    
    // If fallback also fails, show error state
    setHasError(true);
    setIsLoading(false);
    onError?.();
  }, [currentSrc, src, alt, onError]);

  // Start loading when in view
  useEffect(() => {
    if (isInView && !isLoaded && !hasError && !isLoading) {
      setIsLoading(true);
    }
  }, [isInView, isLoaded, hasError, isLoading]);

  // Reset when src changes
  useEffect(() => {
    setCurrentSrc(src);
    setIsLoaded(false);
    setHasError(false);
    setIsLoading(false);
  }, [src]);

  const placeholderSrc = generatePlaceholder();

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/Loading state */}
      {(!isLoaded || isLoading) && !hasError && (
        <img
          src={placeholderSrc}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          aria-hidden="true"
        />
      )}
      
      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600 dark:border-indigo-400"></div>
        </div>
      )}
      
      {/* Main image */}
      {isInView && !hasError && (
        <img
          src={currentSrc}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
          decoding="async"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-700 min-h-[200px]">
          <div className="text-center p-4">
            <div className="text-gray-400 dark:text-gray-500 mb-2">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              {fallbackText || alt || 'Image failed to load'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;