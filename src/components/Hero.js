import "../styles/Hero.css";
import React, { useState, useEffect} from "react";
function Hero() {

const images = [

"https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",

"https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80",

"https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"

];

const [currentImage, setCurrentImage] =
useState(0);

useEffect(() => {

const interval = setInterval(() => {

setCurrentImage(
(prev) =>
(prev + 1) % images.length
);

}, 4000);

return () =>
clearInterval(interval);

}, []);


  return (
    <section className="hero">

      <div className="container">

        <div className="row align-items-center min-vh-100">

          <div className="col-lg-5 position-relative">

            <div className="luxury-bubbles">
              <span className="bubble bubble1"></span>
              <span className="bubble bubble2"></span>
              <span className="bubble bubble3"></span>
            </div>

            <span className="hero-tag">
              Bangalore Luxury Salon Marketplace
            </span>

            <h1 className="hero-title">
              Experience Bangalore's Finest
              <span> Luxury Beauty Destinations</span>
            </h1>

            <p className="hero-description">
              Discover premium salons, personalized beauty experiences,
              AI-powered recommendations, and luxury grooming services
              tailored just for you.
            </p>

            <div className="hero-buttons">

  <button className="explore-btn">
    Explore Salons
  </button>

  <button className="scan-btn">
    AI Beauty Scan
  </button>

  <button
    className="location-btn"
    onClick={() =>
      window.open(
        "https://www.google.com/maps/search/premium+salons+in+bangalore",
        "_blank"
      )
    }
  >
    Discover Locations
  </button>

</div>

            <div className="hero-stats">

              <div>
                <h3>250+</h3>
                <span>Salons</span>
              </div>

              <div>
                <h3>15K+</h3>
                <span>Customers</span>
              </div>

              <div>
                <h3>4.9★</h3>
                <span>Rating</span>
              </div>

            </div>

            <div className="hero-badge">
              ⭐ 250+ Verified Luxury Salons
            </div>

          </div>

          {/* Right Video */}
          <div className="col-lg-7">

            <div className="video-card">

              <div className="hero-slider">

  <img
  key={currentImage}
  src={images[currentImage]}
  alt="Salon"
  className="hero-image"
/>

  <div className="floating-card">
    ⭐ 4.9 Rated
    <br />
    Bangalore's Top Salon
  </div>

</div>

              

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;