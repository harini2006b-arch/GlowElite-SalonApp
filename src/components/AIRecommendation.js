import React, { useState } from "react";
import "../styles/AIRecommendation.css";

function AIRecommendation() {

  const [concern, setConcern] = useState("");
  const [result, setResult] = useState("");

  const getRecommendation = () => {

    switch (concern) {

      case "Dry Hair":
        setResult("Recommended: Keratin Hair Spa + Hair Nourishing Treatment");
        break;

      case "Hair Fall":
        setResult("Recommended: Hair Strengthening Therapy");
        break;

      case "Acne":
        setResult("Recommended: Hydra Facial + Acne Control Treatment");
        break;

      case "Pigmentation":
        setResult("Recommended: Brightening Facial");
        break;

      case "Wedding":
        setResult("Recommended: Premium Bridal Package");
        break;

      default:
        setResult("Please select a concern.");
    }
  };

  return (
    <section className="ai-section">

      <div className="container">

        <h2>AI Beauty Recommendation</h2>

        <select
          value={concern}
          onChange={(e) => setConcern(e.target.value)}
        >
          <option>Select Concern</option>
          <option>Dry Hair</option>
          <option>Hair Fall</option>
          <option>Acne</option>
          <option>Pigmentation</option>
          <option>Wedding</option>
        </select>

        <button onClick={getRecommendation}>
          Get Recommendation
        </button>

        {result && (
          <div className="result-box">
            {result}
          </div>
        )}

      </div>

    </section>
  );
}

export default AIRecommendation;