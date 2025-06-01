import React from 'react';
import { CTAButtons } from '../CTAButtons';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800"
    >
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block mb-4 animate-fadeIn">Engineering the Future with AI.</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text text-2xl md:text-4xl lg:text-5xl animate-fadeIn opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              Partnering with Founders Who Build the Next Generation of Intelligent Systems.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fadeIn opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            From Agentic AI to Convergence Tech, we invest in what matters next—by building, not betting.
          </p>
          
          <div className="animate-fadeIn opacity-0" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
            <CTAButtons variant="dark" className="justify-center" />
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fadeIn opacity-0" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
            <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center items-start p-1">
              <div className="w-1 h-2 bg-white rounded-full animate-scroll-indicator"></div>
            </div>
            <span className="text-white/70 text-sm mt-2">Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
};