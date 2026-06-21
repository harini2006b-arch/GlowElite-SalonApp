import React from "react";
import "../styles/Footer.css";
import {
  FaEnvelope,
  FaLocationDot,
  FaPhone
} from "react-icons/fa6";
function Footer() {

  return (

    <footer className="footer">

      <div className="container">

        <div className="row g-5">


          <div className="col-lg-4 col-md-6">

            <h2 className="footer-logo">
              GlowElite
            </h2>

            <p className="footer-description">
              Bangalore's premier AI-powered luxury salon marketplace.
              Discover elite salons, premium beauty services,
              and personalized recommendations.
            </p>

            <div className="footer-social">

  <a href="https://instagram.com" target="_blank" rel="noreferrer">
  Instagram
</a>

<a href="https://facebook.com" target="_blank" rel="noreferrer">
  Facebook
</a>

<a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
  WhatsApp
</a>

<a href="https://x.com" target="_blank" rel="noreferrer">
  X
</a>
</div>
          </div>

          <div className="col-lg-2 col-md-6">

            <h5>
              Explore
            </h5>

            <ul>

              <li>Home</li>

              <li>Salons</li>

              <li>Booking</li>

              <li>Offers</li>

            </ul>

          </div>

          <div className="col-lg-3 col-md-6">

            <h5>
              Services
            </h5>

            <ul>

              <li>Hair Styling</li>

              <li>Skin Care</li>

              <li>Bridal Makeup</li>

              <li>Nail Studio</li>

            </ul>

          </div>

          <div className="col-lg-3 col-md-6">

  <h5>
    Contact
  </h5>

  <ul className="contact-list">

    <li>
      <FaEnvelope className="contact-icon" />
      support@glowelite.com
    </li>

    <li>
      <FaLocationDot className="contact-icon" />
      Bangalore, India
    </li>

    <li>
      <FaPhone className="contact-icon" />
      +91 98765 43210
    </li>

  </ul>

</div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">

          <p>
            © 2026 GlowElite. All Rights Reserved.
          </p>

          <div className="footer-links">

            <span>
              Privacy Policy
            </span>

            <span>
              Terms
            </span>

            <span>
              Support
            </span>

          </div>

        </div>

      </div>

    </footer>

  );

}
export default Footer;