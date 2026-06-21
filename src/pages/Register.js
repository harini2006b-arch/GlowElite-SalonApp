import React from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  return (
    <div className="register-page">

      <div className="register-card">

        <h1 className="register-logo">
          GlowElite
        </h1>

        <p className="register-subtitle">
          Create Your Luxury Account
        </p>

        <div className="premium-badge">
          ✨ Join 25,000+ Beauty Enthusiasts
        </div>

        <form>

          <input
            type="text"
            placeholder="👤 Full Name"
          />

          <input
            type="email"
            placeholder="📧 Email Address"
          />

          <input
            type="tel"
            placeholder="📱 Mobile Number"
          />

          <input
            type="password"
            placeholder="🔒 Password"
          />

          <input
            type="password"
            placeholder="🔐 Confirm Password"
          />

          <button
            type="submit"
            className="register-btn"
          >
            Create Account
          </button>

        </form>

        <div className="divider">
          OR CONTINUE WITH
        </div>

        <div className="social-buttons">

          <button className="social-btn">
            Google
          </button>

          <button className="social-btn">
            Facebook
          </button>

        </div>

        <p className="login-link">
          Already have an account?
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;