import React from 'react';
import projects from '../assets/projects';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      {/* <h2>Portfolio</h2> */}
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.title} className="portfolio-item">
            <img src={project.imageUrl} alt={project.title} className="portfolio-image" />
            <h3>{project.title}</h3>
            <p>
              <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Deployed App</a> |{' '}
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;