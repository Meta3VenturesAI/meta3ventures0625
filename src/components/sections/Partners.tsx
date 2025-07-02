import React from 'react';

interface Partner {
  name: string;
  logo: string;
  link: string;
}

export const Partners: React.FC = () => {
  const partners: Partner[] = [
    {
      name: "HubSpot for Startups",
      logo: "https://www.hubspot.com/hubfs/assets/hubspot.com/style-guide/brand-guidelines/guidelines_the-logo.svg",
      link: "https://www.hubspot.com/startups"
    },
    {
      name: "NVIDIA Inception",
      logo: "https://developer-blogs.nvidia.com/wp-content/uploads/2021/02/nvidia-inception-program-logo-for-screen.png",
      link: "https://www.nvidia.com/en-us/startups/"
    },
    {
      name: "Google for Startups",
      logo: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Logo_for_Google_for_Startups_page.max-1000x1000.png",
      link: "https://startup.google.com/"
    },
    {
      name: "Microsoft for Startups",
      logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4Bw1o",
      link: "https://www.microsoft.com/en-us/startups"
    },
    {
      name: "Oracle for Startups",
      logo: "https://www.oracle.com/a/ocom/img/rc24-oracle-for-startups-logo.png",
      link: "https://www.oracle.com/startup/"
    },
    {
      name: "AWS Startups",
      logo: "https://d0.awsstatic.com/logos/powered-by-aws.png",
      link: "https://aws.amazon.com/startups/"
    },
    {
      name: "EY",
      logo: "https://assets.ey.com/content/dam/ey-sites/ey-com/en_gl/generic-content/ey-logo-horizontal.svg",
      link: "https://www.ey.com/"
    },
    {
      name: "PwC",
      logo: "https://www.pwc.com/content/dam/pwc/us/en/assets/pwc-logo-lockup-white-300x300.png",
      link: "https://www.pwc.com/"
    },
    {
      name: "Start-up Nation Central",
      logo: "https://startupnationcentral.org/wp-content/uploads/2022/06/SNC-Logo-1.svg",
      link: "https://www.startupnationcentral.org/"
    },
    {
      name: "Nielsen",
      logo: "https://www.nielsen.com/wp-content/uploads/sites/3/2021/02/Nielsen-Logo-Large-scaled.jpg",
      link: "https://www.nielsen.com"
    },
    {
      name: "Atlassian",
      logo: "https://wac-cdn.atlassian.com/dam/jcr:616e6748-ad8c-48d9-ae93-28a8f1c4fe03/Atlassian-horizontal-blue-rgb.svg",
      link: "https://www.atlassian.com/"
    },
    {
      name: "Slack",
      logo: "https://a.slack-edge.com/bv1-10/slack_logo-ebd02d1.svg",
      link: "https://slack.com/"
    },
    {
      name: "Zoom",
      logo: "https://st1.zoom.us/static/6.3.10815/image/new/home/logo.svg",
      link: "https://zoom.us/"
    },
    {
      name: "Notion",
      logo: "https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/logos/notion-logo.png",
      link: "https://www.notion.so/"
    },
    {
      name: "Figma",
      logo: "https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=670&h=670&q=75&fit=max&auto=format",
      link: "https://www.figma.com/"
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
                className="max-h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'text-gray-600 dark:text-gray-300 text-sm font-medium text-center';
                  fallback.textContent = partner.name;
                  target.parentNode?.appendChild(fallback);
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};