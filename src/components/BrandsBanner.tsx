import React from 'react';
import { Heart, Star, Award, Zap, Shield, Rocket } from 'lucide-react';

const BrandsBanner = () => {
  const partners = [
    { name: 'Google Partner', icon: Star, color: 'text-yellow-500' },
    { name: 'Meta Partner', icon: Heart, color: 'text-blue-500' },
    { name: 'LinkedIn Partner', icon: Award, color: 'text-blue-600' },
    { name: 'Certified Agency', icon: Shield, color: 'text-green-500' },
    { name: 'Growth Experts', icon: Rocket, color: 'text-purple-500' },
    { name: 'Performance Driven', icon: Zap, color: 'text-orange-500' },
  ];

  return (
    <section className="hidden lg:block bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-12">
          <div className="text-white font-medium text-sm">Trusted Partners:</div>
          <div className="flex items-center space-x-8 overflow-x-auto">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-300 whitespace-nowrap group"
              >
                <partner.icon className={`w-5 h-5 ${partner.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-sm font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsBanner;