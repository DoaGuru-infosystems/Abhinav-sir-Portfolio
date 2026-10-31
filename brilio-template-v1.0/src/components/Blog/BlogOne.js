import React, { useState } from 'react';
import { resumeData } from '../../data/resumeData';

const BlogOne = () => {
  const [blogs] = useState(resumeData.blogs);

  return (
    <div className="row g-4 items mt-2">
      {blogs.map(blog => (
        <div key={blog.id} className="col-12 col-md-6 col-lg-4 item">
          <div className="card h-100 p-4 border rounded-4 shadow-sm minimal-project-card d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span style={{color:"#909dac"}}   className="small">
                <i className="bi bi-calendar3 me-1"></i>{blog.date}
              </span>
              <span className="badge small outlined rounded-pill px-2 py-1">
                {blog.author}
              </span>
            </div>

            <h4 className="title h5 fw-bold my-2">
              <a href={blog.link} className="text-decoration-none">
                {blog.title}
              </a>
            </h4>

            <p className="description small text-muted mb-4 mt-2">
              {blog.snippet}
            </p>

            <div className="mt-auto pt-3 border-top d-flex flex-wrap justify-content-between align-items-center gap-2">
              <div className="d-flex flex-wrap gap-1">
                {blog.categories.map((category, index) => (
                  <span key={index} className="badge small outlined rounded-pill">
                    {category}
                  </span>
                ))}
              </div>

              <a
                href={blog.link}
                className="btn btn-sm btn-outline content-btn d-inline-flex align-items-center gap-1 rounded-pill px-3 py-1"
              >
                Read <i className="bi bi-arrow-right-short fs-5"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogOne;
