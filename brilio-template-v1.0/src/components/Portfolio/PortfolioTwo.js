import React from "react";
import { resumeData } from "../../data/resumeData";

const portfolioData = resumeData.projects.map((proj) => ({
  id: proj.id,
  title: proj.title,
  subtitle: proj.subtitle,
  description: proj.description,
  categoryYear: proj.categoryYear,
  categories: JSON.stringify(proj.categoryKeys),
  displayCategories: proj.categories,
  projectLink: `/portfolio-single?id=${proj.id}`
}));

const categories = [
  { id: "all", label: "All" },
  { id: "bigdata", label: "Big Data" },
  { id: "spark", label: "Apache Spark" },
  { id: "cloudera", label: "Cloudera CDP" },
  { id: "cloud", label: "Cloud & DevOps" }
];

const getCategoryCount = (category) => {
  const count =
    category === "all"
      ? portfolioData.length
      : portfolioData.filter((item) => JSON.parse(item.categories).includes(category)).length;
  return count.toString().padStart(2, "0");
};

const PortfolioTwo = () => {
  return (
    <section className="works explore-area portfolio-filter pt-0">
      <div className="container p-0">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="btn-group filter-menu" role="group" aria-label="Filter menu">
              {categories.map(({ id, label }) => (
                <div key={id} className="input-item d-flex">
                  <div className="content">
                    <input
                      type="radio"
                      className="btn-check filter-btn"
                      name="shuffle-filter"
                      id={id}
                      defaultValue={id}
                      defaultChecked={id === "all"}
                    />
                    <label className="btn" htmlFor={id}>{label}</label>
                  </div>
                  <span className="count">{getCategoryCount(id)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row filter-items items inner g-4 mt-2">
          {portfolioData.map((item, index) => (
            <div key={item.id} className="col-12 col-lg-6 item filter-item" data-groups={item.categories}>
              <div className="card h-100 p-4 p-md-5 border rounded-4 shadow-sm minimal-project-card">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="count fs-5 fw-bold text-primary">0{index + 1}.</span>
                  <span className="badge small outlined rounded-pill px-3 py-1">
                    {item.categoryYear}
                  </span>
                </div>

                <h3 className="title h4 fw-bold mt-2 mb-2">
                  <a href={item.projectLink} className="text-decoration-none">
                    {item.title}
                  </a>
                </h3>

                <h6 className="subtitle text-muted mb-3">{item.subtitle}</h6>

                <p className="description mb-4">{item.description}</p>

                <div className="mt-auto pt-3 border-top d-flex flex-wrap justify-content-between align-items-center gap-2">
                  <div className="d-flex flex-wrap gap-2">
                    {item.displayCategories.map((category, idx) => (
                      <span key={idx} className="badge small outlined rounded-pill">
                        {category}
                      </span>
                    ))}
                  </div>

                  <a
                    href={item.projectLink}
                    className="btn btn-sm btn-outline content-btn d-inline-flex align-items-center gap-1 rounded-pill px-3 py-2"
                  >
                    View Details <i className="bi bi-arrow-right-short fs-5"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioTwo;
