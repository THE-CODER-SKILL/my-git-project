import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import picture from '../Assest/men-1.jpeg';


function App() {
  return (
    <div className="container">
      {/* Left Content Section */}
      <div className="text-section">
        <h1>I'm Manikandan</h1>
        <h2>I love coding</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed at nisl euismod urna bibendum.
        </p>

        <div className="buttons">
          <button className="portfolio">My Portfolio</button>
          <button className="contact">Contact Me</button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="image-section">
        <img src={picture}alt="Background"  />
        <span className="red-dot"></span>
      </div>
    </div>
  );
}

export default App;