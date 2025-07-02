// Image optimization and fallback utilities
export const imageConfig = {
  // Reliable image sources with proper URLs
  fallbackImages: {
    hero: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200',
    team: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    blog: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technology: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    business: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  
  // Optimized image URLs for different use cases
  optimizedUrls: {
    // Team/About images
    lironLanger: 'https://res.cloudinary.com/dmoricfgw/image/upload/c_fill,w_400,h_400,q_auto,f_auto/v1747140463/Liron1_pvqoev.jpg',
    teamCollaboration: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    
    // Blog images
    aiFuture: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    blockchain: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    innovation: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    
    // Partner logos (using reliable sources)
    microsoft: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png',
    nvidia: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/200px-Nvidia_logo.svg.png',
    openai: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/200px-OpenAI_Logo.svg.png'
  }
};

// Generate optimized image URL with fallback
export const getOptimizedImageUrl = (
  originalUrl: string, 
  width: number = 800, 
  height?: number,
  quality: number = 80
): string => {
  try {
    // For Pexels images, add optimization parameters
    if (originalUrl.includes('pexels.com')) {
      const url = new URL(originalUrl);
      url.searchParams.set('auto', 'compress');
      url.searchParams.set('cs', 'tinysrgb');
      url.searchParams.set('w', width.toString());
      if (height) {
        url.searchParams.set('h', height.toString());
        url.searchParams.set('fit', 'crop');
      }
      url.searchParams.set('q', quality.toString());
      return url.toString();
    }
    
    // For Cloudinary images, add optimization
    if (originalUrl.includes('cloudinary.com')) {
      return originalUrl.replace('/upload/', `/upload/c_fill,w_${width}${height ? `,h_${height}` : ''},q_auto,f_auto/`);
    }
    
    // For other images, return as-is
    return originalUrl;
  } catch (error) {
    console.warn('Failed to optimize image URL:', error);
    return originalUrl;
  }
};

// Get fallback image for specific content type
export const getFallbackImage = (type: 'hero' | 'team' | 'blog' | 'technology' | 'business' = 'blog'): string => {
  return imageConfig.fallbackImages[type];
};

// Validate image URL
export const isValidImageUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg'];
    const hasValidExtension = validExtensions.some(ext => 
      urlObj.pathname.toLowerCase().includes(ext)
    );
    
    // Check for known image hosting domains
    const validDomains = [
      'pexels.com',
      'cloudinary.com',
      'wikimedia.org',
      'unsplash.com',
      'pixabay.com'
    ];
    
    const hasValidDomain = validDomains.some(domain => 
      urlObj.hostname.includes(domain)
    );
    
    return hasValidExtension || hasValidDomain;
  } catch {
    return false;
  }
};

// Preload critical images
export const preloadCriticalImages = (): void => {
  const criticalImages = [
    imageConfig.optimizedUrls.lironLanger,
    imageConfig.optimizedUrls.teamCollaboration,
    imageConfig.fallbackImages.hero
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Image loading with retry logic
export const loadImageWithRetry = (
  src: string, 
  retries: number = 2
): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    const attemptLoad = (attemptsLeft: number) => {
      img.onload = () => resolve(img);
      img.onerror = () => {
        if (attemptsLeft > 0) {
          setTimeout(() => attemptLoad(attemptsLeft - 1), 1000);
        } else {
          reject(new Error(`Failed to load image: ${src}`));
        }
      };
      img.src = src;
    };
    
    attemptLoad(retries);
  });
};