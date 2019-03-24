import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a
          className="navbar-brand"
          href="https://www.jodacare.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="images/logo.png"
            width="120"
            height="40"
            alt="Logo could not be loaded"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navbar-right">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.jodacare.com/#about"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.jodacare.com/#features"
                target="_blank"
                rel="noopener noreferrer"
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.jodacare.com/#contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.jodacare.com/market-study.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Market Study
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.jodacare.com/blog.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
