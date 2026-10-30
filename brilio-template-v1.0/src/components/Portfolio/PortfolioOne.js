import React from "react";
import { resumeData } from "../../data/resumeData";

const PortfolioOne = () => {
  const portfolioItems = resumeData.projects;

  return (
    <div className="row g-4 mt-2">
      {portfolioItems.map((item, index) => (
        <div className="col-12 col-lg-6" key={item.id}>
          <div className="card h-100 p-4 p-md-5 border rounded-4 shadow-sm minimal-project-card">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="count fs-5 fw-bold text-primary">0{index + 1}.</span>
              <span className="badge small outlined rounded-pill px-3 py-1">
                {item.categoryYear}
              </span>
            </div>

            <h3 className="title h4 fw-bold mt-2 mb-2">
              <a href={`/portfolio-single?id=${item.id}`} className="text-decoration-none">
                {item.title}
              </a>
            </h3>

            <h6 className="subtitle text-muted mb-3">{item.subtitle}</h6>

            <p className="description mb-4">{item.description}</p>

            <div className="mt-auto pt-3 border-top d-flex flex-wrap justify-content-between align-items-center gap-2">
              <div className="d-flex flex-wrap gap-2">
                {item.categories.map((category, idx) => (
                  <span key={idx} className="badge small outlined rounded-pill">
                    {category}
                  </span>
                ))}
              </div>

              <a
                href={`/portfolio-single?id=${item.id}`}
                className="btn btn-sm btn-outline content-btn d-inline-flex align-items-center gap-1 rounded-pill px-3 py-2"
              >
                View Details <i className="bi bi-arrow-right-short fs-5"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioOne;
