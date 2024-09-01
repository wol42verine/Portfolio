import React from 'react';
import './Aboutme.css';

function Aboutme() {
  return (
    <div className="aboutme">
      {/* <h2>About Me</h2> */}
      {/* Add pic */}
      <img src="/images/logo192.png" alt="pic" className="avatar" />
      <p>Hello, my name is Joey Sandoval, and I am a passionate programmer and aspiring computer engineer.</p>
      <br />
      <p>I graduated from Sonoma State University with a Master of Arts and recently completed the Programming Boot Camp at Oregon State University.</p>
      <br />
      <p>My training spans a wide variety of topics in programming and computer science, with a strong personal interest in AI programming.</p>
    </div>
  );
}

export default Aboutme;