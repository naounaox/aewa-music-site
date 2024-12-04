import SpotifyWebApi from 'spotify-web-api-node';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const spotifyApi = new SpotifyWebApi({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    });

    // アクセストークンを取得
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body['access_token']);

    // エンドポイントによって処理を分ける
    const { type } = req.query;

    if (type === 'latest') {
      // 最新リリースのみ取得（HOMEページ用）
      const albums = await spotifyApi.getArtistAlbums(process.env.ARTIST_ID, {
        limit: 1,
        include_groups: 'album,single'
      });
      const latestRelease = albums.body.items[0];
      const tracks = await spotifyApi.getAlbum(latestRelease.id);

      res.status(200).json({
        ...latestRelease,
        tracks: tracks.body.tracks
      });
    } else {
      // 全リリースを取得（Releasesページ用）
      const albums = await spotifyApi.getArtistAlbums(process.env.ARTIST_ID, {
        limit: 50,
        include_groups: 'album,single'
      });

      res.status(200).json(albums.body.items);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error fetching releases' });
  }
}