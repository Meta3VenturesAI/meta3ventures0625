import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: object;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = 'https://meta3ventures.com/og-image.jpg',
  url = 'https://meta3ventures.com',
  type = 'website',
  schema
}) => {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Meta3Ventures",
    "url": "https://meta3ventures.com",
    "logo": "https://meta3ventures.com/og-image.jpg",
    "description": "Meta3Ventures empowers organizations with cutting-edge AI solutions, strategic consulting, and venture studio support.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Derech Menachem Begin 121",
      "addressLocality": "Tel Aviv-Yafo",
      "addressCountry": "Israel"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+972528444500",
      "contactType": "customer service",
      "email": "info@meta3ventures.com"
    },
    "sameAs": [
      "https://twitter.com/meta3ventures",
      "https://linkedin.com/company/meta3ventures",
      "https://medium.com/@meta3ventures"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#4F46E5" />
      
      {/* Keywords */}
      <meta name="keywords" content="AI, artificial intelligence, venture capital, blockchain, digital transformation, startup accelerator, tech innovation, deep tech, machine learning, Web3, strategic consulting" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
};