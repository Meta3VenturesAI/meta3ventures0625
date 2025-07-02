import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { CheckCircle, Users, Target, Network } from 'lucide-react';
import { CTAButtons } from '../components/CTAButtons';
import { Link } from 'react-router-dom';

const PartnersPage: React.FC = () => {
  const [imageLoadErrors, setImageLoadErrors] = useState<Record<string, boolean>>({});

  const partners = [
    {
      name: "HubSpot for Startups",
      description: "CRM and marketing platform for growing startups"
    },
    {
      name: "NVIDIA Inception",
      description: "AI computing platform and startup acceleration program"
    },
    {
      name: "Google for Startups",
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

  const handleImageError = (partnerName: string) => {
    console.warn(`Image failed to load for partner: ${partnerName}`);
    setImageLoadErrors(prev => ({ ...prev, [partnerName]: true }));
  };

  return (
    <>
      <SEO 
        title="Partners - Meta3Ventures"
        description="Explore our strategic partnerships with industry leaders in AI, technology, and innovation."
      />
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-24">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Strategic Partners
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mt-2">
                  Powering Innovation Together
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We collaborate with industry leaders to provide our portfolio companies with 
                unparalleled resources, expertise, and opportunities.
              </p>
              <div className="flex justify-center">
                <CTAButtons variant="dark" />
              </div>
            </div>
          </div>
        </div>

        {/* Partner Benefits */}
        <div className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Partnership Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  Free Services & Resources
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Cloud credits worth up to $100,000 through partner platforms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Access to partner APIs and development tools
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Technical documentation and learning resources
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Development environments and testing infrastructure
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  Discounted Services
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Up to 90% off on enterprise software licenses
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Preferred pricing on consulting and support services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Reduced rates for training and certification programs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Special pricing on hardware and infrastructure
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Current Partners */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
              Our Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center justify-items-center max-w-7xl mx-auto">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="w-full max-w-[280px] bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  <div className="h-32 flex items-center justify-center p-4">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white text-center px-2">
                      {partner.name}
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-center">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Network */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Network
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                We're always looking to expand our network of industry experts, advisors, and partners. 
                If you're passionate about AI, blockchain, and emerging technologies, we'd love to connect.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 p-8 rounded-xl">
                  <div className="p-3 bg-white/20 rounded-lg w-fit mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Become an Advisor</h3>
                  <p className="text-gray-300 mb-6">
                    Share your expertise and help shape the future of technology ventures.
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-white text-indigo-900 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Apply as Advisor
                  </Link>
                </div>
                <div className="bg-white/10 p-8 rounded-xl">
                  <div className="p-3 bg-white/20 rounded-lg w-fit mx-auto mb-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Partner With Us</h3>
                  <p className="text-gray-300 mb-6">
                    Explore strategic partnerships and collaboration opportunities.
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-white text-indigo-900 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Discuss Partnership
                  </Link>
                </div>
                <div className="bg-white/10 p-8 rounded-xl">
                  <div className="p-3 bg-white/20 rounded-lg w-fit mx-auto mb-4">
                    <Network className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Join Our Network</h3>
                  <p className="text-gray-300 mb-6">
                    Connect with our ecosystem of innovators and industry leaders.
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-white text-indigo-900 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Join Network
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;