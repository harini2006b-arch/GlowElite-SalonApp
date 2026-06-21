import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Booking.css";

function Booking() {

  const selectedOffer = JSON.parse(
    localStorage.getItem("selectedOffer")
  );

  const navigate = useNavigate();

  const [booking, setBooking] = useState({

    salon: "Glow Elite Studio",

    service:
      selectedOffer?.service || "",

    date: "",
    time: ""

  });

  const handleChange = (e) => {

    setBooking({

      ...booking,

      [e.target.name]:
      e.target.value

    });

  };

  const handleBooking = () => {

    if (

      !booking.salon ||

      !booking.service ||

      !booking.date ||

      !booking.time

    ) {

      alert(
        "Please fill all fields"
      );

      return;
    }

    const existingBookings =

      JSON.parse(

        localStorage.getItem(
          "bookings"
        )

      ) || [];

    existingBookings.push({

      ...booking,

      actualPrice:
        selectedOffer?.actualPrice || null,

      offerPrice:
        selectedOffer?.offerPrice || null,

      status: "Confirmed"

    });

    localStorage.setItem(

      "bookings",

      JSON.stringify(
        existingBookings
      )

    );

    alert(
      "Appointment Booked Successfully!"
    );

    localStorage.removeItem(
      "selectedOffer"
    );

    navigate(
      "/appointments"
    );
  };

  return (

    <div className="booking-page">

      <div className="container">

        <div className="booking-card">

          <h1>
            Book Appointment
          </h1>

          <select
            name="salon"
            value={booking.salon}
            onChange={handleChange}
          >

            <option>
              Glow Elite Studio
            </option>

            <option>
              Aura Luxury Salon
            </option>

            <option>
              Velvet Beauty Lounge
            </option>

          </select>

          <select
            name="service"
            value={booking.service}
            onChange={handleChange}
          >

            <option value="">
              Select Service
            </option>

            <option>
              Hair Cut
            </option>

            <option>
              Hair Spa
            </option>

            <option>
              Facial
            </option>

            <option>
              Manicure
            </option>

            <option>
              Bridal Makeup
            </option>

          </select>

          {selectedOffer && (

            <div className="offer-info">

              <h3>
                🎉 Offer Applied
              </h3>

              <p>

                Actual Price:

                ₹
                {
                  selectedOffer.actualPrice
                }

              </p>

              <p>

                Offer Price:

                ₹
                {
                  selectedOffer.offerPrice
                }

              </p>

              <p>

                You Save:

                ₹
                {
                  selectedOffer.actualPrice -
                  selectedOffer.offerPrice
                }

              </p>

            </div>

          )}

          <input
            type="date"
            name="date"
            value={booking.date}
            onChange={handleChange}
          />

          <select
            name="time"
            value={booking.time}
            onChange={handleChange}
          >

            <option value="">
              Select Time
            </option>

            <option>
              10:00 AM
            </option>

            <option>
              12:00 PM
            </option>

            <option>
              02:00 PM
            </option>

            <option>
              04:00 PM
            </option>

            <option>
              06:00 PM
            </option>

          </select>

          <button
            onClick={handleBooking}
          >
            Confirm Booking
          </button>

        </div>

      </div>

    </div>

  );
}

export default Booking;