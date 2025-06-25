import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, TrendingUp, Users, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-stone-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-stone-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-stone-150 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-stone-100 text-stone-700 px-4 py-2 rounded-full text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                <span>Scale Your Brand Today</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight">
                Scale your brand with a{' '}
                <span className="bg-gradient-to-r from-stone-600 to-amber-700 bg-clip-text text-transparent">
                  Farsight Media
                </span>
              </h1>
              
              <p className="text-xl text-stone-600 leading-relaxed max-w-2xl">
                We blend paid media and micro-influencer marketing to create campaigns you can measure. 
                Drive real results with data-driven strategies that scale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-stone-600 to-amber-700 text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button className="group inline-flex items-center justify-center px-8 py-4 border-2 border-stone-300 text-stone-700 font-semibold rounded-full hover:border-stone-600 hover:text-stone-600 transition-all duration-300">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-stone-600">500+</div>
                <div className="text-sm text-stone-500 mt-1">Campaigns Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700">98%</div>
                <div className="text-sm text-stone-500 mt-1">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-stone-700">2.5M+</div>
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
              <div className="grid grid-cols-2 gap-8 items-center justify-items-center">
                {/* Google */}
                <div className="flex items-center justify-center p-4 bg-stone-50 rounded-xl hover:bg-stone-100 transition-colors duration-300 w-full h-20">
                  <svg className="h-8 w-auto" viewBox="0 0 272 92" fill="none">
                    <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#8B7355"/>
                    <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#B59A7A"/>
                    <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#A67C5A"/>
                    <path d="M225 3v65h-9.5V3h9.5z" fill="#8B7355"/>
                    <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#B59A7A"/>
                    <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#8B7355"/>
                  </svg>
                </div>

                {/* Meta */}
                <div className="flex items-center justify-center p-4 bg-stone-50 rounded-xl hover:bg-stone-100 transition-colors duration-300 w-full h-20">
                  <svg className="h-8 w-auto" viewBox="0 0 1024 1024" fill="none">
                    <path d="M643.181 247.636c-98.289 0-178.909 80.62-178.909 178.909s80.62 178.909 178.909 178.909 178.909-80.62 178.909-178.909-80.62-178.909-178.909-178.909zm0 287.418c-59.927 0-108.509-48.582-108.509-108.509s48.582-108.509 108.509-108.509 108.509 48.582 108.509 108.509-48.582 108.509-108.509 108.509z" fill="#8B7355"/>
                    <path d="M380.818 247.636c-98.289 0-178.909 80.62-178.909 178.909s80.62 178.909 178.909 178.909c98.289 0 178.909-80.62 178.909-178.909s-80.62-178.909-178.909-178.909zm0 287.418c-59.927 0-108.509-48.582-108.509-108.509s48.582-108.509 108.509-108.509 108.509 48.582 108.509 108.509-48.582 108.509-108.509 108.509z" fill="#8B7355"/>
                  </svg>
                </div>

                {/* Microsoft */}
                <div className="flex items-center justify-center p-4 bg-stone-50 rounded-xl hover:bg-stone-100 transition-colors duration-300 w-full h-20">
                  <svg className="h-8 w-auto" viewBox="0 0 23 23" fill="none">
                    <path fill="#f3f3f3" d="M0 0h23v23H0z"/>
                    <path fill="#8B7355" d="M1 1h10v10H1z"/>
                    <path fill="#A67C5A" d="M12 1h10v10H12z"/>
                    <path fill="#B59A7A" d="M1 12h10v10H1z"/>
                    <path fill="#D4B896" d="M12 12h10v10H12z"/>
                  </svg>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center justify-center p-4 bg-stone-50 rounded-xl hover:bg-stone-100 transition-colors duration-300 w-full h-20">
                  <svg className="h-8 w-auto" viewBox="0 0 24 24" fill="none">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#8B7355"/>
                  </svg>
                </div>

                {/* Shopify */}
                <div className="flex items-center justify-center p-4 bg-stone-50 rounded-xl hover:bg-stone-100 transition-colors duration-300 w-full h-20 col-span-2">
                  <svg className="h-8 w-auto" viewBox="0 0 109.5 124.5" fill="none">
                    <path d="M74.7 14.8c0 0-1.4-.4-3.7-.4-7.8 0-12.8 2.9-12.8 8.3 0 9.1 16.1 11.2 16.1 30.2 0 14.9-9.4 24.6-22.1 24.6-15.1 0-22.8-9.4-22.8-9.4l4.1-13.6s7.8 6.9 14.2 6.9c4.1 0 5.9-3.2 5.9-5.5 0-9.6-13.2-10-13.2-28.3 0-14.5 10.4-28.6 31.4-28.6 8.1 0 12.1 2.3 12.1 2.3L74.7 14.8z" fill="#A67C5A"/>
                    <path d="M82.9 23.2c-1.2 0-2.1.9-2.4 2.2-2.3 11.7-6.4 26.3-8.5 35.1-.8 3.4-1.5 6.1-2 8.3-.2 1-.4 1.8-.5 2.4 0 .3-.1.5-.1.7 0 0 0 .1 0 .1-1.1-10.4-3.5-26.4-4.9-37.2-.2-1.6-1.6-2.8-3.2-2.8h-9.9c-1.8 0-3.2 1.4-3.2 3.2v.1c0 .1 0 .3.1.4 1.4 10.8 3.8 26.8 4.9 37.2 0 0 0-.1 0-.1 0-.2.1-.4.1-.7.1-.6.3-1.4.5-2.4.5-2.2 1.2-4.9 2-8.3 2.1-8.8 6.2-23.4 8.5-35.1.3-1.3 1.2-2.2 2.4-2.2h10.7c1.8 0 3.2-1.4 3.2-3.2s-1.4-3.2-3.2-3.2H82.9z" fill="#8B7355"/>
                  </svg>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-stone-900">ROI Increase</div>
                    <div className="text-lg font-bold text-amber-700">+245%</div>
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
            <div className="absolute inset-0 bg-gradient-to-r from-stone-400 to-amber-400 rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;