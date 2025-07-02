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
  
  // Partner logos - using fallback images for now
  partnerLogos: {
    'HubSpot for Startups': 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    'NVIDIA Inception': 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    'Google for Startups': 'https://images.pexels.com/photos/2068975/pexels-photo-2068975.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    'Microsoft for Startups': 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    'Oracle for Startups': 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    'AWS Startups': 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    'EY': 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    'PwC': 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    'Start-up Nation Central': 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    'Nielsen': 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    'Atlassian': 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    'Slack': 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    'Zoom': 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    'Notion': 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    'Figma': 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  },
  
  // Optimized image URLs for different use cases
  optimizedUrls: {
    // Team/About images
    lironLanger: '/images/liron-langer.jpg',
    teamCollaboration: '/images/team-collaboration.jpg',
    
    // Blog images
    aiFuture: '/images/innovation.jpg',
    blockchain: '/images/blockchain-tech.jpg',
    ventureCapital: '/images/venture-capital.jpg',
    
    // Partner logos (fallback paths)
    hubspot: '/logos/hubspot-for-startups.png',
    nvidia: '/logos/nvidia-inception.png',
    google: '/logos/google-for-startups.png',
    microsoft: '/logos/Microsoft-for-Startups.jpg',
    oracle: '/logos/oracle-for-startups.png',
    aws: '/logos/amazon.jpg',
    ey: '/logos/EYLogo.gif',
    pwc: '/logos/PwC_2025_Logo.svg.png',
    snc: '/logos/SNC.png',
    nielsen: '/logos/Nielsen_New_Logo_2021.png',
    atlassian: '/logos/Atlassian-Logo.png',
    slack: '/logos/slack-logo.png',
    zoom: '/logos/zoom-logo.png',
    notion: '/logos/notion-logo.png',
    figma: '/logos/figma-logo.png'
  }
};

// Check if an image exists
export const checkImageExists = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

// Get optimized image URL with fallback
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
    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif'];
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

// Get partner logo by name - now uses reliable fallback images
export const getPartnerLogo = (partnerName: string): string => {
  return imageConfig.partnerLogos[partnerName] || imageConfig.fallbackImages.business;
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

// Debug function to check all images in the public folder
export const debugCheckAllImages = async () => {
  const imagesToCheck = [
    // Partner logos
    '/logos/hubspot-for-startups.png',
    '/logos/nvidia-inception.png',
    '/logos/google-for-startups.png',
    '/logos/Microsoft-for-Startups.jpg',
    '/logos/oracle-for-startups.png',
    '/logos/amazon.jpg',
    '/logos/EYLogo.gif',
    '/logos/PwC_2025_Logo.svg.png',
    '/logos/SNC.png',
    '/logos/Nielsen_New_Logo_2021.png',
    '/logos/Atlassian-Logo.png',
    '/logos/slack-logo.png',
    '/logos/zoom-logo.png',
    '/logos/notion-logo.png',
    '/logos/figma-logo.png',
    
    // Team images
    '/images/liron-langer.jpg',
    '/images/team-collaboration.jpg',
    
    // Blog images
    '/images/innovation.jpg',
    '/images/blockchain-tech.jpg',
    '/images/venture-capital.jpg'
  ];
  
  const results = await Promise.all(
    imagesToCheck.map(async (path) => {
      const exists = await checkImageExists(path);
      return { path, exists };
    })
  );
  
  console.log('Image check results:', results);
  return results;
};

// Create image elements for all images to force browser to load and cache them
export const preloadAllImages = () => {
  const allImagePaths = [
    ...Object.values(imageConfig.fallbackImages),
    ...Object.values(imageConfig.partnerLogos),
    ...Object.values(imageConfig.optimizedUrls)
  ];
  
  allImagePaths.forEach(path => {
    const img = new Image();
    img.src = path;
  });
};