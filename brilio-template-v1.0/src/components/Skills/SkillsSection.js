import React, { useEffect, useState, useRef } from 'react';
import { resumeData } from '../../data/resumeData';

const SkillsSection = () => {
  const [skillsData] = useState(resumeData.skills);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll('.progress-bar');
            progressBars.forEach(progressBar => {
              const value = progressBar.getAttribute('data-progress');
              progressBar.style.opacity = 1;
              progressBar.style.width = `${value}%`;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = skillsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [skillsData]);

  if (!skillsData) {
    return <div>Loading skills...</div>;
  }

  return (
    <div className="row justify-content-between" ref={skillsRef}>
      <div className="col-12 col-lg-3">
        <div className="intro">
          <h3 className="title">{skillsData.title}</h3>
        </div>
      </div>
      <div className="col-12 col-lg-8">
        <div className="row items">
          {skillsData.items.map((item, index) => (
            <div key={index} className="col-12 col-md-6 item">
              <div className="content">
                <div className="heading d-flex align-items-center">
                  <i className={`icon ${item.icon}`}></i>
                  <h2 className="title m-0 ms-2">{item.value}</h2>
                </div>
                <span className="fw-semibold">{item.label}</span>
                <p className="mt-3">{item.description}</p>
              </div>
            </div>
          ))}
          {skillsData.skillsProgress.map((skill, index) => (
            <div key={index} className="col-12 col-md-6 item align-self-center">
              <div className="content mt-5 mt-md-0">
                <div className="progress">
                  <span className="title">{skill.title}</span>
                  <div
                    className="progress-bar"
                    data-progress={skill.progress}
                    style={{ opacity: 0, width: '0%' }}
                  >
                    <span>{skill.progress}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
