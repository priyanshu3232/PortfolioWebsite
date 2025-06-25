import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Services', href: '/services' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-custom-beige/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Brand Logos Banner - Mobile Only */}
      <div className="lg:hidden bg-stone-600 py-2">
        <div className="flex justify-center space-x-6 overflow-x-auto px-4">
          <div className="flex items-center space-x-2 text-stone-100 text-sm font-medium whitespace-nowrap">
            <Heart className="w-4 h-4" />
            <span>Trusted Partners</span>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">
              <span className="text-stone-700">Farsight</span>
              <span className="text-custom-red">Media</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-custom-red relative group ${
                  location.pathname === item.href
                    ? 'text-custom-red'
                    : isScrolled ? 'text-stone-800' : 'text-stone-700'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-red transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-custom-red text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-stone-700 hover:text-custom-red transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-custom-beige shadow-xl border-t">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-base font-medium transition-colors duration-300 hover:text-custom-red ${
                    location.pathname === item.href ? 'text-custom-red' : 'text-stone-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-custom-red text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;