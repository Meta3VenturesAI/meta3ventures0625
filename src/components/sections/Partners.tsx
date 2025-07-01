import React from 'react';

interface Partner {
  name: string;
  logo: string;
  link: string;
}

export const Partners: React.FC = () => {
  const partners: Partner[] = [
    {
      name: "Nielsen",
      logo: "https://logos-world.net/wp-content/uploads/2020/06/Nielsen-Logo.png",
      link: "https://www.nielsen.com"
    },
    {
      name: "PWC",
      logo: "https://logos-world.net/wp-content/uploads/2020/06/PwC-Logo.png",
      link: "https://www.pwc.com"
    },
    {
      name: "OpenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/512px-OpenAI_Logo.svg.png",
      link: "https://openai.com"
    },
    {
      name: "NVIDIA",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Nvidia-Logo.png",
      link: "https://www.nvidia.com"
    },
    {
      name: "Microsoft",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png",
      link: "https://www.microsoft.com"
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
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[200px] h-20 flex items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto object-contain filter dark:brightness-0 dark:invert group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};