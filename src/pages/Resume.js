import React from 'react';
import './Resume.css';

function Resume() {
  const proficiencies = [
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'SQL',
    'HTML',
    'CSS',
    'Git',
    'REST APIs'
  ];

  return (
    <div className="resume">
      <h2>Resume</h2>
      <a href="/path/to/your/resume.pdf" download className="resume-link">
        Download Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;