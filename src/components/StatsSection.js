import React from "react";
import "../styles/StatsSection.css";

function StatsSection() {

  const stats = [
    {
      icon: "👑",
      value: "250+",
      label: "Premium Salons"
    },
    {
      icon: "❤️",
      value: "10K+",
      label: "Happy Clients"
    },
    {
      icon: "⭐",
      value: "4.9",
      label: "Average Rating"
    },
    {
      icon: "🤖",
      value: "24/7",
      label: "AI Support"
    }
  ];

  return (

    <section className="stats-section">

      <div className="container">

        <div className="row">

          {stats.map((item, index) => (

            <div
              className="col-lg-3 col-md-6 mb-4"
              key={index}
            >

              <div className="stat-card">

                <div className="stat-icon">
                  {item.icon}
                </div>

                <h2>
                  {item.value}
                </h2>

                <p>
                  {item.label}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default StatsSection;