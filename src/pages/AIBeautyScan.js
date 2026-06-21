import React, { useState } from "react";
import axios from "axios";
import "../styles/AIBeautyScan.css";
function AIBeautyScan() {
const [aiAdvice, setAiAdvice] = useState("");
const [image, setImage] = useState(null);
const [preview, setPreview] = useState("");
const [loading, setLoading] = useState(false);
const [result, setResult] = useState("");

const handleImage = (e) => {

const file = e.target.files[0];

console.log("SELECTED FILE:", file);

setImage(file);

if (file) {

  setPreview(
    URL.createObjectURL(file)
  );

}

};

const handleAnalyze = async () => {

console.log("IMAGE STATE:", image);

if (!image) {

  alert("Please upload an image");
  return;

}

setLoading(true);

const formData = new FormData();

formData.append(
  "image",
  image
);

try {

  // Upload Image
  const uploadResponse =
    await axios.post(
      "http://localhost:5000/api/upload",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data"
        }
      }
    );

  console.log(
    "UPLOAD RESPONSE:",
    uploadResponse.data
  );

  // AI Recommendation
const uploadedFileName =
  image.name;

const aiResponse = await axios.post(
  "http://localhost:5000/api/test-ai",
  {
    fileName: uploadedFileName
  }
);

  console.log(
    "AI RESPONSE:",
    aiResponse.data
  );

  setResult(
    aiResponse.data.result
  );

} catch (error) {

  console.log(
    "ERROR:",
    error.response?.data ||
    error.message
  );

  alert(
    "Something went wrong ❌"
  );

}

setLoading(false);

};

return (

<div className="ai-page">

  <div className="ai-card">

    <h1>
      AI Beauty Scan
    </h1>

    <p>
      Upload your hair image and get AI hairstyle recommendations
    </p>

    <input
      type="file"
      accept="image/*"
      onChange={handleImage}
    />

    {preview && (

      <img
        src={preview}
        alt="Preview"
        className="preview-image"
      />

    )}

    <button
      onClick={handleAnalyze}
    >

      {
        loading
        ? "Analyzing..."
        : "Analyze Hair"
      }

    </button>

    {result && (

      <div
        style={{
          marginTop: "20px",
          background: "#1a1a1a",
          color: "white",
          padding: "15px",
          borderRadius: "10px",
          textAlign: "left"
        }}
      >

        <h3>
          AI Recommendation
        </h3>

        <pre
          style={{
            whiteSpace: "pre-wrap"
          }}
        >
          {result}
        </pre>



      {aiAdvice && (

  <div
    style={{
      marginTop: "20px",
      background: "#111827",
      padding: "20px",
      borderRadius: "15px",
      border: "1px solid rgba(212,175,55,.2)"
    }}
  >

    <h3
      style={{
        color: "#D4AF37"
      }}
    >
      ✨ AI Beauty Expert Advice
    </h3>

    <pre
      style={{
        whiteSpace: "pre-wrap",
        fontFamily: "inherit"
      }}
    >
      {aiAdvice}
    </pre>

  </div>

)}



      {result && (

  <div
    style={{
      marginTop: "15px"
    }}
  >

    <button className="ai-expert-btn"
      onClick={async () => {

        const response =
          await axios.post(
            "http://localhost:5000/api/beauty-chat",
            {
              question:
`For curly hair give answer in this exact format:

Hair Type:

Recommended Hairstyles:
• Style 1
• Style 2
• Style 3

Recommended Treatments:
• Treatment 1
• Treatment 2
• Treatment 3

Hair Care Tips:
• Tip 1
• Tip 2
• Tip 3

Maximum 100 words.
No tables.
No markdown.
No prices.
Simple bullet points only.`
            }
          );

      setAiAdvice(response.data.result);

      }}
      style={{
        background: "#D4AF37",
        color: "black",
        border: "none",
        padding: "12px 25px",
        borderRadius: "10px",
        fontWeight: "bold",
        cursor: "pointer"
      }}
    >
      Ask AI Expert 
    </button>

  </div>

)}

      </div>

    )}

  </div>

</div>

);

}

export default AIBeautyScan;
