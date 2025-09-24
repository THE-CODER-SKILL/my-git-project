import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css'

const Resume = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Manikandan</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#">About Me</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Projects</a></li>
              <li className="nav-item"><a className="nav-link active" href="#">Resume</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
            <a href="#contact" className="btn btn-outline-light rounded-pill">Click Me</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center text-white text-start">
        <div className="container">
          <p className="display-4 fw-semibold">Hello</p>
          <h1 className="display-5 fw-bold">I'm Manikandan</h1>
          <p className="lead mb-3">
            I photograph very instinctively. I see how it is taken like that.
            I do not follow certain styles, philosophies or teachers.
          </p>
          <a href="mailto:lovelymanil272@gmail.com" className="text-white text-decoration-underline">
            lovelymanil272@gmail.com
          </a>
          <br />
          <a href="/resume.pdf" className="btn btn-light mt-3" download>
            <i className="bi bi-download me-2"></i>Download Resume
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Skills</h2>
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <i className="bi bi-code-slash display-6 text-primary"></i>
              <h5 className="mt-2">Web Development</h5>
            </div>
            <div className="col-md-3 mb-4">
              <i className="bi bi-camera display-6 text-danger"></i>
              <h5 className="mt-2">Photography</h5>
            </div>
            <div className="col-md-3 mb-4">
              <i className="bi bi-brush display-6 text-success"></i>
              <h5 className="mt-2">Design</h5>
            </div>
            <div className="col-md-3 mb-4">
              <i className="bi bi-terminal display-6 text-warning"></i>
              <h5 className="mt-2">Programming</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p className="mb-0">© 2025 Manikandan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Resume;
