import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <span className="text-lg font-bold group-hover:text-stone-400 transition-colors duration-300">
                <span className="text-white">Farsight</span>
                <span className="text-custom-red">Media</span>
              </span>
            </Link>
            <p className="text-stone-300 text-sm leading-relaxed">
              Driving results through targeted ads, strategic SEO, and conversion-focused web design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-custom-red transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-custom-red transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:hello@farsightmedia.com" className="text-stone-400 hover:text-custom-red transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-stone-300 hover:text-custom-red transition-colors duration-300 text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="text-stone-300 hover:text-custom-red transition-colors duration-300 text-sm">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-300 hover:text-custom-red transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-300 hover:text-custom-red transition-colors duration-300 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>Google Ads Management</li>
              <li>Meta Ads Management</li>
              <li>Google Business Profile</li>
              <li>Social Media Management</li>
              <li>LinkedIn Marketing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-stone-400" />
                <span className="text-sm text-stone-300">hello@farsightmedia.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-stone-400" />
                <span className="text-sm text-stone-300">+91 74171 42824</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-stone-400" />
                <span className="text-sm text-stone-300">Dehradun, Uttarakhand</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-stone-400">
            © 2025 Farsight Media. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-stone-400 hover:text-custom-red transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-stone-400 hover:text-custom-red transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;