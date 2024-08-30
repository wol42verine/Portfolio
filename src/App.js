import React from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';

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
                  <p>This is the content section where you can add information about {section.toLowerCase()}.</p>
                </section>
              }
            />
          ))}
          <Route
            path="/"
            element={
              <section>
                <h2>About Me</h2>
                <p>This is the content section where you can add information about yourself.</p>
              </section>
            }
          />
        </Routes>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Joey Sandoval. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;