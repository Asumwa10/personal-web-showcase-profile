
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 shadow-sm z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl text-portfolio-blue">My Portfolio</div>
        
        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-portfolio-blue transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-portfolio-blue transition-colors">
            Education
          </button>
          <button onClick={() => scrollToSection('interests')} className="text-gray-700 hover:text-portfolio-blue transition-colors">
            Interests
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-portfolio-blue transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-portfolio-blue transition-colors">
            Contact
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-md animate-fadeIn">
          <div className="flex flex-col p-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="py-3 border-b border-gray-100 text-gray-700 hover:text-portfolio-blue transition-colors text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('education')} 
              className="py-3 border-b border-gray-100 text-gray-700 hover:text-portfolio-blue transition-colors text-left"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('interests')} 
              className="py-3 border-b border-gray-100 text-gray-700 hover:text-portfolio-blue transition-colors text-left"
            >
              Interests
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="py-3 border-b border-gray-100 text-gray-700 hover:text-portfolio-blue transition-colors text-left"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="py-3 text-gray-700 hover:text-portfolio-blue transition-colors text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
