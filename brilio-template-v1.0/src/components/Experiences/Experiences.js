import React from 'react';
import { resumeData } from '../../data/resumeData';

const Experiences = () => {
  return (
    <section className="experiences sticky primary-bg">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-3">
            {/* Intro */}
            <div className="intro">
              <h3 className="title">Experience &amp; Education</h3>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="row items">
              {resumeData.education.map((item) => (
                <div key={item.id} className="col-12 col-md-6 item">
                  <div className="content">
                    <span className="count">{item.count}</span>
                    <h4 className="title mt-0 mb-3">{item.title}</h4>
                    <h6 className="position my-3">{item.position}</h6>
                    <span className="badge small">{item.date}</span>
                    <div className="mt-2 mb-2">
                      <strong className="text-primary">{item.grade}</strong>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
