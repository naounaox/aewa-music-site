import axios from "axios";

export default async function handler(req, res) {
  try {
    console.log("Refreshing Spotify token...");

    const response = await axios.post("https://accounts.spotify.com/api/token", null, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64")}`,
      },
      params: {
        grant_type: "refresh_token",
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
      },
    });

    console.log("Spotify Response:", response.data);

    const { access_token } = response.data;
    res.status(200).json({ access_token });
  } catch (error) {
    console.error("Error refreshing token:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to refresh token" });
  }
}
