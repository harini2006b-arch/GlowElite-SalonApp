import React from "react";
import "../styles/CategorySection.css";

const categories = [
  {
    title: "Hair",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
  },
  {
    title: "Skin",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15"
  },
  {
    title: "Nails",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371"
  },
  {
    title: "Bridal",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  },
  {
    title: "Men Grooming",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c"
  },
  {
    title: "Spa & Wellness",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
  }
];

function CategorySection() {
  return (
    <section className="category-section">

      <div className="container">

        <h2 className="section-title">
          Luxury Beauty Categories
        </h2>

        <p className="section-subtitle">
          Discover premium beauty experiences tailored to your needs.
        </p>

        <div className="row g-4">

          {categories.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="category-card"
                style={{
                  backgroundImage: `url(${item.image})`
                }}
              >
                <div className="category-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default CategorySection;