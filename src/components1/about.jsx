

         import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutMe() {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark sticky-top shadow-sm py-3">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">Manikandan |</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCentered">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarCentered">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-person me-1"></i>Name</a></li>
                            <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-folder me-1"></i>Email</a></li>
                            <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-file-earmark-text me-1"></i>Address</a></li>
                            <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-envelope me-1"></i>Mobile Number</a></li>
                        </ul>
                        <div className="ms-auto">
                            <a href="#contact" className="btn btn-outline-light rounded-pill">Let's Work Together</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* About Me Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Text Content */}
                        <div className="col-md-6 text-center text-md-start" id="class">
                            <h5 className="text-primary">I'M</h5>
                            <h2 className="text-primary fw-bold">Manikandan</h2>
                            <p className="text-secondary"><hr />Software and Web Developer</p>
                            <p>
                                I am a passionate developer who loves building web applications using modern technologies.
                                I enjoy solving real-world problems and turning ideas into web applications.
                            </p>
                            <a href="#contact" className="btn btn-primary mt-4">Contact Me</a>
                        </div>

                        {/* Profile Image */}
                        <div className="col-md-6 text-center mt-4 mt-md-0">
                            <img src="boy-boy.jpg" alt="Profile" className="img-fluid rounded" width="400" />
                        </div>

                        {/* About Us */}
                        <div className="mt-5">
                            <a href="about" className="btn btn"><h2>About Us</h2></a>
                            <p>
                                <h6>
                                    I'm a passionate web developer specializing in creating responsive and user-friendly websites.
                                    I love turning ideas into reality and solving real-world problems through technology.
                                    I also enjoy creating fun and educational games that cover subjects like math, science, language arts, and geography.
                                </h6>
                            </p>
                        </div>

                        {/* My Skills */}
                        <div className="mt-3 text-center">
                            <a href="about" className="btn btn"><h2>My Skills</h2></a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;