import React from 'react';
import { Menu, X, HardHat } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <HardHat className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">DryTech Pro</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="block text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="block text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#projects" className="block text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="block text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;