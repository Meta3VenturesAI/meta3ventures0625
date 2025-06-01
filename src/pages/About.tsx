import React from 'react';
import { SEO } from '../components/SEO';
import { Users, Target, Lightbulb, Rocket, Brain, Network, CheckCircle, ArrowRight, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission-Driven",
      description: "We're committed to empowering founders who are building the future of intelligent systems."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation First",
      description: "We push boundaries at the intersection of AI, automation, and emerging technologies."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Founder-Centric",
      description: "Our approach is built around the unique needs and vision of each founding team."
    }
  ];

  const pillars = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Technical Excellence",
      description: "Deep expertise in AI, blockchain, and emerging technologies guides our partnership and support strategies."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Network Effect",
      description: "Our ecosystem of partners, advisors, and portfolio companies creates compound value."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Execution Focus",
      description: "We provide hands-on support and strategic resources to accelerate growth and innovation."
    }
  ];

  return (
    <>
      <SEO 
        title="About - Meta3Ventures"
        description="Meta3Ventures is a thesis-driven venture platform empowering the next generation of intelligent companies through AI innovation and strategic support."
      />
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
                Where Vision Meets Execution
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Meta3Ventures is a thesis-driven venture platform—part startup studio, part strategic partner—built 
                to empower the next generation of intelligent companies. We partner with and support bold, technical founders building 
                at the frontier of Agentic AI, automation, and convergence technologies.
              </p>
            </div>

            {/* Who We Are Section */}
            <section className="mb-20">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                    Who We Are
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
                    We are a collective of technologists, operators, and innovators united by a shared vision: 
                    to accelerate the development and adoption of intelligent systems that solve real-world problems.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                        Our Approach
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We combine deep technical expertise with hands-on operational support to help founders 
                        navigate the complexities of building AI-first companies. Our platform provides the 
                        tools, insights, and connections needed to accelerate growth and maximize impact.
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                        Our Impact
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Through strategic partnerships and active support, we're helping shape the future 
                        of industries ranging from enterprise software to biotech. Our portfolio companies 
                        are at the forefront of innovation, creating solutions that matter.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    We envision a future where intelligent systems enhance human capabilities and solve complex 
                    global challenges through innovative technology solutions. A world where AI and automation 
                    work seamlessly to create more opportunities and better outcomes for everyone.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    To engineer the future of intelligent systems by co-building with the founders who dare to 
                    define it. We provide the strategic support, technical expertise, and network access needed 
                    to turn visionary ideas into market-leading companies.
                  </p>
                </div>
              </div>
            </section>

            {/* Leadership Section */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
                  Leadership
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Bringing together decades of experience in technology, venture building, and company scaling to help founders succeed.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative h-full">
                      <img 
                        src="https://res.cloudinary.com/dmoricfgw/image/upload/v1747140463/Liron1_pvqoev.jpg"
                        alt="Liron Langer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Liron Langer</h3>
                      <p className="text-xl text-indigo-600 dark:text-indigo-400 mb-6">Managing Director</p>
                      
                      <div className="prose dark:prose-invert">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Liron Langer serves as the Managing Director of Meta3Ventures, where he leverages his extensive experience 
                          in venture building, entrepreneurship, and company management to drive innovation and transformative growth 
                          in the AI and Web3 industries.
                        </p>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          With over 25 years of experience in founding, scaling, and managing companies from inception to successful 
                          exits, Liron's expertise spans across AI, Cybersecurity, Blockchain, Retail, Media, and Fintech.
                        </p>

                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          As the former Chief Investment Officer at Nielsen Innovate Fund, Liron has a strong track record of 
                          early-stage partnership success, guiding numerous startups and delivering exceptional returns to LPs.
                        </p>
                      </div>

                      <div className="flex items-center space-x-4">
                        <a 
                          href="mailto:liron@meta3ventures.com"
                          className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          <Mail className="w-6 h-6" />
                        </a>
                        <a 
                          href="https://linkedin.com/in/lironlanger"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          <Linkedin className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Values Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg w-fit mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Strategic Pillars */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                Strategic Pillars
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pillars.map((pillar, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg w-fit mb-4">
                      {pillar.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Join Us Section */}
            <section className="py-16 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Join Our Network
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    We're always looking to expand our network of industry experts, advisors, and partners. 
                    If you're passionate about AI, blockchain, and emerging technologies, we'd love to connect.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white/10 p-6 rounded-xl">
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
                    <div className="bg-white/10 p-6 rounded-xl">
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
                    <div className="bg-white/10 p-6 rounded-xl">
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

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Build the Future?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join us in shaping the next generation of intelligent systems.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    to="/apply" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 border border-white text-white hover:bg-white/10 font-medium rounded-lg transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;