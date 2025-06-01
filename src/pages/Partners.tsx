import React from 'react';
import { SEO } from '../components/SEO';
import { CheckCircle } from 'lucide-react';
import { CTAButtons } from '../components/CTAButtons';
import { Link } from 'react-router-dom';

const PartnersPage: React.FC = () => {
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

        {/* Join Us Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Become a Partner
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our ecosystem of innovation and help shape the future of technology. 
                We're always looking for strategic partners who share our vision.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/10 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Strategic Partners</h3>
                  <ul className="text-left space-y-4 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3" />
                      <span>Access to our portfolio companies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3" />
                      <span>Co-investment opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3" />
                      <span>Joint innovation initiatives</span>
                    </li>
                  </ul>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white text-indigo-900 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Become a Partner
                  </Link>
                </div>
                <div className="bg-white/10 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Technology Partners</h3>
                  <ul className="text-left space-y-4 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3" />
                      <span>Integration opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3" />
                      <span>Technical collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3" />
                      <span>Product development synergies</span>
                    </li>
                  </ul>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white text-indigo-900 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Partner With Us
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