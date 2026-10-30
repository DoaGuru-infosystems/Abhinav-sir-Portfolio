import React from 'react';
import About from './AboutOne';
import Services from '../Services/Services';

const AboutSection = () => {
  return (
    <section className="services">
      <div className="container">
        {/* About Component */}
        <About />

        {/* Services Component */}
        <Services />
      </div>

      {/* Clients Component */}
      {/* <Clients /> */}

      {/* Testimonial Component */}
      {/* <Testimonial /> */}
    </section>
  );
};

export default AboutSection;
