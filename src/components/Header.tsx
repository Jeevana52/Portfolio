
import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-indigo-600">JM</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Jeevana52" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jeevana123/" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:jeevanamaradana123@gmail.com"
               className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pt-4 pb-3">
              <a href="#about" className="nav-link-mobile" onClick={toggleMenu}>About</a>
              <a href="#experience" className="nav-link-mobile" onClick={toggleMenu}>Experience</a>
              <a href="#projects" className="nav-link-mobile" onClick={toggleMenu}>Projects</a>
              <a href="#skills" className="nav-link-mobile" onClick={toggleMenu}>Skills</a>
              <a href="#contact" className="nav-link-mobile" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
