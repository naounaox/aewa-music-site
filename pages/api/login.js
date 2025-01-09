export default function handler(req, res) {
  const scope = [
    "user-read-private",
    "user-read-email",
    "playlist-read-private",
  ].join(" ");

  const params = new URLSearchParams({
    client_id: process.env.SPOTIFY_CLIENT_ID,
    response_type: "code",
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    scope,
  });

  res.redirect(`https://accounts.spotify.com/authorize?${params.toString()}`);
}
