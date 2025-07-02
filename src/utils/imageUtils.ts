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
  
  // Partner logos - using reliable external URLs
  partnerLogos: {
    'HubSpot for Startups': '/logos/New Customer Offer Thumbnails (11).webp',
    'NVIDIA Inception': '/logos/20181218-Nvidia-Inception.webp',
    'Google for Startups': '/logos/Logo_for_Google_for_Startups_page.png',
    'Microsoft for Startups': '/logos/Microsoft-for-Startups.jpg',
    'Oracle for Startups': '/logos/oracle-for-startups.png',
    'AWS Startups': '/logos/amazon.jpg',
    'EY': '/logos/EYLogo.gif',
    'PwC': '/logos/PwC_2025_Logo.svg.png',
    'Start-up Nation Central': '/logos/SNC.png',
    'Nielsen': '/logos/Nielsen_New_Logo_2021.png',
    'Atlassian': '/logos/Atlassian-Logo.png',
    'Slack': '/logos/slack-logo-PNG-large-size-900x230.png',
    'Zoom': '/logos/zoom-logo-png-video-meeting-call-software.png',
    'Notion': '/logos/notion-symbol.png',
    'Figma': '/logos/figma.png',
    'Databricks': '/logos/Databricks_Logo.png',
    'MongoDB': '/logos/MongoDB_forStartups_ForestGreen.png',
    'Snowflake': '/logos/ibsi_snowflake.jpg',
    'Stripe': '/logos/new-stripe-logo-png.png',
    'Salesforce': '/logos/salesforce.png'
  },
  
  // Optimized image URLs for different use cases
  optimizedUrls: {
    // Team/About images
    lironLanger: '/images/Liron1.jpg',
    teamCollaboration: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    
    // Blog images
    aiFuture: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    blockchain: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800',
    ventureCapital: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800'
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

// Get partner logo by name
export const getPartnerLogo = (partnerName: string): string => {
  // First try to get from the partnerLogos map
  if (imageConfig.partnerLogos[partnerName]) {
    return imageConfig.partnerLogos[partnerName];
  }
  
  // If not found, return a fallback image
  return imageConfig.fallbackImages.business;
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
    '/logos/New Customer Offer Thumbnails (11).webp',
    '/logos/20181218-Nvidia-Inception.webp',
    '/logos/Logo_for_Google_for_Startups_page.png',
    '/logos/Microsoft-for-Startups.jpg',
    '/logos/oracle-for-startups.png',
    '/logos/amazon.jpg',
    '/logos/EYLogo.gif',
    '/logos/PwC_2025_Logo.svg.png',
    '/logos/SNC.png',
    '/logos/Nielsen_New_Logo_2021.png',
    '/logos/Atlassian-Logo.png',
    '/logos/slack-logo-PNG-large-size-900x230.png',
    '/logos/zoom-logo-png-video-meeting-call-software.png',
    '/logos/notion-symbol.png',
    '/logos/figma.png',
    '/logos/Databricks_Logo.png',
    '/logos/MongoDB_forStartups_ForestGreen.png',
    '/logos/ibsi_snowflake.jpg',
    '/logos/new-stripe-logo-png.png',
    '/logos/salesforce.png',
    
    // Team images
    '/images/Liron1.jpg',
    
    // Blog images
    'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg',
    'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg'
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