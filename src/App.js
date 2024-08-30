import React from 'react';
import { Route, Routes, Link, useLocation, Navigate } from 'react-router-dom'; // Added Navigate import
import './App.css';
import projects from './assets/projects.js';
import Contact from './pages/Contact'; // Import the Contact component
import Resume from './pages/Resume'; // Import the Resume component

function App() {
  const location = useLocation();
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Joey Sandoval</h1>
        <nav>
          <ul className="nav-list">
            {sections.map((section) => (
              <li
                key={section}
                className={location.pathname === `/${section.replace(/\s+/g, '').toLowerCase()}` ? 'nav-item active' : 'nav-item'}
              >
                <Link to={`/${section.replace(/\s+/g, '').toLowerCase()}`}>{section}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="App-content">
        <Routes>
          {sections.map((section) => (
            <Route
              key={section}
              path={`/${section.replace(/\s+/g, '').toLowerCase()}`}
              element={
                <section>
                  <h2>{section}</h2>
                  {section === 'Portfolio' ? ( // Added condition to render portfolio items
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
                  ) : section === 'Contact' ? (
                    <Contact />
                  ) : section === 'Resume' ? (
                    <Resume /> // Render the Resume component
                  ) : (
                    <p>This is the content section where you can add information about {section.toLowerCase()}.</p>
                  )}
                </section>
              }
            />
          ))}
          <Route
            path="/aboutme"
            element={
              <section>
                <h2>About Me</h2>
                {/* Add pic, update bio */}
                <img src="/avatar.jpg" alt="pic" className="avatar" />
                <p>Hello! I'm Joey Sandoval, a passionate web developer with a generic bio.</p>
              </section>
            }
          />
          <Route
            path="/"
            element={<Navigate to="/aboutme" />} // Added default route to redirect to About Me
          />
        </Routes>
        </main>
      <footer className="App-footer">
        <p>&copy; 2024 Joey Sandoval. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/wol42verine" target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
          <a href="https://www.linkedin.com/in/joey-sandoval-86017693/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        </footer>
        </div>
  );
}

export default App;