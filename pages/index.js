import Head from 'next/head';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// 動的インポート：スクロール時に遅延ロード（LCP改善）
const HomeHero = dynamic(() => import("@/components/HomeHero"), {
  loading: () => <div className="min-h-screen bg-black" />,
});
const Releases = dynamic(() => import("@/components/Releases"), { 
  loading: () => <div className="min-h-screen bg-black" />,
  ssr: false
});
const About = dynamic(() => import("@/components/About"), { 
  loading: () => <div className="min-h-screen bg-black" />,
  ssr: false
});
const Contact = dynamic(() => import("@/components/Contact"), { 
  loading: () => <div className="min-h-screen bg-black" />,
  ssr: false
});
const Blog = dynamic(() => import("@/components/Blog"), { 
  loading: () => <div className="min-h-screen bg-black" />,
  ssr: false
});

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
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const getPhraseWithFont = (index) => ({
    text: 'still pop, still fuzzy',
    font: fonts[index % fonts.length]
  });

  // Spotify API：遅延実行（優先度低い）
  useEffect(() => {
    async function fetchLatestRelease() {
      try {
        const response = await fetch("/api/spotify");
        const data = await response.json();
        console.log("Fetched latest release:", data);
      } catch (error) {
        console.error("Failed to fetch latest release:", error);
      }
    }
  
    // ページロード後1秒待つ（ユーザーがコンテンツを見る時間を優先）
    const timer = setTimeout(() => {
      fetchLatestRelease();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  
  
  // About セクション：Intersection Observer最適化
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  // Notion Blog API：遅延実行（2秒後）
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const response = await fetch('/api/notion');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>aewa - Official Website</title>
        <meta name="description" content="still pop, still fuzzy - Welcome to aewa's official website." />
      </Head>
      <Layout>
        <HomeHero />
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