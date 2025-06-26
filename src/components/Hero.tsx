import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, TrendingUp, Users, Target } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-custom-beige overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/30 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-white/40 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white/20 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/80 text-stone-700 px-4 py-2 rounded-full text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                <span>Scale Your Brand Today</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight">
                Scale your brand with a{' '}
                <span className="text-custom-red">Farsight Media</span>
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed max-w-2xl">
                We blend paid media and micro-influencer marketing to create campaigns you can measure.
                Drive real results with data-driven strategies that scale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-custom-red text-white font-semibold rounded-full hover:bg-red-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <button className="group inline-flex items-center justify-center px-8 py-4 border-2 border-stone-400 text-stone-700 font-semibold rounded-full hover:border-custom-red hover:text-custom-red transition-all duration-300">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-custom-red">500+</div>
                <div className="text-sm text-stone-500 mt-1">Campaigns Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-custom-red">98%</div>
                <div className="text-sm text-stone-500 mt-1">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-custom-red">2.5M+</div>
                <div className="text-sm text-stone-500 mt-1">Reach Generated</div>
              </div>
            </div>
          </div>

          {/* Right Content - Trusted Partners */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Trusted by Leading Brands</h3>
                <p className="text-stone-600">Join hundreds of successful companies</p>
              </div>

              {/* Company Logos Grid */}
              <div className="grid grid-cols-2 gap-6 items-center justify-items-center">
                <div className="flex flex-col items-center justify-center p-6 bg-custom-beige rounded-xl hover:bg-stone-100 transition-colors duration-300 w-full h-32">
                  <img
                    src="/assets/4 seasons photography.png"
                    alt="4 Seasons Photography"
                    className="h-16 w-auto object-contain mb-3"
                  />
                  <span className="text-xs font-medium text-stone-700 text-center">4 Seasons Photography</span>
                </div>
                <div className="flex flex-col items-center justify-center p-6 bg-custom-beige rounded-xl hover:bg-stone-100 transition-colors duration-300 w-full h-32">
                  <img
                    src="/assets/amit khera logo.png"
                    alt="Amit Khera Photography"
                    className="h-16 w-auto object-contain mb-3"
                  />
                  <span className="text-xs font-medium text-stone-700 text-center">Amit Khera Photography</span>
                </div>
                <div className="flex flex-col items-center justify-center p-6 bg-custom-beige rounded-xl hover:bg-stone-100 transition-colors duration-300 w-full h-32">
                  <img
                    src="/assets/ranjana bhatacharjee photography.png"
                    alt="Ranjana Bhatacharjee Photography"
                    className="h-16 w-auto object-contain mb-3"
                  />
                  <span className="text-xs font-medium text-stone-700 text-center">Ranjana Bhatacharjee Photography</span>
                </div>
                <div className="flex flex-col items-center justify-center p-6 bg-custom-beige rounded-xl hover:bg-stone-100 transition-colors duration-300 w-full h-32">
                  <img
                    src="/assets/wedding saga india.png"
                    alt="Wedding Saga"
                    className="h-16 w-auto object-contain mb-3"
                  />
                  <span className="text-xs font-medium text-stone-700 text-center">Wedding Saga</span>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-custom-red" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-stone-900">ROI Increase</div>
                    <div className="text-lg font-bold text-custom-red">+245%</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border animate-bounce delay-1000">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-stone-900">New Customers</div>
                    <div className="text-lg font-bold text-stone-600">+1,250</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-custom-red rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;