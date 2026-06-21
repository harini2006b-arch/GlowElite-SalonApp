import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import offers from "../data/offers.json";
import "../styles/Offers.css";

function Offers() {

  const [date, setDate] = useState(new Date());
  const [gender, setGender] = useState("women");

  const selectedDate =
    date.toISOString().split("T")[0];

  const filteredOffers =
    offers.offers.filter(
      (offer) =>
        offer.date === selectedDate &&
offer.gender.toLowerCase() ===
gender.toLowerCase()    );

  const claimOffer = (offer) => {

    localStorage.setItem(
      "selectedOffer",
      JSON.stringify(offer)
    );

    alert(
      `${offer.service} offer applied successfully`
    );

    window.location.href = "/booking";
  };

  return (

    <div className="offers-page">

      <div className="container">

        <h1 className="offers-title">
          Luxury Beauty Offers
        </h1>

        <p className="offers-subtitle">
          Choose a date and unlock exclusive offers
        </p>

        <div className="gender-toggle">

          <button
            className={
              gender === "women"
                ? "active"
                : ""
            }
            onClick={() =>
              setGender("women")
            }
          >
            Women
          </button>

          <button
            className={
              gender === "men"
                ? "active"
                : ""
            }
            onClick={() =>
              setGender("men")
            }
          >
            Men
          </button>

        </div>

        <div className="calendar-wrapper">

          <Calendar
            onChange={setDate}
            value={date}
          />

        </div>

        <div className="offers-grid">

          {filteredOffers.length > 0 ? (

            filteredOffers.map(
              (offer, index) => {

                const savings =
                  offer.actualPrice -
                  offer.offerPrice;

                const discountPercentage =
                  Math.round(
                    (savings /
                      offer.actualPrice) *
                    100
                  );

                return (

                  <div
                    className="offer-card"
                    key={index}
                  >

                    <span className="offer-badge">
                      Special Deal
                    </span>

                    <h3>
                      {offer.service}
                    </h3>

                    <p className="offer-date">
                      📅 {offer.date}
                    </p>

                    <p className="actual-price">
                      ₹{offer.actualPrice}
                    </p>

                    <p className="offer-price">
                      ₹{offer.offerPrice}
                    </p>

                    <h4>
                      Save ₹{savings}
                    </h4>

                    <span className="discount-percent">
                      {discountPercentage}% OFF
                    </span>

                    <button
                      className="claim-btn"
                      onClick={() =>
                        claimOffer(
                          offer
                        )
                      }
                    >
                      Claim Offer
                    </button>

                  </div>

                );
              }

            )

          ) : (

            <div className="no-offers">

              <h2>
                No Offers Available 😔
              </h2>

              <p>
                No offers found for
                selected date and
                category.
              </p>

              <p>
                Try another date.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>

  );
}

export default Offers;