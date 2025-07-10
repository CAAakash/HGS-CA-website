import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-800">HGS & CO</div>
            <div className="ml-2 text-sm text-gray-600">Chartered Accountants</div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-800 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-800 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-800 transition-colors">About</a>
            <a href="#team" className="text-gray-700 hover:text-blue-800 transition-colors">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-800 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="w-4 h-4" />
              <span>info@hgsco.com</span>
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-800">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-800">Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-800">About</a>
              <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-blue-800">Team</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-800">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;