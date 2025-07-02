import React from 'react';
import { ExternalLink, TrendingUp, Users, Target, Award } from 'lucide-react';

const OurWork = () => {
  const caseStudies = [
    {
      title: 'Wedding Photography',
      category: 'Meta Ads & Google Ads',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      results: [
        { metric: 'ROI Increase', value: '+113%', icon: TrendingUp },
        { metric: 'New Leads', value: '15+', icon: Users },
        { metric: 'Conversion Rate', value: '10%', icon: Target },
      ],
      description: 'Generate high-quality leads for a wedding photographer aiming to expand bookings in targeted cities.',
      challenge: 'The client struggled with inconsistent lead flow and low engagement from their online ad efforts, despite offering competitive packages and strong portfolio work.',
      solution: 'Ran Geo-targeted Meta and Google ad with scroll-stopping creatives.',
    },
    {
      title: 'Used Car Dealership',
      category: 'Google Ads & Meta Ads',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      results: [
        { metric: 'ROI Increase', value: '+215%', icon: TrendingUp },
        { metric: 'New Customers', value: '35+', icon: Users },
        { metric: 'Conversion Rate', value: '20%', icon: Target },
      ],
      description: 'Boost footfall and generate quality leads for a used car dealership struggling with low in-store visits.',
      challenge: 'The dealership faced a consistent drop in customer visits, resulting in slow inventory movement and declining ROI on previous ad campaigns.',
      solution: 'Implemented targeted audience segmentation, optimized ad creatives, and improved landing page experience.',
    },
    {
      title: 'B2B SaaS Platform',
      category: 'LinkedIn Marketing',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      results: [
        { metric: 'Lead Quality', value: '+320%', icon: Award },
        { metric: 'Pipeline Value', value: '$500K', icon: TrendingUp },
        { metric: 'Engagement', value: '+150%', icon: Users },
      ],
      description: 'Generated high-quality B2B leads for a SaaS platform through strategic LinkedIn marketing and content campaigns.',
      challenge: 'Difficulty reaching decision-makers and generating qualified leads in a competitive market.',
      solution: 'Developed thought leadership content strategy and implemented targeted LinkedIn advertising campaigns.',
    },
    {
      title: 'Local Restaurant Chain',
      category: 'Google Business Profile & Social Media',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      results: [
        { metric: 'Local Visibility', value: '+60%', icon: Target },
        { metric: 'Foot Traffic', value: '+50%', icon: Users },
        { metric: 'Online Orders', value: '+60%', icon: TrendingUp },
      ],
      description: 'Boosted local presence and customer engagement for a restaurant chain across multiple locations.',
      challenge: 'Poor online visibility and inconsistent brand presence across locations.',
      solution: 'Optimized Google Business Profiles, implemented local SEO strategy, and created engaging social content.',
    },
  ];

  return (
    <div className="pt-20 bg-custom-beige">
      {/* Hero Section */}
      <section className="bg-custom-beige py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Our <span className="text-custom-red">Work</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">
            Discover how we've helped businesses like yours achieve remarkable growth through strategic digital marketing campaigns.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-xl"
                  />
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="inline-block bg-custom-beige text-stone-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                      {study.category}
                    </div>
                    <h3 className="text-3xl font-bold text-stone-900 mb-4">{study.title}</h3>
                    <p className="text-lg text-stone-600 mb-6">{study.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center p-4 bg-custom-beige rounded-xl">
                        <result.icon className="w-6 h-6 text-custom-red mx-auto mb-2" />
                        <div className="text-2xl font-bold text-stone-900">{result.value}</div>
                        <div className="text-sm text-stone-600">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-stone-900 mb-2">Challenge:</h4>
                      <p className="text-stone-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900 mb-2">Solution:</h4>
                      <p className="text-stone-600">{study.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-custom-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our proven strategies have delivered exceptional results across industries and business sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">30+</div>
              <div className="text-white/80">Campaigns Launched</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">$60K</div>
              <div className="text-white/80">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">180%</div>
              <div className="text-white/80">Average ROI</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;