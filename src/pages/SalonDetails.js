import React from "react";
import "../styles/SalonDetails.css";

function SalonDetails() {

  const salon = {
    id: 1,
    name: "Glow Elite Studio",
    location: "Indiranagar, Bangalore",
    rating: 4.9,
    score: 96,
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035"
  };

  const handleWishlist = () => {

    const existingWishlist =
      JSON.parse(
        localStorage.getItem("wishlist")
      ) || [];

    const alreadyExists =
      existingWishlist.find(
        item => item.id === salon.id
      );

    if (alreadyExists) {

      alert(
        "Already Added To Wishlist ❤️"
      );

      return;
    }

    existingWishlist.push(salon);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(existingWishlist)
    );

    alert(
      "Added To Wishlist ❤️"
    );
  };

  return (
    <div className="salon-details">

      <div className="container">

        <img
          className="salon-banner"
          src={salon.image}
          alt="Salon"
        />

        <div className="details-content">

          <span className="salon-tag">
            Bangalore Luxury Partner
          </span>

          <h1>{salon.name}</h1>

          <p className="location">
            {salon.location}
          </p>

          <div className="rating-row">

            <span>
              ⭐ {salon.rating} (2,540 Reviews)
            </span>

            <span className="luxury-badge">
              Luxury Score {salon.score}
            </span>

          </div>

          <p className="description">
            Experience world-class beauty treatments
            with premium stylists, luxury interiors,
            personalized consultations, and
            AI-powered recommendations.
          </p>

          <div className="salon-stats">

            <div className="stat-card">
              <h4>50+</h4>
              <p>Experts</p>
            </div>

            <div className="stat-card">
              <h4>20K+</h4>
              <p>Customers</p>
            </div>

            <div className="stat-card">
              <h4>12</h4>
              <p>Years Experience</p>
            </div>

          </div>

          <div className="action-buttons">

            <button
              className="wishlist-btn"
              onClick={handleWishlist}
            >
              ❤️ Add To Wishlist
            </button>

          </div>

          <h3 className="services-title">
            Popular Services
          </h3>

          <div className="services-grid">

            <div className="service-card">
              Hair Spa - ₹1,999
            </div>

            <div className="service-card">
              Hair Cut - ₹799
            </div>

            <div className="service-card">
              Facial - ₹1,499
            </div>

            <div className="service-card">
              Manicure - ₹999
            </div>

            <div className="service-card">
              Pedicure - ₹1,199
            </div>

            <div className="service-card">
              Bridal Makeup - ₹9,999
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SalonDetails;