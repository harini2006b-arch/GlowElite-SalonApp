import React from "react";
import { Link } from "react-router-dom";
import "../styles/SalonCard.css";

function SalonCard({ salon }) {

  const addToFavourite = () => {

    const existing =
      JSON.parse(
        localStorage.getItem("favourites")
      ) || [];

    const alreadyExists =
      existing.find(
        (item) => item.id === salon.id
      );

    if (alreadyExists) {

      alert(
        "Already in Favourites ❤️"
      );

      return;
    }

    existing.push(salon);

    localStorage.setItem(
      "favourites",
      JSON.stringify(existing)
    );

    alert(
      "Added to Favourites ❤️"
    );
  };

  return (

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

          <span>
            ⭐ {salon.rating}
          </span>

        </div>

        <div className="salon-actions">

          <Link
            to={`/salon/${salon.id}`}
          >
            <button className="details-btn">
              View Details
            </button>
          </Link>

          <button
            className="fav-btn"
            onClick={addToFavourite}
          >
            ❤️ Favourite
          </button>

        </div>

      </div>

    </div>

  );
}

export default SalonCard;