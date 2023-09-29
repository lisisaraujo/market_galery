import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 4000;
const API_KEY = process.env.PEXELS_API_KEY;
let page = 1;

const BASE_URL = `https://api.unsplash.com/search/photos/`;

// Use cors middleware
app.use(cors());

app.use(express.json());

app.get("/api/photos", async (req, res) => {
  // console.log("Request received at /api/photos");
  try {
    const response = await fetch(`${BASE_URL}?query=tea&page=${page}`, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });

    // console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await response.json();
    console.log("Data:", data);
    res.json(data);
  } catch (error) {
    console.error("Error fetching photos:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
