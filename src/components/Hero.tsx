import React from 'react';
import { Download } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black pt-20">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Hi, I'm </span>
            <span className="text-white">{personalInfo.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-tech-300 mb-6">{personalInfo.title}</h2>
          <p className="text-tech-300 mb-8 text-lg">
            {personalInfo.description}
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="/Ziv_Mahluf_CV.pdf" 
              target="_blank" 
              className="btn-primary flex items-center py-2 px-4"
            >
              <Download size={18} className="mr-2" />
              <span>Download CV</span>
            </a>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn-secondary"
            >
              Contact Me
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-black/20"></div>
            <img 
              src={personalInfo.image}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;