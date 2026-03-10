import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Releases() {
  const [release, setRelease] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchRelease() {
      try {
        const response = await fetch('/api/spotify');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.details || data.message || 'Failed to fetch release');
        }

        setRelease(data);
      } catch (error) {
        console.error('Error fetching release:', error);
        setError(error.message || 'Failed to fetch release');
      } finally {
        setLoading(false);
      }
    }

    fetchRelease();
  }, []);

  return (
    <>
      <Head>
        <title>Releases - aewa Official Website</title>
        <meta
          name="description"
          content="Explore aewa's music releases. Listen to the latest single on Spotify."
        />
        <meta property="og:title" content="Releases - aewa Official Website" />
        <meta
          property="og:description"
          content="Explore aewa's music releases. Listen to the latest single on Spotify."
        />
        <meta property="og:type" content="music.musician" />
        {release?.imageUrl && <meta property="og:image" content={release.imageUrl} />}
      </Head>

      <Layout>
        <main className="min-h-screen bg-black text-white font-bricolage">
          <div className="container mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold mb-10">RELEASES</h1>

            {loading && <p>Loading...</p>}

            {error && <p className="text-red-400">Error: {error}</p>}

            {!loading && !error && release && (
              <div className="max-w-md border border-gray-800 rounded-lg p-4">
                {release.imageUrl && (
                  <Image
                    src={release.imageUrl}
                    alt={release.name}
                    width={500}
                    height={500}
                    className="w-full rounded-lg"
                  />
                )}

                <p className="text-sm text-gray-400 mt-4 uppercase tracking-widest">
                  Latest Single
                </p>

                <h2 className="text-2xl font-bold mt-2">{release.name}</h2>

                <p className="text-gray-400 mt-2">
                  {new Date(release.release_date).toLocaleDateString('en-US')}
                </p>

                <Link
                  href={release.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-400"
                >
                  Listen on Spotify
                </Link>
              </div>
            )}
          </div>
        </main>
      </Layout>
    </>
  );
}