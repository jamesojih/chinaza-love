
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/love", (req, res) => {
  res.json({
    message: "Chinaza ❤️ I LOVE YOU! You are special to me. Best pals for life! 🥰💕"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Love server running on port " + PORT);
});
