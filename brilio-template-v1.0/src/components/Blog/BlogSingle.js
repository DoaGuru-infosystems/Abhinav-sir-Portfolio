import React, { useState } from 'react';
import MagneticButton from '../Miscellaneous/MagneticButton';
import BlogSection from '../Blog/BlogRelated';
import { resumeData } from '../../data/resumeData';

const defaultPost = {
  title: "Architecting Multi-TB Spark ETL Pipelines on Cloudera CDP 7.1",
  author: resumeData.personalInfo.name,
  date: "January 20, 2025",
  tags: ["Apache Spark", "Cloudera CDP", "Big Data", "YARN"],
  content: [
    {
      type: "paragraph",
      text: "As a Lead Data Engineer managing high-volume data platforms across banking and healthcare, architecting multi-TB Spark ETL pipelines on Cloudera CDP 7.1 requires a holistic approach to distributed computing, memory optimization, and cluster capacity management."
    },
    {
      type: "heading",
      text: "Tuning YARN Capacity Schedulers and Executor Memory"
    },
    {
      type: "paragraph",
      text: "One of the most frequent challenges in large-scale Spark deployments is garbage collection pauses leading to executor lost errors. By tuning dynamic resource allocation, setting optimal executor core ratios (4-5 cores per executor), and configuring YARN capacity scheduler queues, we achieved a 35% throughput gain and completely eliminated OOM failures."
    },
    {
      type: "blockquote",
      text: "Resilient Big Data architecture is built on proactive resource management, intelligent partition strategies, and defense-in-depth security policies with Apache Ranger."
    },
    {
      type: "heading",
      text: "Key Architectural Takeaways"
    },
    {
      type: "list",
      items: [
        "Partition pruning and broadcast joins dramatically reduce shuffle read/write overhead.",
        "Row-level and column-level Ranger security policies ensure strict PCI/SOX compliance without impacting query latency.",
        "Automating deployment with TeamCity and IBM uDeploy standardizes multi-environment releases and reduces release cycle times by 40%."
      ]
    }
  ]
};

const BlogSingle = () => {
  const [post] = useState(defaultPost);

  return (
    <section className="blog blog-single primary-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="card border-0">
              <div className="card-body">
                <div className="post-header mb-4">
                  <div className="post-meta mb-2">
                    <span className="date me-3"><i className="bi bi-calendar3 me-1"></i>{post.date}</span>
                    <span className="author"><i className="bi bi-person me-1"></i>{post.author}</span>
                  </div>
                  <h1 className="post-title">{post.title}</h1>
                  <div className="tags mt-3">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="badge bg-secondary me-2">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="post-content">
                  {post.content.map((item, index) => {
                    if (item.type === "paragraph") {
                      return <p key={index} className="paragraph">{item.text}</p>;
                    }
                    if (item.type === "heading") {
                      return <h3 key={index} className="heading mt-4 mb-3">{item.text}</h3>;
                    }
                    if (item.type === "image") {
                      return (
                        <div key={index} className="image-wrapper my-4">
                          <img src={item.src} alt={item.alt} className="img-fluid rounded" />
                        </div>
                      );
                    }
                    if (item.type === "blockquote") {
                      return (
                        <blockquote key={index} className="blockquote my-4 p-3 border-start border-4 border-primary">
                          <p className="mb-0 fst-italic">{item.text}</p>
                        </blockquote>
                      );
                    }
                    if (item.type === "list") {
                      return (
                        <ul key={index} className="list-unstyled my-3">
                          {item.items.map((li, i) => (
                            <li key={i} className="mb-2"><i className="bi bi-check2-circle text-primary me-2"></i>{li}</li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  })}
                </div>

                <div className="post-footer mt-5 pt-4 border-top d-flex justify-content-between align-items-center">
                  <MagneticButton href="/portfolio">
                    View Portfolio Projects
                  </MagneticButton>
                  <MagneticButton href="/contact">
                    Get In Touch
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogSection />
    </section>
  );
};

export default BlogSingle;
