import React from 'react';
import { CheckCircle, ArrowRight, Users, Camera, Heart, TrendingUp, Sparkles, Star, Award } from 'lucide-react';

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
    <div className="pt-20 bg-gradient-to-br from-custom-beige via-stone-50 to-custom-beige">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-custom-red/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-stone-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm text-stone-700 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-stone-200 shadow-lg">
              <Camera className="w-4 h-4 text-custom-red" />
              <span className="font-semibold">WE DESIGN EXPERIENCES, NOT ADS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
              Storytelling, built for{' '}
              <span className="bg-gradient-to-r from-custom-red to-red-600 bg-clip-text text-transparent">
                conversion
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              We partner with our clients to deliver fully-managed, innovative, human-to-human UGC marketing campaigns.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-custom-red to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
              <img
                src="/assets/man with show.png"
                alt="UGC Content Creation"
                className="w-full max-w-4xl mx-auto h-80 object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-custom-beige text-stone-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 text-custom-red" />
              <span>PROVEN RESULTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Benefits of{' '}
              <span className="bg-gradient-to-r from-custom-red to-red-600 bg-clip-text text-transparent">
                Influencer Marketing
              </span>
            </h2>
          </div>

          {/* Two column layout with images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="group bg-gradient-to-br from-custom-beige to-stone-100 p-6 rounded-3xl hover:shadow-xl transition-all duration-300 border border-stone-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-custom-red rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-custom-red transition-colors">
                      Evergreen, FTC-compliant content, without wasting products
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      With our +35% ship-to-post rate, brands are confident their campaigns will result in high-quality reusable content.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-custom-beige to-stone-100 p-6 rounded-3xl hover:shadow-xl transition-all duration-300 border border-stone-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-custom-red rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-custom-red transition-colors">
                      Transform content to ecommerce with Shoppable Content
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      Our Shoppable Content widget integrates with product pages to turn content into conversion by doubling your Add-To-Cart rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-custom-red to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                <img
                  src="/assets/running athelete.png"
                  alt="Influencer Marketing Benefits"
                  className="w-full h-80 object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-100 hover:border-custom-red/20 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-custom-red to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-custom-red transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-custom-red/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Our streamlined process ensures maximum impact and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="group text-center relative">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:bg-custom-red/20 transition-all duration-300 group-hover:scale-110">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-custom-red transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/80 leading-relaxed">{step.description}</p>
                
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-custom-beige via-stone-50 to-custom-beige relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-stone-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-stone-200">
                <Users className="w-4 h-4 text-custom-red" />
                <span className="font-semibold">Work with the 5% of Creators</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 leading-tight">
                Your own team of world-class{' '}
                <span className="bg-gradient-to-r from-custom-red to-red-600 bg-clip-text text-transparent">
                  social media creators
                </span>
              </h2>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                We help you decentralize your creation efforts without having to discover, recruit, and onboard the right creators. Our creators have a pulse on social media and understand engagement. Leverage the best user-generated content creators.
              </p>
              <a
                href="https://calendly.com/contactpriyanegi/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-custom-red to-red-600 text-white font-semibold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Book a call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-custom-red to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                <img
                  src="/assets/running girl.png"
                  alt="Social Media Creators"
                  className="w-full h-80 object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Native UGC Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-custom-red to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                <img
                  src="/assets/girlwithflower.png"
                  alt="Native User-Generated Content"
                  className="w-full h-80 object-contain rounded-2xl"
                />
              </div>
            </div>
            
            <div className="lg:order-2">
              <div className="inline-flex items-center space-x-2 bg-custom-beige text-stone-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-stone-200">
                <Camera className="w-4 h-4 text-custom-red" />
                <span className="font-semibold">Create on-brand content that converts</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 leading-tight">
                Native{' '}
                <span className="bg-gradient-to-r from-custom-red to-red-600 bg-clip-text text-transparent">
                  User-Generated Content
                </span>
              </h2>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                Create content that is native to each social media platform and representative of your social media strategy.
              </p>
              <a
                href="https://calendly.com/contactpriyanegi/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-custom-red to-red-600 text-white font-semibold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Book a call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-16 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Content Types We Create</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Diverse content formats to engage your audience across all platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group text-center p-6 rounded-3xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="w-16 h-16 bg-custom-red/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-custom-red/30 transition-colors">
                <Camera className="w-8 h-8 text-custom-red" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-custom-red transition-colors">Unboxing Videos</h3>
              <p className="text-white/70">Authentic product reveals</p>
            </div>
            <div className="group text-center p-6 rounded-3xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="w-16 h-16 bg-custom-red/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-custom-red/30 transition-colors">
                <Users className="w-8 h-8 text-custom-red" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-custom-red transition-colors">Testimonials</h3>
              <p className="text-white/70">Real customer experiences</p>
            </div>
            <div className="group text-center p-6 rounded-3xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="w-16 h-16 bg-custom-red/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-custom-red/30 transition-colors">
                <TrendingUp className="w-8 h-8 text-custom-red" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-custom-red transition-colors">Product Demos</h3>
              <p className="text-white/70">Feature showcases</p>
            </div>
            <div className="group text-center p-6 rounded-3xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="w-16 h-16 bg-custom-red/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-custom-red/30 transition-colors">
                <Heart className="w-8 h-8 text-custom-red" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-custom-red transition-colors">Lifestyle Shots</h3>
              <p className="text-white/70">Brand integration in daily life</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-custom-red via-red-600 to-custom-red relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Ready to Transform Your Content Strategy?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Let's Create Something Amazing Together
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Let's create authentic, engaging user-generated content that converts your audience into customers.
            </p>
            
            <a
              href="https://calendly.com/contactpriyanegi/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-white text-custom-red font-bold rounded-full hover:bg-stone-50 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your UGC Campaign
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">30 Days</div>
                <div className="text-white/80">Money Back Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Free</div>
                <div className="text-white/80">Strategy Consultation</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UGC;
