import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:lovelymanil272@gmail.com';
  };

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // public folder la irukkanum
    link.download = 'Manikandan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav>
        <Link to="/">Manikandan</Link>
        <Link to="/home">Home</Link>
      </nav>

      <section>
        <h1>I'm Manikandan</h1>
        <button onClick={handleEmailClick}>Email Me</button>
        <button onClick={handleDownloadClick}>Download Resume</button>
      </section>
    </>
  );
};

export default Resume;
