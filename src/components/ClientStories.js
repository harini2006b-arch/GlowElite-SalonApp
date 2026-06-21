import React, { useState, useEffect } from "react";
import "../styles/ClientStories.css";

const reviews = [

  {
    name: "Priya Senthil",
    role: "Customer",
    review:
      "I had a wonderful experience with my hairstylist. The recommendations were accurate and the service was exceptional."
  },

  {
    name: "Ananya Rao",
    role: "Customer",
    review:
      "GlowElite helped me discover premium salons. Booking was effortless and the experience was luxurious."
  },

  {
    name: "Sneha Kapoor",
    role: "Customer",
    review:
      "The AI Beauty Scan suggested exactly what suited my hair. I loved the personalized recommendations."
  }

];

function ClientStories() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent(
        (prev) =>
          (prev + 1) % reviews.length
      );

    }, 4000);

    return () =>
      clearInterval(interval);

  }, []);

  return (

    <section className="client-story-section">

      <div className="client-overlay">

        <div className="client-content">

          <span className="client-subtitle">
            What Our Clients Say
          </span>

          <h2>
            CLIENTS' SUCCESS STORIES
          </h2>

          <p>
            We pride ourselves on delivering
            exceptional beauty experiences and
            unforgettable transformations.
          </p>

          <div
            key={current}
            className="review-box"
          >

            <div className="stars">
              ★★★★★
            </div>

            <p className="review-text">
              {reviews[current].review}
            </p>

            <h4>
              {reviews[current].name}
            </h4>

            <span>
              {reviews[current].role}
            </span>

          </div>

        </div>

      </div>

    </section>

  );

}

export default ClientStories;