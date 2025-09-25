import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



const Portfolio = () => {
  return (
    <div className="bg-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark sticky-top shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Manikandan</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCentered">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarCentered">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-person me-1"></i>About Me</a></li>
              <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-folder me-1"></i>Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-file-earmark-text me-1"></i>Resume</a></li>
              <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-envelope me-1"></i>Contact</a></li>
            </ul>
            <div className="ms-auto">
              <a href="#contact" className="btn btn-outline-light rounded-pill">Let's Work Together</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="container-fluid p-0">
        <img src="/images/draw-1.webp" alt="Banner" width="100%" height="470" />
      </div>

      {/* About Section */}
      <main className="container py-5">
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <img src="/images/manikandan-1.jpg" className="img-fluid rounded-circle" width="200" alt="My Photo" />
          </div>
          <div className="col-md-9 text-start">
            <h2 className="text-primary">Hi, I'm <strong>Manikandan K</strong></h2>
            <p className="lead">
              I'm a passionate web developer specializing in creating responsive and user-friendly websites. I build clean, efficient, and modern web solutions using the latest technologies.
            </p>
          </div>
        </div>

        {/* Skills & Experience */}
        <div className="row text-center mt-5">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-header bg-success text-white fw-bold">Skills</div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>HTML</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Bootstrap</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>React JS</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Advanced Java</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <div className="card shadow-sm">
              <div className="card-header bg-warning text-dark fw-bold">Experience</div>
              <div className="card-body">
                <p className="mb-0">Fresher - Actively learning and building real-time projects.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="row mt-5">
          <h3 className="text-center mb-4 text-secondary">My Tools / Projects</h3>
          <div className="col-md-4 mb-3">
            <img src="/images/mani2.jpg" className="img-fluid rounded shadow" alt="HTML Project" />
          </div>
          <div className="col-md-4 mb-3">
            <img src="/images/draw-3.jpg" className="img-fluid rounded shadow" alt="CSS Project" />
          </div>
          <div className="col-md-4 mb-3">
            <img src="/images/save-1.jpg" className="img-fluid rounded shadow" alt="Bootstrap Project" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-light py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <h4>About Me</h4>
              <p>
                I'm K. Manikandan, a passionate web developer who builds responsive, efficient, and modern websites using the latest web technologies.
              </p>
            </div>
            <div className="col-md-6">
              <h4>Contact</h4>
              <p><i className="bi bi-telephone-fill me-2"></i>+91-8526321015</p>
              <p><i className="bi bi-envelope-fill me-2"></i>lovelymanil272@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
