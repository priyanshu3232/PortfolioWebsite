import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Facebook, Building2, Hash, Linkedin, ArrowRight } from 'lucide-react';

const ServicesPreview = () => {
  const services = [
    {
      icon: Search,
      title: 'Google Ads Management',
      description: 'Drive targeted traffic and maximize ROI with expertly managed Google Ads campaigns.',
      color: 'bg-stone-600',
      hoverColor: 'group-hover:bg-stone-700',
    },
    {
      icon: Facebook,
      title: 'Meta Ads Management',
      description: 'Reach your ideal audience on Facebook and Instagram with compelling ad creatives.',
      color: 'bg-stone-700',
      hoverColor: 'group-hover:bg-stone-800',
    },
    {
      icon: Building2,
      title: 'Google Business Profile',
      description: 'Optimize your local presence and attract more customers through Google Business.',
      color: 'bg-custom-red',
      hoverColor: 'group-hover:bg-red-700',
    },
    {
      icon: Hash,
      title: 'Social Media Management',
      description: 'Build brand awareness and engage your community across all social platforms.',
      color: 'bg-stone-500',
      hoverColor: 'group-hover:bg-stone-600',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn Marketing',
      description: 'Connect with professionals and generate B2B leads through strategic LinkedIn campaigns.',
      color: 'bg-stone-400',
      hoverColor: 'group-hover:bg-stone-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Our <span className="text-custom-red">Services</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            We offer comprehensive digital marketing solutions to help your business grow and thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to="/services"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-stone-100 cursor-pointer"
            >
              <div className={`w-16 h-16 ${service.color} ${service.hoverColor} rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-custom-red transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="group inline-flex items-center px-8 py-4 bg-custom-red text-white font-semibold rounded-full hover:bg-red-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;