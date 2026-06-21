import React from "react";
import "../styles/Testimonials.css";

function Testimonials() {

  return (

    <section className="trust-section">

      <div className="trust-overlay">

        <div className="trust-card">

          <span className="trust-subtitle">
            Why Choose GlowElite?
          </span>

          <h2>
            BUILDING TRUST, ONE STRAND AT A TIME
          </h2>

          <p>
            We believe your beauty deserves nothing but the best.
            Discover premium salons, expert stylists, AI-powered
            recommendations and luxury beauty experiences tailored
            specifically for you.
          </p>

          <div className="trust-features">

            <div>
              • Expert Stylists
            </div>

            <div>
              • Personalized Services
            </div>

            <div>
              • Premium Products
            </div>

            <div>
              • Client-Centric Approach
            </div>

          </div>

          <button className="trust-btn">
            Explore Services →
          </button>

        </div>

      </div>

    </section>

  );

}

export default Testimonials;