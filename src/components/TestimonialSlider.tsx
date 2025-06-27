import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Mr. Afroj Haider',
      position: 'Founder, Wedding Saga India',
      company: 'TechStart Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'We started ads with a modest budget of ₹5,000, and within a month, we had over 10 quality leads in our target city. The targeting and ad creatives were spot-on. As someone who is  cautious with marketing spends, I was impressed with the returns we got so early on.',
      rating: 5,
    },
    {
      id: 2,
      name: 'OPS Jewels',
      position: 'Team OPS Jewels',
      company: 'E-commerce Plus',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'The best investment we made for our business. Their Google Ads management brought us 250% more qualified leads. Highly recommend their services!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Amit Khera',
      position: 'Founder',
      company: 'Amit Khera Photography',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'From building an Instagram strategy to optimizing our Google Business Profile, everything was taken care of professionally. Our local rankings improved, and now our feed reflects the quality of work we do. They are consistent, creative, and results-driven.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Shreyans',
      position: 'Owner, Shreyans Photography',
      company: 'B2B Solutions',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'They took over our Meta and Google ads, and within weeks, we closed 5 solid leads. What I appreciated most was the transparency, timely reporting, and how they aligned everything with our business goals. It is not just about running ads, it’s about running them smartly—and they did just that.',
      rating: 5,
    },
    {id: 5,
      name: 'Mr. Navjot',
      position: 'Founder, Nindi Studio',
      company: 'B2B Solutions',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'We only used Meta ads, and still managed to get over 30 leads in just one month. It was our best-performing campaign yet. The visibility, reach, and quality of leads we got were exactly what we hoped for. These guys really know how to make ads work for small businesses.',
      rating: 5,
      
    },
    {id: 6,
      name: 'Team 4 Seasons',
      position: 'Founder, Nindi Studio',
      company: 'B2B Solutions',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'They crafted a clear, actionable growth strategy for our Instagram and LinkedIn pages. We now have a structured approach to content, better engagement, and an improved brand presence on both platforms. It feels like we finally found a digital partner who gets our industry',
      rating: 5,
      
    },
    
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 2; i++) {
      visible.push(testimonials[(currentSlide + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-custom-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-custom-red">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="relative">
          {/* Desktop View - 2 testimonials */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentSlide}-${index}`}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-custom-red font-medium">{testimonial.position}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-custom-red/20" />
                  <p className="text-gray-700 leading-relaxed pl-6 italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - 1 testimonial */}
          <div className="md:hidden">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonials[currentSlide].name}</h4>
                  <p className="text-custom-red font-medium">{testimonials[currentSlide].position}</p>
                  <p className="text-gray-500 text-sm">{testimonials[currentSlide].company}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-custom-red/20" />
                <p className="text-gray-700 leading-relaxed pl-6 italic">
                  "{testimonials[currentSlide].quote}"
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-custom-red hover:text-red-700 transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-custom-red w-8' : 'bg-gray-300 hover:bg-custom-red/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-custom-red hover:text-red-700 transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
