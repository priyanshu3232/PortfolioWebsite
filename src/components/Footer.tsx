import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

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
              <a 
                href="https://www.linkedin.com/company/far-sight-media/posts/?feedView=all" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-custom-red transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services" 
                  className="text-stone-300 hover:text-custom-red transition-colors duration-300 text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/our-work" 
                  className="text-stone-300 hover:text-custom-red transition-colors duration-300 text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link 
                  to="/ugc" 
                  className="text-stone-300 hover:text-custom-red transition-colors duration-300 text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  UGC
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-stone-300 hover:text-custom-red transition-colors duration-300 text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-stone-300 hover:text-custom-red transition-colors duration-300 text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/services" 
                  className="text-stone-300 hover:text-custom-red transition-colors duration-300"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Google Ads Management
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-stone-300 hover:text-custom-red transition-colors duration-300"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Meta Ads Management
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-stone-300 hover:text-custom-red transition-colors duration-300"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Google Business Profile
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-stone-300 hover:text-custom-red transition-colors duration-300"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-stone-300 hover:text-custom-red transition-colors duration-300"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  LinkedIn Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-stone-400" />
                <span className="text-sm text-stone-300">support@itsfarsightmedia.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-stone-400" />
                <span className="text-sm text-stone-300">+91 74171 42824</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-stone-400" />
                <span className="text-sm text-stone-300">McDonough, Georgia, United States</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8">
          {/* Results Section */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-6">Results That Speak for Themselves</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-custom-red">30+</div>
                <div className="text-stone-400 text-sm">Campaigns Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-custom-red">$60K</div>
                <div className="text-stone-400 text-sm">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-custom-red">98%</div>
                <div className="text-stone-400 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
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
      </div>
    </footer>
  );
};

export default Footer;
