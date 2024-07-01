import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <ScrollLink className="navbar-brand" to="home" spy={true} smooth={true} duration={500} offset={-70}>
          Real Estate SPA
        </ScrollLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <ScrollLink className="nav-link" to="about" spy={true} smooth={true} duration={500} offset={-70}>
                About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="contact" spy={true} smooth={true} duration={500} offset={-70}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
