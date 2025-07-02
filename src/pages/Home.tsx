import React from 'react';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import TestimonialSlider from '../components/TestimonialSlider';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div className="pt-16 lg:pt-16 bg-custom-beige">
      <Hero />
      <ServicesPreview />
      <TestimonialSlider />
      <CallToAction />
    </div>
  );
};

export default Home;