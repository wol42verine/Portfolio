import React from 'react';
import './Aboutme.css';

function Aboutme() {
  return (
    <div className="aboutme">
      {/* <h2>About Me</h2> */}
      <img src="/avatar.jpg" alt="pic" className="avatar" />
      <p>Hello! I'm Joey Sandoval, a passionate web developer with a generic bio.</p>
    </div>
  );
}

export default Aboutme;