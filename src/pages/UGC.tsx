import React from 'react';
import { CheckCircle, ArrowRight, Users, Camera, Heart, TrendingUp } from 'lucide-react';

const UGC = () => {
  const benefits = [
    {
      title: 'Builds Trust & Credibility',
      description: 'People trust real customers more than brands. 90% of consumers say UGC influences their purchase decisions. Social proof from real users feels authentic and unbiased.',
      icon: CheckCircle,
    },
    {
      title: 'Cost-Effective Content Creation',
      description: 'UGC gives you tons of fresh content without hiring a production team. You don\'t need to shoot new campaigns all the time, reuse customer videos/photos across ads, social, emails, etc.',
      icon: TrendingUp,
    },
    {
      title: 'Boosts Engagement on Social Media',
      description: 'UGC feels more personal and relatable, so it gets better engagement. Encouraging UGC builds a community and strengthens brand loyalty.',
      icon: Heart,
    },
    {
      title: 'Improves Conversion Rates',
      description: 'UGC (like product reviews, demo videos, or unboxings) reduces hesitation. Pages with UGC see up to 2x higher conversions than those without.',
      icon: Users,
    },
  ];

  const processSteps = [
    {
      title: 'Creative brief',
      description: 'What messaging do you want your assets to convey?',
      icon: '💡',
    },
    {
      title: 'Content selection',
      description: 'Facebook ads, Branded content, TikTok ads, Website, and Amazon product page.',
      icon: '📱',
    },
    {
      title: 'Creators selection',
      description: 'We handpick and vet the top 3% of content creators in your niche.',
      icon: '✍️',
    },
    {
      title: 'Creators influencers',
      description: 'Your products are shipped to the influencers and branded content is created.',
      icon: '🎬',
    },
  ];

  return (
    <div className="pt-20 bg-custom-beige">
      {/* Hero Section */}
      <section className="bg-custom-beige py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/80 text-stone-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Camera className="w-4 h-4" />
              <span>WE DESIGN EXPERIENCES, NOT ADS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Storytelling, built for <span className="text-custom-red">conversion</span>
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">
              We partner with our clients to deliver fully-managed, innovative, human-to-human UGC marketing campaigns.
            </p>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center mb-12">
            <img
              src="/assets/man with show.png"
              alt="UGC Content Creation"
              className="w-full max-w-4xl h-80 md:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Benefits of <span className="text-custom-red">Influencer Marketing</span>
            </h2>
          </div>

          {/* Two column layout with images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="bg-custom-beige p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-stone-900 mb-4">Evergreen, FTC-compliant content, without wasting products</h3>
                <p className="text-stone-600 mb-6">
                  With our +35% ship-to-post rate, brands are confident their campaigns will result high-quality reusable content.
                </p>
              </div>
              
              <div className="bg-custom-beige p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-stone-900 mb-4">Transform content to ecommerce with Shoppable Content</h3>
                <p className="text-stone-600 mb-6">
                  Our Shoppable Content widget integrates with product pages to turn content into conversion by doubling your Add-To-Cart rates.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center">
              <img
                src="/assets/running athelete.png"
                alt="Influencer Marketing Benefits"
                className="w-full max-w-md h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100"
              >
                <div className="w-12 h-12 bg-custom-red rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4">{benefit.title}</h3>
                <p className="text-stone-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-custom-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/80 text-stone-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>Work with the 5% of Creators</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                Your own team of world-class social media creators
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                We help you decentralize your creation efforts without having to discover, recruit, and onboard the right creators. Our creators have a pulse on social media and understand engagement. Leverage the best user-generated content creators.
              </p>
              <a
                href="https://calendly.com/contactpriyanegi/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-custom-red text-white font-semibold rounded-full hover:bg-red-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Book a call
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            
            <div className="flex justify-center">
              <img
                src="/assets/running girl.png"
                alt="Social Media Creators"
                className="w-full max-w-md h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Native UGC Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/assets/girlwithflower.png"
                alt="Native User-Generated Content"
                className="w-full max-w-md h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
            
            <div>
              <div className="inline-flex items-center space-x-2 bg-custom-beige text-stone-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>Create on-brand content that converts</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                Native User-Generated Content
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Create content that is native to each social media platform and representative of your social media strategy.
              </p>
              <a
                href="https://calendly.com/contactpriyanegi/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-custom-red text-white font-semibold rounded-full hover:bg-red-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Book a call
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Unboxing Videos</h3>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Testimonials</h3>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Product Demos</h3>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Lifestyle Shots</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-custom-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create authentic, engaging user-generated content that converts your audience into customers.
          </p>
          <a
            href="https://calendly.com/contactpriyanegi/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-custom-red font-semibold rounded-full hover:bg-stone-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Start Your UGC Campaign
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default UGC;
