import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import './index.css';

// Components
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AdminStats from './components/AdminStats';
import GamingSection from './components/GamingSection';
import PhotographySection from './components/PhotographySection';

// Data
import { personalInfo } from './data/personalInfo';

// Initialize Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const trackVisit = async () => {
      const { data: { publicIp } } = await supabase.functions.invoke('get-ip');
      
      await supabase
        .from('visitors')
        .insert([
          { 
            page: window.location.pathname,
            ip_address: publicIp
          }
        ]);
    };

    trackVisit();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="font-sans">
      <AdminStats />
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-black/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white">{personalInfo.name}</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfolio</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
            <button onClick={() => scrollToSection('gaming')} className="nav-link">Gaming</button>
            <button onClick={() => scrollToSection('photography')} className="nav-link">Photography</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black shadow-lg py-4">
            <div className="flex flex-col space-y-4 px-4">
              <button onClick={() => scrollToSection('home')} className="text-left py-2 text-tech-300 hover:text-white">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 text-tech-300 hover:text-white">About</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left py-2 text-tech-300 hover:text-white">Portfolio</button>
              <button onClick={() => scrollToSection('experience')} className="text-left py-2 text-tech-300 hover:text-white">Experience</button>
              <button onClick={() => scrollToSection('gaming')} className="text-left py-2 text-tech-300 hover:text-white">Gaming</button>
              <button onClick={() => scrollToSection('photography')} className="text-left py-2 text-tech-300 hover:text-white">Photography</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-tech-300 hover:text-white">Contact</button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section - Black */}
      <Hero scrollToSection={scrollToSection} />

      {/* About Section - White */}
      <section id="about" className="section-padding bg-white">
        <About />
      </section>
      
      {/* Portfolio Section - Black */}
      <section id="portfolio" className="section-padding bg-black">
        <Portfolio activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </section>
      
      {/* Experience Section - White */}
      <section id="experience" className="section-padding bg-white">
        <Experience />
      </section>

      {/* Steam Games Section - Black */}
      <section id="gaming" className="section-padding bg-black">
        <GamingSection />
      </section>

      {/* Photography Section - White */}
      <section id="photography" className="section-padding bg-white">
        <PhotographySection />
      </section>
      
      {/* Contact Section - Black */}
      <section id="contact" className="section-padding bg-black">
        <Contact />
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="container mx-auto px-4">
          <p className="mb-6 text-center">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 px-4">
            <button onClick={() => scrollToSection('home')} className="text-tech-300 hover:text-white transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-tech-300 hover:text-white transition-colors">About</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-tech-300 hover:text-white transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('experience')} className="text-tech-300 hover:text-white transition-colors">Experience</button>
            <button onClick={() => scrollToSection('gaming')} className="text-tech-300 hover:text-white transition-colors">Gaming</button>
            <button onClick={() => scrollToSection('photography')} className="text-tech-300 hover:text-white transition-colors">Photography</button>
            <button onClick={() => scrollToSection('contact')} className="text-tech-300 hover:text-white transition-colors">Contact</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;