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
    'HubSpot for Startups': 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=800',
    'NVIDIA Inception': 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Google for Startups': 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Microsoft for Startups': 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Oracle for Startups': 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    'AWS Startups': 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    'EY': 'https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=800',
    'PwC': 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Start-up Nation Central': 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Nielsen': 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Atlassian': 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Slack': 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Zoom': 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Notion': 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Figma': 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Databricks': 'https://images.pexels.com/photos/3184471/pexels-photo-3184471.jpeg?auto=compress&cs=tinysrgb&w=800',
    'MongoDB': 'https://images.pexels.com/photos/3184481/pexels-photo-3184481.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Snowflake': 'https://images.pexels.com/photos/3184487/pexels-photo-3184487.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Stripe': 'https://images.pexels.com/photos/3184490/pexels-photo-3184490.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Salesforce': 'https://images.pexels.com/photos/3184496/pexels-photo-3184496.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    '/logos/atlassian-logo.png',
    '/logos/slack-logo.png',
    '/logos/zoom-logo.png',
    '/logos/notion-logo.png',
    '/logos/figma-logo.png',
    '/logos/databricks-logo.png',
    '/logos/mongodb-logo.png',
    '/logos/snowflake-logo.png',
    '/logos/stripe-logo.png',
    '/logos/salesforce-logo.png',
    
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