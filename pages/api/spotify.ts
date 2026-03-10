import type { NextApiRequest, NextApiResponse } from "next";

type SpotifyAlbum = {
  id: string;
  name: string;
  release_date: string;
  external_urls: {
    spotify: string;
  };
  images: {
    url: string;
    width: number;
    height: number;
  }[];
  album_type: string;
  total_tracks: number;
};

type SuccessResponse = {
  id: string;
  name: string;
  release_date: string;
  url: string;
  imageUrl: string | null;
  album_type: string;
  total_tracks: number;
};

type ErrorResponse = {
  message: string;
  details?: string;
};

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const ARTIST_ID = process.env.SPOTIFY_ARTIST_ID;

async function getAccessToken(): Promise<string> {
  if (!CLIENT_ID || !CLIENT_SECRET) {
    throw new Error("Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET");
  }

  const basicAuth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }).toString(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Token fetch failed: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  return data.access_token;
}

async function getLatestSingle(accessToken: string): Promise<SpotifyAlbum | null> {
  if (!ARTIST_ID) {
    throw new Error("Missing SPOTIFY_ARTIST_ID");
  }

  const params = new URLSearchParams({
    include_groups: "single",
    market: "US",
    limit: "10",
  });

  const response = await fetch(
    `https://api.spotify.com/v1/artists/${ARTIST_ID}/albums?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Artist albums fetch failed: ${response.status} ${errorText}`);
  }

  const data = await response.json();

  const items: SpotifyAlbum[] = Array.isArray(data.items) ? data.items : [];

  // remove duplicates (Spotify API can return duplicates if an album is released in multiple markets)
  const uniqueItems = Array.from(
    new Map(items.map((item) => [item.id, item])).values()
  );

  uniqueItems.sort((a, b) => {
    return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
  });

  return uniqueItems[0] ?? null;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const accessToken = await getAccessToken();
    const latestSingle = await getLatestSingle(accessToken);

    if (!latestSingle) {
      return res.status(404).json({ message: "No single found" });
    }

    return res.status(200).json({
      id: latestSingle.id,
      name: latestSingle.name,
      release_date: latestSingle.release_date,
      url: latestSingle.external_urls.spotify,
      imageUrl: latestSingle.images?.[0]?.url ?? null,
      album_type: latestSingle.album_type,
      total_tracks: latestSingle.total_tracks,
    });
  } catch (error) {
    console.error("Spotify API error:", error);

    const message =
      error instanceof Error ? error.message : "Unknown error occurred";

    return res.status(500).json({
      message: "Failed to fetch latest single",
      details: message,
    });
  }
}