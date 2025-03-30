import Head from 'next/head';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Releases from "@/components/Releases";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";

const fonts = [
  'Jura',
  'Roboto Condensed',
  'Ubuntu',
  'Bokor',
  'Bebas Neue',
  'Indie Flower',
  'Shadows Into Light',
  'Righteous',
  'Orbitron',
  'Hachi Maru Pop',
  'Amatic SC',
  'Silkscreen',
  'Sacramento',
  'Reenie Beanie',
  'Nixie One',
  'Special Elite',
  'Paytone One',
  'Monoton',
  'Six Caps',
  'Nanum Pen Script',
  'Share Tech Mono',
  'Gochi Hand',
  'Coda',
  'Allerta Stencil',
  'New Rocker',
  'Jomhuria',
  'Elsie'
];


const BlogModal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-black border-2 border-white rounded-xl p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
        >
          ×
        </button>
        <div className="mb-4">
          <span className="text-sm text-gray-400">
            {new Date(post.properties.Date.date?.start).toLocaleDateString()}
          </span>
        </div>
        <h3 className="text-3xl font-bold mb-6">
          {post.properties.Name.title[0]?.plain_text}
        </h3>
        <div className="text-gray-300 whitespace-pre-wrap">
          {post.properties.Content?.rich_text[0]?.plain_text}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [latestRelease, setLatestRelease] = useState(null);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const getPhraseWithFont = (index) => ({
    text: 'still pop, still fuzzy',
    font: fonts[index % fonts.length]
  });


  useEffect(() => {
    async function fetchLatestRelease() {
      try {
        const response = await fetch("/api/spotify");
        const data = await response.json();
        console.log("Fetched latest release:", data); // ✅ ここでデータを確認
  
        if (Array.isArray(data.items) && data.items.length > 0) {
          console.log("Setting latestRelease:", data.items[0]); // ✅ ここでデバッグ
          setLatestRelease(data.items[0]);
        } else {
          console.warn("No releases found");
          setLatestRelease(null);
        }
      } catch (error) {
        console.error("Failed to fetch latest release:", error);
      }
    }
  
    fetchLatestRelease();
  }, []);
  
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboutVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);



  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/notion');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>aewa - Official Website</title>
        <meta name="description" content="still pop, still fuzzy - Welcome to aewa's official website." />
      </Head>
      <Layout>
{/* HOME セクション */}
<section id="home" className="min-h-screen relative overflow-hidden bg-black">
  <div className="absolute inset-0 flex flex-col justify-start opacity-20"
       style={{
         transform: 'translateY(-20%)',
         height: '140vh'
       }}>
    {Array(12).fill(null).map((_, rowIndex) => (
      <div 
        key={rowIndex} 
        className="whitespace-nowrap text-2xl md:text-7xl font-bold py-4"
        style={{
          transform: 'translateX(-10%)',
          width: '150%'
        }}
      >
        {Array(8).fill(null).map((_, phraseIndex) => {
          const phrase = getPhraseWithFont(rowIndex * 8 + phraseIndex);
          return (
            <span
              key={phraseIndex}
              style={{ fontFamily: phrase.font }}
            >
              {phrase.text + ', '}
            </span>
          );
        })}
      </div>
    ))}
  </div>

  
  <div className="relative z-10 flex flex-col items-center justify-center h-screen">
  <div 
  className="record-container absolute"
  style={{ 
    width: '90vw',
    maxWidth: '800px',
    height: 'auto',
    aspectRatio: '1 / 1',
    zIndex: 10
  }}
>
      <div className="record-spin">
        <img 
          src="/aewamain.png" 
          alt="aewa main"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
    <h1 className="text-4xl md:text-9xl font-gorditas relative" style={{ zIndex: 20 }}>æwa</h1>
  </div>
</section>


{/* RELEASES セクション */}
{/* <section id="releases" className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold mb-16 text-center">RELEASES</h2>
    <div className="flex items-center justify-center">
      {latestRelease ? (
        <div className="lg:max-w-5xl">
          <div className="bg-black/50 p-12 rounded-2xl backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="transform hover:scale-105 transition-transform duration-300">
                {latestRelease.images?.[0]?.url ? (
                  <Image 
                    src={latestRelease.images[0].url}
                    alt={latestRelease.name}
                    className="rounded-lg shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-300"
                    width={800} 
                    height={800}
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    {latestRelease.name || "Unknown Title"}
                  </h3>
                  <p className="text-gray-400">
                    Released {latestRelease.release_date ? new Date(latestRelease.release_date).toLocaleDateString() : "Unknown Date"}
                  </p>
                </div>
                
<div className="mb-8">
  {latestRelease?.id ? (
    <>
      {console.log("Rendering latestRelease:", latestRelease)} 
      <iframe 
  src={`https://open.spotify.com/embed/album/${latestRelease.id}`} 
  width="100%" 
  height="152"
  style={{ border: "none" }} // ✅ ここで border を消す
  allow="encrypted-media"
  sandbox="allow-scripts allow-same-origin"
  className="rounded-lg md:w-[600px]"
></iframe>

    </>
  ) : (
    <p>No release found</p>
  )}
</div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href={latestRelease.external_urls?.spotify || "#"}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#1DB954] text-black px-8 py-4 rounded-full font-bold hover:bg-opacity-80 text-center flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 font-kalam"
                  >
                    <span className="text-xl">Listen on Spotify</span>
                  </Link>

                  <Link 
                    href="https://music.apple.com/jp/artist/aewa/1787535063"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#fb233b] text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-80 text-center flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 font-kalam"
                  >
                    <span className="text-xl">Listen on Apple Music</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-400">Loading latest release...</p>
      )}
    </div>
    <div className="text-center mt-12">
      <Link 
        href="/releases" 
        className="inline-flex items-center text-lg border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
      >
        See More Releases →
      </Link>
    </div>
  </div>
</section> */}

{/* 
<section id="releases" className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">RELEASES</h2>
    
    
    <div className="bg-black/50 p-12 rounded-2xl backdrop-blur-sm">
      <h3 className="text-2xl font-bold text-yellow-400 mb-4">
        🚧 Coming Soon! Hold tight! 🚧
      </h3>
      <p className="text-gray-300 text-lg mb-6">
        I&apos;m working on this section. Meanwhile, check out my latest releases on Spotify! 🎧🔥
      </p>

     
      <Link 
        href="https://open.spotify.com/artist/1rbAnM7ix1r6WRSUaGPdE1" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1DB954] text-black px-8 py-4 rounded-full font-bold hover:bg-opacity-80 text-center flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 font-kalam"
      >
        <span className="text-xl">🎵 Check it out on Spotify!</span>
      </Link>
    </div>
  </div>
</section> */}

<Releases/>

<About/>

<Blog posts={posts} setSelectedPost={setSelectedPost} />

<Contact/>

        {/* モーダル */}
        {selectedPost && (
          <BlogModal 
            post={selectedPost} 
            onClose={() => setSelectedPost(null)} 
          />
        )}
       </Layout>
    </>
  );
}