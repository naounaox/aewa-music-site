import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export default function Releases() {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    async function fetchReleases() {
      try {
        const response = await fetch('/api/spotify');
        const data = await response.json();
        setReleases(data);
      } catch (error) {
        console.error('Error fetching releases:', error);
      }
    }

    fetchReleases();
  }, []);

  return (
    <>
      <Head>
        <title>Releases - æwa Official Website</title>
        <meta name="description" content="Explore æwa's music releases. Listen to latest singles and albums on Spotify." />
        <meta property="og:title" content="Releases - æwa Official Website" />
        <meta property="og:description" content="Explore æwa's music releases. Listen to latest singles and albums on Spotify." />
        <meta property="og:type" content="music.musician" />
        {releases[0]?.images?.[0]?.url && (
          <meta property="og:image" content={releases[0].images[0].url} />
        )}
      </Head>
      <Layout>
        <div className="container mx-auto px-4 flex-grow">
          <main className="min-h-screen bg-black text-white font-bricolage">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold py-10">RELEASES</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {releases.map((release) => (
                  <div key={release.id} className="border border-gray-800 rounded-lg p-4">
                    {release.images?.[0]?.url && (
                      <img 
                        src={release.images[0].url} 
                        alt={release.name} 
                        className="w-full rounded-lg"
                      />
                    )}
                    <h2 className="text-xl font-bold mt-4">{release.name}</h2>
                    <p className="text-gray-400">{new Date(release.release_date).toLocaleDateString()}</p>
                    {release.external_urls?.spotify && (
                      <a 
                        href={release.external_urls.spotify} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-400"
                      >
                        Listen on Spotify
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
}