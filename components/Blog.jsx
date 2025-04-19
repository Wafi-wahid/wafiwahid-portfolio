import React from "react";

const Blog = () => {
  return (
    <section id="blog" className="blog fade-in">
      <h3>Blog</h3>
      <div className="blog-post">
        <h4>Deep Dive into DevOps 🚀</h4>
        <p>
          Exploring pipelines, CI/CD, GitOps, and why every dev should embrace
          automation.
        </p>
      </div>
      <div className="blog-post">
        <h4>The T-Shape Advantage 🧠</h4>
        <p>
          Why being both a specialist and a generalist can make you unstoppable
          in tech.
        </p>
      </div>
    </section>
  );
};

export default Blog;
