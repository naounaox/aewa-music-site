import axios from "axios";

export default async function handler(req, res) {
  const code = req.query.code;

  if (!code) {
    return res.status(400).json({ error: "Missing authorization code" });
  }

  try {
    const response = await axios.post("https://accounts.spotify.com/api/token", null, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64")}`,
      },
      params: {
        grant_type: "authorization_code",
        code,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
      },
    });

    const { access_token, refresh_token } = response.data;

    res.status(200).json({ access_token, refresh_token });
  } catch (error) {
    console.error("Error fetching Spotify tokens:", error.response.data);
    res.status(500).json({ error: "Failed to fetch tokens" });
  }
}
