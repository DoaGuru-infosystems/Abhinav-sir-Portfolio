import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import MagneticButton from '../Miscellaneous/MagneticButton';
import { resumeData } from '../../data/resumeData';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutOne = ({ 
  title = resumeData.personalInfo.aboutTitle || "Lead Data Engineer specializing in Cloudera CDH/CDP, Apache Spark, and Enterprise Big Data Ecosystems.",
  subTitle = resumeData.personalInfo.aboutSubtitle || resumeData.personalInfo.summary,
  buttonText = "More About Me",
  buttonLink = "/about"
}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      const splitElements = document.querySelectorAll(".reveal-text");

      if (splitElements.length === 0) return; // Prevents errors if no elements are found

      splitElements.forEach((element) => {
        // Ensure the text is properly split
        const text = new SplitType(element, { types: 'words, chars' });

        // GSAP animation for text reveal
        gsap.fromTo(
          text.chars,
          { color: "#B6BCC6" }, // Initial gray color
          {
            color: "#030712", // Target black color
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              end: 'top 20%',
              scrub: true,
            },
            stagger: 0.05, // Slight stagger for smoother animation
          }
        );
      });

      // Refresh ScrollTrigger after elements are updated
      ScrollTrigger.refresh();
    }, 300); // Delay ensures text splitting is fully applied

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Cleanup when component unmounts
    };
  }, []);

  return (
    <div className="row">
      <div className="col-12">
        {/* Content */}
        <div className="content">
          <h2 className="title reveal-text mt-0">{title}</h2>
        </div>

        <div className="content d-flex flex-column flex-md-row justify-content-md-between">
          {/* Subtitle */}
          <p className="sub-title w-50 mt-4 ms-auto">{subTitle}</p>
        </div>

        {/* Button */}
        <div className="about-button mt-4">
          <MagneticButton href={buttonLink}>
            {buttonText}
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
