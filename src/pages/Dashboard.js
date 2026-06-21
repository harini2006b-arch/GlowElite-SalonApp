import React from "react";
import data from "../data/premium_salon_dataset.json";
import "../styles/Dashboard.css";

function Dashboard() {

  const totalServices = data.services.length;
  const totalStaff = data.staff.length;
  const totalCustomers = data.customers.length;
  const totalAppointments = data.appointments.length;

  return (
    <div className="dashboard-page">

      <div className="container">

        <h1 className="dashboard-title">
          Bangalore Salon Analytics
        </h1>

        {/* Stats Cards */}
        <div className="stats-grid">

          <div className="stat-card">
            <h2>{totalServices}</h2>
            <p>Services</p>
          </div>

          <div className="stat-card">
            <h2>{totalStaff}</h2>
            <p>Staff Members</p>
          </div>

          <div className="stat-card">
            <h2>{totalCustomers}</h2>
            <p>Customers</p>
          </div>

          <div className="stat-card">
            <h2>{totalAppointments}</h2>
            <p>Appointments</p>
          </div>

        </div>

        {/* Top Services */}

        <div className="analytics-section">

          <h2>Top Services</h2>

          <div className="service-list">

            {data.services.slice(0, 20).map((service) => (

              <div
                className="service-item"
                // key={service.id}
              >
                <span>{service.name}</span>

                <span>
                  ₹{service.price}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Our Experts */}

        <div className="analytics-section">

          <h2>Our Experts</h2>

          <div className="staff-grid">

            {data.staff.slice(0, 12).map((staff) => (

              <div
                className="staff-card"
                key={staff.id}
              >
                <h4>{staff.name}</h4>

                <p>{staff.specialization}</p>
              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;