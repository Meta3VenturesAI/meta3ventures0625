import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    { name: "HubSpot for Startups" },
    { name: "NVIDIA Inception" },
    { name: "Google for Startups" },
    { name: "Microsoft for Startups" },
    { name: "Oracle for Startups" },
    { name: "AWS Startups" },
    { name: "EY" },
    { name: "PwC" },
    { name: "Start-up Nation Central" },
    { name: "Nielsen" },
    { name: "Atlassian" },
    { name: "Slack" },
    { name: "Zoom" },
    { name: "Notion" },
    { name: "Figma" }
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
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;