import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../styles/Navbar.css";

function Navbar() {



const [isOpen, setIsOpen] = useState(false);

return (
<> <nav className="navbar navbar-expand-lg custom-navbar fixed-top">

    <div className="container">

      {/* Hamburger Menu */}
      <button
        className="menu-btn"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>

      {/* Logo */}
<Link
  className="navbar-brand logo"
  to="/"
>
  <div className="logo-container">

    <span className="logo-main">
      GlowElite
    </span>

    <span className="logo-sub">
      Luxury Beauty Intelligence
    </span>

  </div>
</Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarContent"
      >

        <ul className="navbar-nav align-items-center">

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/login"
            >
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/register"
            >
              Register
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/booking"
            >
              Booking
            </Link>
          </li>

        </ul>

<Link
  to="/booking"
  className="book-btn text-decoration-none"
>
  Book Now
</Link>
      </div>

    </div>

  </nav>

  {/* Sidebar */}
  <Sidebar
    isOpen={isOpen}
    setIsOpen={setIsOpen}
  />

</>

);
}

export default Navbar;
