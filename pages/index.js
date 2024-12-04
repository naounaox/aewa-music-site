import Head from 'next/head';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


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

function TypeWriter({ text, shouldStartTyping }) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (shouldStartTyping) {
      setDisplayText('');
      setIndex(0);
    }
  }, [shouldStartTyping]);

  useEffect(() => {
    if (!shouldStartTyping) return;
    
    if (index < text.length) {
      let speed = 50;
      const superStartIndex = text.indexOf("I'm super");
      const vibeIndex = text.indexOf("That's the vibe");
      
      if (index >= superStartIndex && index < vibeIndex) {
        const progress = (index - superStartIndex) / (vibeIndex - superStartIndex);
        speed = Math.max(10, 50 - (progress * 40));
      }

      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index, text, shouldStartTyping]);

  return (
    <div 
      style={{ whiteSpace: 'pre-line' }}
      className="text-3xl"
    >
      {displayText}
    </div>
  );
}

// BlogModalコンポーネント
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
        const response = await fetch('/api/spotify?type=latest');
        const data = await response.json();
        setLatestRelease(data);
      } catch (error) {
        console.error('Error fetching latest release:', error);
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
        <meta name="description" content="still pop, still fuzzy - Welcome to æwa's official website." />
      </Head>
      <Layout>
        {/* HOME セクション */}
        <section className="min-h-screen relative overflow-hidden bg-black">
          <div className="absolute inset-0 flex flex-col justify-start opacity-20"
               style={{
                 transform: 'translateY(-20%)',
                 height: '140vh'
               }}>
            {Array(12).fill(null).map((_, rowIndex) => (
              <div 
                key={rowIndex} 
                className="whitespace-nowrap text-7xl font-bold py-4"
                style={{
                  transform: 'translateX(-20%)',
                  width: '140%'
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

{/* メインコンテンツ */}
<div className="relative z-10 flex flex-col items-center justify-center h-screen">
  <div 
    className="record-container absolute"
    style={{ 
      width: '800px',
      height: '800px',
      zIndex: 10
    }}
  >
    <div className="record-spin">
      {/* <Image 
        src="/aewamain.png" 
        alt="aewa main"
        className="w-full h-full object-contain"
      /> */}
      <Image 
  src="/aewamain.png" 
  width={800} 
  height={600} 
  alt="Main Image" 
  priority
/>
    </div>
  </div>
  <h1 className="text-9xl font-gorditas relative" style={{ zIndex: 20, transform: 'translateY(-470px)' }}>æwa</h1>
</div>

        </section>

        {/* RELEASES セクション */}
        <section id="releases" className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">RELEASES</h2>
            <div className="flex items-center justify-center">
              {latestRelease && (
                <div className="lg:max-w-5xl">
                  <div className="bg-black/50 p-12 rounded-2xl backdrop-blur-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div className="transform hover:scale-105 transition-transform duration-300">
                        {latestRelease.images?.[0]?.url && (
                          <Image 
                            src={latestRelease.images[0].url}
                            alt={latestRelease.name}
                            className="rounded-lg shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-300"
                            width={800} 
                            height={800}
                          />
                        )}
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                            {latestRelease.name}
                          </h3>
                          <p className="text-gray-400">
                            Released {new Date(latestRelease.release_date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="mb-8">
                          <iframe 
                            src={`https://open.spotify.com/embed/album/${latestRelease.id}`}
                            width="100%" 
                            height="152" 
                            frameBorder="0" 
                            allowtransparency="true" 
                            allow="encrypted-media"
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link 
                            href={latestRelease.external_urls.spotify}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-[#1DB954] text-black px-8 py-4 rounded-full font-bold hover:bg-opacity-80 text-center flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 font-kalam"
                          >
                            <span className="text-xl">Listen on Spotify</span>
                          </Link>
                          <Link 
                            href="https://music.apple.com/jp/artist/aewa-oiui/1535817204"
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
              )}
            </div>
            <div className="text-center mt-12">
  <Link 
    href="/releases" 
    className="inline-flex items-center text-lg border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 "
  >
    See More Releases →
  </Link>
</div>
          </div>
          
        </section>


        {/* ABOUT セクション */}
        <section id="about-section" className="min-h-screen bg-black flex items-center justify-center p-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold mb-12 text-center">ABOUT</h2>
            <div className="bg-gray-900/50 p-12 rounded-lg font-mono">
            <TypeWriter 
  text="Hi, I&apos;m æwa, as you know it. For you impatient folks who can&apos;t read more than three lines - here&apos;s the quick version: I&apos;m still pop, still fuzzy. I&apos;m super, ultra, happy, sexy, cool, hot, greatest, holy, ultimate, f**kin&apos;, sick, tremendous, awesome, incredible, magnificent, extraordinary, phenomenal, fantastic, legendary, spectacular, epic, brilliant, insane, marvelous, outstanding, remarkable, stunning, excellent, divine, savage, rad, dope, lit, wicked, mind-blowing, out of this world, and absolutely bonkers. That&apos;s the vibe.

And hey, if you need a more formal explanation, check out the rest of this site. &apos;Cause yeah, I can be diligent too."
  shouldStartTyping={isAboutVisible}
/>

            </div>
            <div className="text-center mt-12">
  <Link 
    href="/about" 
    className="inline-flex items-center text-lg border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
  >
    Learn More About æwa →
  </Link>
</div>
          </div>
        </section>

        {/* BLOG セクション */}
        <section id="blog" className="min-h-screen bg-black flex items-center justify-center p-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold mb-12 text-center">BLOG</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts?.map((post) => (
                <div 
                  key={post.id} 
                  className="bg-black p-8 rounded-xl transform transition-all hover:scale-105 hover:-rotate-2 border-2 border-white shadow-lg"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-sm">
                      {new Date(post.properties.Date.date?.start).toLocaleDateString()}
                    </span>
                    {post.properties.Status.select.name === 'Published' && (
                      <span className="bg-white text-black text-sm px-4 py-1 rounded-full font-bold transform -rotate-12">
                        NEW!
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {post.properties.Name.title[0]?.plain_text || 'Untitled'}
                  </h3>
                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {post.properties.Content?.rich_text[0]?.plain_text || ''}
                  </p>
                  <div className="flex justify-end">
                    <button 
                      onClick={() => setSelectedPost(post)}
                      className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors transform hover:scale-105"
                    >
                      READ MORE!
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
  <Link 
    href="/blog" 
    className="inline-flex items-center text-lg border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
  >
    Read More Posts →
  </Link>
</div>
          </div>
        </section>

        {/* CONTACT セクション */}
        <section id="contact" className="min-h-screen bg-black flex items-center justify-center p-8 relative">
          <div className="container mx-auto max-w-xl">
            <h2 className="text-4xl font-bold mb-4 text-center">CONTACT</h2>
            <p className="text-xl text-gray-400 text-center mb-12 font-kalam">
              If something caught your interest, don't hesitate to reach out!
            </p>
            <form className="space-y-6" action="mailto:aewaoiui@gmail.com" method="post">
              <div>
                <label className="block mb-2">NAME</label>
                <input type="text" required className="w-full p-2 bg-gray-800 rounded font-bricolage" />
              </div>
              <div>
                <label className="block mb-2">E-MAIL</label>
                <input type="email" required className="w-full p-2 bg-gray-800 rounded font-bricolage" />
              </div>
              <div>
                <label className="block mb-2">SUBJECT</label>
                <input type="text" required className="w-full p-2 bg-gray-800 rounded font-bricolage" />
              </div>
              <div>
                <label className="block mb-2">MESSAGE</label>
                <textarea required className="w-full p-2 bg-gray-800 rounded h-32 font-bricolage"></textarea>
              </div>
              <button type="submit" className="w-full bg-white text-black py-2 rounded hover:bg-gray-200">
                SEND
              </button>
            </form>
          </div>
          <div className="absolute bottom-8 right-8 text-sm text-gray-400 italic">
            Don't worry, I'm still pop(:
          </div>
        </section>

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