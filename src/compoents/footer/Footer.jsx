import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className=" text-center text-lg-start bg-body-tertiary text-muted">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block social-media-container">
          <span>Find us on social media :</span>
          <span className="social-icon">
            <i className="bi bi-instagram instagram_icon"></i>
          </span>
          <span className="social-icon ">
            <i className="bi bi-facebook facebook_icon"></i>
          </span>
          <span className="social-icon">
            <i className="bi bi-whatsapp  whatsapp_icon"></i>
          </span>
          <span className="social-icon ">
            <i className="bi bi-linkedin linkedin_icon"></i>
          </span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <NavLink to="/" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </NavLink>
          <NavLink to="/" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </NavLink>
          <NavLink to="/" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </NavLink>
          <NavLink to="/" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </NavLink>
          <NavLink to="/" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </NavLink>
          <NavLink to="/" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </NavLink>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section className="">
        <div className=" text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>AgriMitra
              </h6>
              <p>
                Empowering farmers through affordable access to top-quality
                equipment, enabling sustainable and efficient agricultural
                practices.
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <NavLink to="#!" className="text-reset">
                  Tractors
                </NavLink>
              </p>
              <p>
                <NavLink to="#!" className="text-reset">
                  Cultivators
                </NavLink>
              </p>
              <p>
                <NavLink to="#!" className="text-reset">
                  Sprayers
                </NavLink>
              </p>
              <p>
                <NavLink to="#!" className="text-reset">
                  Drones
                </NavLink>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <NavLink to="#!" className="text-reset">
                  Reviews
                </NavLink>
              </p>
              <p>
                <NavLink to="#!" className="text-reset">
                  Offers
                </NavLink>
              </p>
              <p>
                <NavLink to="#!" className="text-reset">
                  Orders
                </NavLink>
              </p>
              <p>
                <NavLink to="#!" className="text-reset">
                  Help
                </NavLink>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Maharashtra, 411014, INDIA
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                agrimitra@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 91 9325104345
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 91 8975078786
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <NavLink className="text-reset fw-bold" to="https://mdbootstrap.com/">
          AgriMitra.com
        </NavLink>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
