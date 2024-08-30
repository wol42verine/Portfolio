import React from 'react';
import { Route, Routes, Link, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Aboutme from './pages/Aboutme';

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
                  {section === 'Portfolio' ? (
                    <Portfolio />
                  ) : section === 'Contact' ? (
                    <Contact />
                  ) : section === 'Resume' ? (
                    <Resume />
                  ) : section === 'About Me' ? (
                    <Aboutme />
                  ) : (
                    <p>This is the content section where you can add information about {section.toLowerCase()}.</p>
                  )}
                </section>
              }
            />
          ))}
          <Route
            path="/"
            element={<Navigate to="/aboutme" />}
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