import React from 'react';
import { Search, Facebook, Building2, Hash, Linkedin, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Google Ads Management',
      description: 'Drive targeted traffic and maximize ROI with expertly managed Google Ads campaigns.',
      features: [
        'Keyword research and optimization',
        'Ad copy creation and testing',
        'Bid management and optimization',
        'Landing page optimization',
        'Detailed performance reporting',
        'Conversion tracking setup'
      ],
      color: 'bg-stone-600',
      price: 'Starting at $1,500/month',
    },
    {
      icon: Facebook,
      title: 'Meta Ads Management',
      description: 'Reach your ideal audience on Facebook and Instagram with compelling ad creatives.',
      features: [
        'Audience research and targeting',
        'Creative design and copywriting',
        'Campaign setup and optimization',
        'A/B testing and analysis',
        'Pixel implementation',
        'Custom audience creation'
      ],
      color: 'bg-stone-700',
      price: 'Starting at $1,200/month',
    },
    {
      icon: Building2,
      title: 'Google Business Profile Optimization',
      description: 'Optimize your local presence and attract more customers through Google Business.',
      features: [
        'Profile setup and optimization',
        'Review management',
        'Local SEO optimization',
        'Photo and video management',
        'Post scheduling and management',
        'Local citation building'
      ],
      color: 'bg-custom-red',
      price: 'Starting at $500/month',
    },
    {
      icon: Hash,
      title: 'Social Media Management',
      description: 'Build brand awareness and engage your community across all social platforms.',
      features: [
        'Content strategy development',
        'Daily posting and scheduling',
        'Community management',
        'Influencer partnerships',
        'Social media advertising',
        'Analytics and reporting'
      ],
      color: 'bg-stone-500',
      price: 'Starting at $800/month',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn Marketing',
      description: 'Connect with professionals and generate B2B leads through strategic LinkedIn campaigns.',
      features: [
        'Profile optimization',
        'Content marketing strategy',
        'Lead generation campaigns',
        'Connection building',
        'LinkedIn advertising',
        'B2B outreach automation'
      ],
      color: 'bg-stone-400',
      price: 'Starting at $1,000/month',
    },
  ];

  return (
    <div className="pt-20 bg-custom-beige">
      {/* Hero Section */}
      <section className="bg-custom-beige py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Our <span className="text-custom-red">Services</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">
            Comprehensive digital marketing solutions designed to scale your business and drive measurable results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1 space-y-6">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-stone-900 mb-4">{service.title}</h3>
                    <p className="text-lg text-stone-600 mb-6">{service.description}</p>
                    <div className="text-2xl font-bold text-custom-red mb-6">{service.price}</div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-custom-red text-white font-semibold rounded-full hover:bg-red-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
                
                <div className="flex-1">
                  <div className="bg-custom-beige rounded-2xl p-8">
                    <h4 className="text-xl font-bold text-stone-900 mb-6">What's Included:</h4>
                    <ul className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-custom-red mt-0.5 flex-shrink-0" />
                          <span className="text-stone-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-custom-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss which services are right for your business and create a custom strategy for your growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-custom-red font-semibold rounded-full hover:bg-stone-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Schedule Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;