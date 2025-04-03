
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-portfolio-lightBlue py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Hi, I'm <span className="text-portfolio-blue">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            A passionate web developer creating functional and beautiful web experiences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white px-6 py-3 rounded-lg font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="border-2 border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <div className="relative">
            <div className="absolute -inset-2 md:-inset-4 rounded-full bg-portfolio-blue bg-opacity-10 blur-lg"></div>
            <img 
              src="/lovable-uploads/2903bf1c-2b09-45db-811a-afe0b040fa0b.png" 
              alt="Profile" 
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-xl relative"
            />
          </div>
        </div>
      </div>
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-50 p-3 rounded-full shadow-lg hover:bg-portfolio-blue hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
