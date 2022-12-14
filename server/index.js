require("dotenv").config();
const path = require("path");
const express = require("express");
const fetch = require("node-fetch");

const PORT = process.env.PORT || 3001;

const app = express();
const url = "https://api.thecatapi.com/v1";

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from CatWiki!" });
});

app.get("/api/breeds", async (req, res) => {
  const response = await fetch(`${url}/breeds`, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.API_KEY,
    },
  });
  const data = await response.json();
  res.json(data);
});
app.get("/api/images/:id", async (req, res) => {
  const response = await fetch(
    `${url}/images/search?limit=12&breed_ids=${req.params.id}`,
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.API_KEY,
      },
    }
  );
  const data = await response.json();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;
