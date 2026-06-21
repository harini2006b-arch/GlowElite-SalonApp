import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar({ isOpen, setIsOpen }) {

  const location = useLocation();

  const isLoggedIn =
    localStorage.getItem("user");

  return (

    <div
      className={
        isOpen
          ? "sidebar active"
          : "sidebar"
      }
    >

      <button
        className="close-btn"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>

      <div className="sidebar-header">

        <h2>
          GlowElite
        </h2>

        <p>
          Beauty Intelligence
        </p>

      </div>

      <div className="sidebar-section">

        <h6>
          MAIN MENU
        </h6>

        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "sidebar-link active"
              : "sidebar-link"
          }
          onClick={() => setIsOpen(false)}
        >
           Home
        </Link>

        <Link
          to="/salons"
          className={
            location.pathname === "/salons"
              ? "sidebar-link active"
              : "sidebar-link"
          }
          onClick={() => setIsOpen(false)}
        >
           Explore Salons
        </Link>

        {isLoggedIn && (

          <Link
            to="/ai-beauty-scan"
            className={
              location.pathname === "/ai-beauty-scan"
                ? "sidebar-link active"
                : "sidebar-link"
            }
            onClick={() => setIsOpen(false)}
          >
             AI Beauty Scan
          </Link>

        )}

      </div>

      {isLoggedIn && (

        <div className="sidebar-section">

          <h6>
            MANAGEMENT
          </h6>

          <Link
            to="/dashboard"
            className={
              location.pathname === "/dashboard"
                ? "sidebar-link active"
                : "sidebar-link"
            }
            onClick={() => setIsOpen(false)}
          >
             Dashboard
          </Link>

          <Link
            to="/offers"
            className={
              location.pathname === "/offers"
                ? "sidebar-link active"
                : "sidebar-link"
            }
            onClick={() => setIsOpen(false)}
          >
             Offers
          </Link>

          <Link
            to="/appointments"
            className={
              location.pathname === "/appointments"
                ? "sidebar-link active"
                : "sidebar-link"
            }
            onClick={() => setIsOpen(false)}
          >
            Appointments
          </Link>

          <Link
            to="/favourites"
            className={
              location.pathname === "/favourites"
                ? "sidebar-link active"
                : "sidebar-link"
            }
            onClick={() => setIsOpen(false)}
          >
            Favourites
          </Link>

        </div>

      )}

      <div className="sidebar-footer">

        <div className="premium-card">

          <h5>
            Premium Beauty AI
          </h5>

          <p>
            Get personalized hairstyle
            & treatment suggestions.
          </p>

        </div>

      </div>

    </div>

  );

}

export default Sidebar;