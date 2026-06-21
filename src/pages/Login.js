import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    // Demo Login
    localStorage.setItem(
      "user",
      "harini"
    );

    alert("Login Successful ✅");

    navigate("/");
  };

  return (

    <div className="login-page">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="login-video"
      >
        <source
          src="/videos/login-bg.mp4"
          type="video/mp4"
        />
      </video>

      <div className="login-overlay"></div>

      <div className="login-card">

        <div className="login-badge">
          ✨ Premium Beauty Experience
        </div>

        <h1 className="login-logo">
          GlowElite
        </h1>

        <p className="login-subtitle">
          Access Bangalore's Finest Beauty Destinations
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <div className="login-options">

            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <span className="forgot-link">
              Forgot Password?
            </span>

          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

          <button
            type="button"
            className="google-btn"
          >
            Continue with Google
          </button>

        </form>

        <p className="register-link">
          New User?
          <Link to="/register">
            Create Account
          </Link>
        </p>

      </div>

    </div>

  );
}

export default Login;