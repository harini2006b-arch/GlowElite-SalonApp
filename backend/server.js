const axios = require("axios");
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

console.log("✅ Server File Loaded");

const app = express();

app.use(cors());
app.use(express.json());


const uploadDir = path.resolve(__dirname, "uploads");

if (!fs.existsSync(uploadDir)) {
fs.mkdirSync(uploadDir, {
recursive: true
});
}
console.log("📁 Upload Folder:", uploadDir);

const storage = multer.diskStorage({

destination: (req, file, cb) => {

console.log("📁 Saving To:", uploadDir);

cb(null, uploadDir);

},

filename: (req, file, cb) => {

cb(
  null,
  Date.now() + "-" + file.originalname
);

}

});

const upload = multer({
storage: storage
});



app.get("/", (req, res) => {

res.send("HARINI AI SERVER ");

});



app.get("/test", (req, res) => {

res.json({
success: true,
message: "Route Working"
});

});


app.post(
"/api/upload",
upload.single("image"),
(req, res) => {

console.log(
  "FILE RECEIVED:",
  req.file
);

if (!req.file) {

  return res.status(400).json({
    success: false,
    message: "No image uploaded"
  });

}

return res.json({
  success: true,
  message: "Image Uploaded Successfully",
  file: req.file
});

}
);



app.post("/api/test-ai", (req, res) => {

const fileName = req.body.fileName || "";

console.log("AI REQUEST FILE:", fileName);

if (fileName.toLowerCase().includes("hair1")) {

return res.json({
  success: true,
  result: `Hair Type: Gents curl hair

Hairstyles:
• Curly short
• straight trim
• Short Bob

Treatments:

• Scalp Strengthening Treatment
• Hair Fall Control Spa`
});

}

if (fileName.toLowerCase().includes("hair2")) {

return res.json({
  success: true,
  result: `Hair Type: Curly Hair

Hairstyles:
• Curly Bob
• Shag Cut
• Layered Curls

Treatments:
• Curl Defining Spa
• Anti-Frizz Treatment
• Protein Hair Mask`
});

}

});


app.post("/api/beauty-chat", async (req, res) => {

  const { question } = req.body;

  try {

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-oss-20b",
        messages: [
          {
            role: "system",
            content:
              "You are a professional beauty and hairstyle consultant."
          },
          {
            role: "user",
            content: question
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({
      success: true,
      result:
        response.data.choices[0].message.content
    });

  } catch (error) {

    console.error(
      error.response?.data ||
      error.message
    );

    res.status(500).json({
      success: false,
      error:
        error.response?.data ||
        error.message
    });

  }

});

const PORT = 5000;
app.listen(PORT, () => {
console.log(`🚀 Server running on http://localhost:${PORT}`);
});
