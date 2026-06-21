import React from "react";
import "../styles/MyAppointments.css";

function MyAppointments() {

  const bookings =
    JSON.parse(
      localStorage.getItem("bookings")
    ) || [];

  return (
    <div className="appointments-page">

      <div className="container">

        <h1 className="appointments-title">
          My Appointments
        </h1>

        {bookings.length === 0 ? (

          <div className="empty-state">

            <h3>
              No Appointments Found
            </h3>

            <p>
              Book your first luxury salon experience.
            </p>

          </div>

        ) : (

          <div className="appointments-grid">

            {bookings.map((booking, index) => (

              <div
                className="appointment-card"
                key={index}
              >

                <img
                  className="card-image"
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500"
                  alt="Luxury Salon"
                />

                <span className="status-badge">
                  {booking.status}
                </span>

                <h3>
                  {booking.salon}
                </h3>

                <p>
                  <strong>Service:</strong>
                  {" "}
                  {booking.service}
                </p>

                <p>
                  <strong>Date:</strong>
                  {" "}
                  {booking.date}
                </p>

                <p>
                  <strong>Time:</strong>
                  {" "}
                  {booking.time}
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default MyAppointments;