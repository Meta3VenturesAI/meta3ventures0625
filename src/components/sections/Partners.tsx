import React, { useState, useEffect } from 'react';

interface Partner {
  name: string;
  logo?: string;
  description: string;
  imageUrl?: string;
}

export const Partners: React.FC = () => {
  const [imageLoadErrors, setImageLoadErrors] = useState<Record<string, boolean>>({});

  const partners: Partner[] = [
    {
      name: "HubSpot for Startups",
      imageUrl: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "CRM and marketing platform for growing startups"
    },
    {
      name: "NVIDIA Inception",
      imageUrl: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "AI computing platform and startup acceleration program"
    },
    {
      name: "Google for Startups",
      imageUrl: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Cloud credits and startup support from Google"
    },
    {
      name: "Microsoft for Startups",
      imageUrl: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Azure credits and enterprise tools for startups"
    },
    {
      name: "Oracle for Startups",
      imageUrl: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Cloud infrastructure and database solutions for startups"
    },
    {
      name: "AWS Startups",
      imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Cloud computing platform and startup credits"
    },
    {
      name: "EY",
      imageUrl: "https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional services and startup advisory"
    },
    {
      name: "PwC",
      imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Consulting and professional services"
    },
    {
      name: "Start-up Nation Central",
      imageUrl: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Israeli innovation ecosystem connector"
    },
    {
      name: "Nielsen",
      imageUrl: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Global measurement and data analytics company"
    },
    {
      name: "Atlassian",
      imageUrl: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Team collaboration and productivity tools"
    },
    {
      name: "Slack",
      imageUrl: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Business communication and collaboration platform"
    },
    {
      name: "Zoom",
      imageUrl: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Video communications and virtual meetings"
    },
    {
      name: "Notion",
      imageUrl: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "All-in-one workspace for notes, docs, and collaboration"
    },
    {
      name: "Figma",
      imageUrl: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Collaborative design and prototyping platform"
    }
  ];

  // Log all partner logos on component mount to verify paths
  useEffect(() => {
    console.log("Partner logos:", partners.map(p => ({ name: p.name, logo: p.logo })));
  }, []);

  const handleImageError = (partnerName: string) => {
    console.error(`Failed to load image for partner: ${partnerName}`);
    setImageLoadErrors(prev => ({ ...prev, [partnerName]: true }));
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
            Our Partners
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We collaborate with industry leaders to provide our portfolio companies with the best resources and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-full max-w-[200px] h-20 flex items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              {!imageLoadErrors[partner.name] ? (
                <div className="text-gray-600 dark:text-gray-300 text-sm font-medium text-center">
                  {partner.name}
                </div>
              ) : (
                <div className="text-gray-600 dark:text-gray-300 text-sm font-medium text-center">
                  {partner.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};