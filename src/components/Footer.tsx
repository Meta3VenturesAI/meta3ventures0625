import React from 'react';
import { Twitter, Linkedin, Mail, SunMedium as Medium } from 'lucide-react';
import { useForm } from '@formspree/react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const [state, handleSubmit] = useForm("xdkgwaaa");

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">Meta3Ventures</h3>
            <p className="text-gray-400 mb-4">
              Pioneering the future of tech innovation and digital transformation through strategic consulting and cutting-edge solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/meta3ventures" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com/company/meta3ventures" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="https://medium.com/@meta3ventures" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Medium size={20} />
              </a>
              <a href="mailto:info@meta3ventures.com" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Venture Studio Support</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">AI Integration</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Strategic Network Access</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Intelligence Layer</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Growth Acceleration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Derech Menachem Begin 121</p>
              <p>Tel Aviv-Yafo</p>
              <p>Israel</p>
              <p className="mt-4">
                <a href="mailto:info@meta3ventures.com" className="hover:text-white transition-colors">info@meta3ventures.com</a>
              </p>
              <p>
                <a href="tel:+972528444500" className="hover:text-white transition-colors">+972 52-844-4500</a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Meta3Ventures. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};