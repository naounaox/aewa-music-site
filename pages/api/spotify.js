// import SpotifyWebApi from 'spotify-web-api-node';

// export default async function handler(req, res) {
//   if (req.method !== 'GET') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   try {
//     const spotifyApi = new SpotifyWebApi({
//       clientId: process.env.SPOTIFY_CLIENT_ID,
//       clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
//     });

//     // アクセストークンを取得
//     const data = await spotifyApi.clientCredentialsGrant();
//     spotifyApi.setAccessToken(data.body['access_token']);

//     // エンドポイントによって処理を分ける
//     const { type } = req.query;

//     if (type === 'latest') {
//       // 最新リリースのみ取得（HOMEページ用）
//       const albums = await spotifyApi.getArtistAlbums(process.env.ARTIST_ID, {
//         limit: 1,
//         include_groups: 'album,single'
//       });
//       const latestRelease = albums.body.items[0];
//       const tracks = await spotifyApi.getAlbum(latestRelease.id);

//       res.status(200).json({
//         ...latestRelease,
//         tracks: tracks.body.tracks
//       });
//     } else {
//       // 全リリースを取得（Releasesページ用）
//       const albums = await spotifyApi.getArtistAlbums(process.env.ARTIST_ID, {
//         limit: 50,
//         include_groups: 'album,single'
//       });

//       res.status(200).json(albums.body.items);
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ message: 'Error fetching releases' });
//   }
// }

import axios from "axios";

export default async function handler(req, res) {
  try {
    // `/api/refresh` からアクセストークンを取得
    const tokenResponse = await fetch("http://localhost:3000/api/refresh");
    const { access_token } = await tokenResponse.json();

    if (!access_token) {
      return res.status(401).json({ error: "Failed to get access token" });
    }

    // ✅ 正しいアーティストIDに変更
    const artistId = "1rbAnM7ix1r6WRSUaGPdE1"; 

    // Spotify API を呼び出して最新のリリースを取得
    const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      params: {
        include_groups: "album,single", // アルバムとシングルを取得
        limit: 5, // 最新5件を取得（変更可能）
        market: "JP", // 日本市場向け（必要に応じて変更）
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching Spotify data:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch data from Spotify API" });
  }
}
