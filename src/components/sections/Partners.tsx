import React from 'react';

interface Partner {
  name: string;
  logo?: string;
  description: string;
}

export const Partners: React.FC = () => {
  const partners: Partner[] = [
    {
      name: "HubSpot for Startups",
      logo: "/logos/hubspot-logo.png",
      description: "CRM and marketing platform for growing startups"
    },
    {
      name: "NVIDIA Inception",
      logo: "/logos/nvidia-inception.png",
      description: "AI computing platform and startup acceleration program"
    },
    {
      name: "Google for Startups",
      logo: "/logos/google-for-startups.png",
      description: "Cloud credits and startup support from Google"
    },
    {
      name: "Microsoft for Startups",
      description: "Azure credits and enterprise tools for startups"
    },
    {
      name: "Oracle for Startups",
      description: "Cloud infrastructure and database solutions for startups"
    },
    {
      name: "AWS Startups",
      description: "Cloud computing platform and startup credits"
    },
    {
      name: "EY",
      description: "Professional services and startup advisory"
    },
    {
      name: "PwC",
      description: "Consulting and professional services"
    },
    {
      name: "Start-up Nation Central",
      description: "Israeli innovation ecosystem connector"
    },
    {
      name: "Nielsen",
      description: "Global measurement and data analytics company"
    },
    {
      name: "Atlassian",
      description: "Team collaboration and productivity tools"
    },
    {
      name: "Slack",
      description: "Business communication and collaboration platform"
    },
    {
      name: "Zoom",
      description: "Video communications and virtual meetings"
    },
    {
      name: "Notion",
      description: "All-in-one workspace for notes, docs, and collaboration"
    },
    {
      name: "Figma",
      description: "Collaborative design and prototyping platform"
    }
  ];

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
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentNode as HTMLElement;
                    const fallback = document.createElement('div');
                    fallback.className = 'text-gray-600 dark:text-gray-300 text-sm font-medium text-center';
                    fallback.textContent = partner.name;
                    parent.appendChild(fallback);
                  }}
                />
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

export default Partners;