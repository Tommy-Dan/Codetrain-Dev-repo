import React from 'react';
import { Link } from "react-router-dom";




function Navbar() {
  return (
    <section className="navBar">
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light w-100 myNavBar">
          <Link className="navbar-brand" to="/">
            <img
              src="https://logos-world.net/wp-content/uploads/2021/06/Calendly-Logo.png"
              className="company-logo"
              alt="Calendly Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon myNavbarToggler"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav myNavLinks">
              <Link className="nav-link" to="/individuals">
                Individuals
              </Link>
              <Link className="nav-link" to="/teams">
                Teams
              </Link>
              <Link className="nav-link" to="/enterprise">
                Enterprise
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </section>
  )
}

export default Navbar;