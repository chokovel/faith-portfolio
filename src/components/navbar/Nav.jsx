import React from 'react'
import './nav.css'
// import FaithLogo from "../../assets/Faith-Alugbue-Logo.png";
import FaithLogo from "../../assets/faithlogoN.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import x from "../../assets/x.webp";
import linkedin from "../../assets/linkedin.webp";
import git from "../../assets/git.png";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-style bg-transparent transparent-navbar fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={FaithLogo} alt="Faith-Alugbue-logo" width={150} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Fun Links
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      News
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Store
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex">
              <a
                href="https://github.com/chokovel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="social-spacing"
                  src={git}
                  alt="github-account"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/faithalugbue/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-spacing" src={linkedin} alt="linkedin" />
              </a>
              <a
                href="https://facebook.com/alugbuefaith"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-spacing" src={facebook} alt="facebook" />
              </a>
              <a
                href="http://twitter.com/FaithAlugbue"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-spacing" src={x} alt="twitter" />
              </a>
              <a
                href="http://instagram.com/faithalugbue"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="social-spacing"
                  src={instagram}
                  alt="instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav
