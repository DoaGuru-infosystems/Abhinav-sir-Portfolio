import React from "react";
import { resumeData } from "../../data/resumeData";

const AwardsTwo = () => {
  const items = resumeData.achievements.items.slice(0, 4);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-lg-3">
        {/* Intro */}
        <div className="intro">
          <h3 className="title">{resumeData.achievements.title}</h3>
        </div>
      </div>
      <div className="col-12 col-lg-8">
        <div className="row items">
          {items.map((item, index) => (
            <div className="col-12 col-md-6 item" key={index}>
              <div className="content">
                <a className="logo" href={item.link}>
                  <img src={`/img/award-${(index % 3) + 1}.png`} alt={`Award ${index + 1}`} />
                </a>
                <h5 className="mt-2 mb-2">{item.title}</h5>
                <span className="badge small text-primary mb-2 d-inline-block">{item.year} — {item.award}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsTwo;
