import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { resumeData } from "../../data/resumeData";

const PortfolioSingleSection = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const projectId = parseInt(searchParams.get("id"), 10) || 1;

  const [portfolio, setPortfolio] = useState(() => {
    return resumeData.projects.find((p) => p.id === projectId) || resumeData.projects[0];
  });

  useEffect(() => {
    const selected = resumeData.projects.find((p) => p.id === projectId) || resumeData.projects[0];
    setPortfolio(selected);
  }, [projectId]);

  if (!portfolio) {
    return <p>Loading project details...</p>;
  }

  return (
    <section className="content">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-5">
            <div className="heading">
              <div className="portfolio-meta d-flex align-items-center">
                <div className="portfolio-terms">
                  {portfolio.categories.map((category, index) => (
                    <a key={index} className="terms" href="/portfolio">
                      {category}
                    </a>
                  ))}
                </div>
                <span className="date">{portfolio.categoryYear}</span>
              </div>
              <h2>{portfolio.title}</h2>
              <p>{portfolio.description}</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 items portfolio-meta mt-3 mt-md-0">
            <div className="task">
              <h6 className="title mb-3">Task & Scope</h6>
              <span className="details">{portfolio.task}</span>
            </div>
            <div className="content item d-flex flex-column flex-md-row justify-content-between">
              <div className="role">
                <h6 className="title mt-0 mb-1 mb-md-3">Role</h6>
                <div className="portfolio-terms">
                  {portfolio.role.map((role, index) => (
                    <span key={index} className="terms">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <div className="client my-3 my-md-0">
                <h6 className="title mt-0 mb-1 mb-md-3">Project Type</h6>
                <span>{portfolio.client}</span>
              </div>
              <div className="category">
                <h6 className="title mt-0 mb-1 mb-md-3">Tech & Year</h6>
                <span>{portfolio.categoryYear}</span>
              </div>
            </div>
            <div className="socials item">
              <a className="nav-link d-inline-flex swap-icon ms-0" href={portfolio.liveSite} target="_blank" rel="noreferrer">
                View Repository / Live <i className="icon bi bi-arrow-right-short"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Architecture Highlights & Metrics (No heavy images) */}
        <div className="row portfolio-content items mt-5">
          <div className="col-12">
            <div className="card p-4 p-md-5 border rounded-4 minimal-project-card">
              <h4 className="title mb-4">Architecture Highlights &amp; Technical Scope</h4>
              <div className="row g-4">
                <div className="col-12 col-md-4">
                  <div className="p-3 border rounded-3 h-100">
                    <h6 className="text-primary mb-2">High Throughput &amp; Scale</h6>
                    <p className="small mb-0 text-muted">Architected for multi-TB daily ingestion, partition pruning, and resilient execution at enterprise banking/healthcare scale.</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="p-3 border rounded-3 h-100">
                    <h6 className="text-primary mb-2">Cluster Optimization</h6>
                    <p className="small mb-0 text-muted">Fine-tuned YARN capacity scheduling, executor cores, and memory parameters to eliminate GC pauses and OOM failures.</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="p-3 border rounded-3 h-100">
                    <h6 className="text-primary mb-2">Enterprise Governance &amp; CI/CD</h6>
                    <p className="small mb-0 text-muted">Enforced granular Ranger security policies (PCI/SOX) and established automated TeamCity/uDeploy artifact deployment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSingleSection;
