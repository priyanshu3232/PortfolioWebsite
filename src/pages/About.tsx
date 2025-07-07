import React from 'react';
import { Users, Target, Award, Heart, Zap, Shield } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Rohan Rana',
      position: 'Founder',
      image: '/assets/Rohan.png',
      bio: 'I believe in building systems that scale, strategies that convert and teams that move fast. ',
    },
    {
      name: 'Priya Negi',
      position: 'Co-Founder',
      image: '/assets/Priya.png',
      bio: 'I thrive on solving real business challenges with smart, performance-focused marketing.',
    },
    {
      name: 'Priyanshu Chauhan',
      position: 'Web Developer',
      image: '/assets/Priyanshu.png',
      bio: 'IIT Roorkee Graduate. Passionate about technology and its application in modern problems.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every strategy we implement is designed to deliver measurable results and drive real business growth.',
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We treat every client partnership as a long-term relationship built on trust.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of industry trends and continuously adapt our strategies to leverage the latest opportunities.',
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Complete transparency in our processes, reporting, and communication. No hidden fees or surprises.',
    },
  ];

  return (
    <div className="pt-16 bg-custom-beige">
      {/* Hero Section */}
      <section className="bg-custom-beige py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            About <span className="text-custom-red">Us</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">
            We're a team of passionate digital marketing experts dedicated to helping businesses achieve extraordinary growth through innovative strategies and measurable results.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                At Farsight Media, we believe every business deserves to reach its full potential. Our mission is to democratize access to world-class digital marketing strategies that were once only available to enterprise-level companies.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                We don't believe in guesswork or generic campaigns. We craft tailored client acquisition systems that turn cold traffic into qualified leads, booked appointments, and loyal customers.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-custom-beige rounded-xl">
                  <div className="text-3xl font-bold text-custom-red">5+</div>
                  <div className="text-sm text-stone-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-custom-beige rounded-xl">
                  <div className="text-3xl font-bold text-custom-red">200+</div>
                  <div className="text-sm text-stone-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Our Mission"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-custom-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape how we work with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-custom-red rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4">{value.title}</h3>
                <p className="text-stone-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              The talented individuals behind our success stories and your business growth.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-stone-900 mb-2">{member.name}</h3>
                    <p className="text-custom-red font-medium mb-4">{member.position}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-custom-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our team can help your business achieve its growth goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-custom-red font-semibold rounded-full hover:bg-stone-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;