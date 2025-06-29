import React from 'react';
import Hero from '../components/Hero';
import BrandsBanner from '../components/BrandsBanner';
import ServicesPreview from '../components/ServicesPreview';
import TestimonialSlider from '../components/TestimonialSlider';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div className="pt-16 lg:pt-20 bg-custom-beige">
      <BrandsBanner />
      <Hero />
      <ServicesPreview />
      <TestimonialSlider />
      <CallToAction />
    </div>
  );
};

export default Home;