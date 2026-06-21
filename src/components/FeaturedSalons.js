import React from "react";
import "../styles/FeaturedSalons.css";

const salons = [
  {
    id: 1,
    name: "Luxe Hair Studio",
    location: "Indiranagar",
    rating: 4.9,
    score: 96,
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
  },
  {
    id: 2,
    name: "Aura Beauty Lounge",
    location: "Koramangala",
    rating: 4.8,
    score: 94,
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035"
  },
  {
    id: 3,
    name: "Glow Premium Salon",
    location: "Whitefield",
    rating: 4.9,
    score: 97,
    image:
      "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6"
  }
];

function FeaturedSalons() {
  return (
    <section className="featured-section">

      <div className="container">

        <h2 className="section-title">
          Featured Luxury Salons
        </h2>

        <p className="section-subtitle">
          Handpicked premium salons loved by Bangalore customers.
        </p>

        <div className="row g-4">

          {salons.map((salon) => (
            <div className="col-lg-4" key={salon.id}>

              <div className="salon-card">

                <img
                  src={salon.image}
                  alt={salon.name}
                />

                <div className="salon-content">

                  <span className="luxury-score">
                    Luxury Score {salon.score}
                  </span>

                  <h4>{salon.name}</h4>

                  <p>{salon.location}</p>

                  <div className="salon-bottom">

                    <span>⭐ {salon.rating}</span>

                    <button>
                      View
                    </button>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedSalons;