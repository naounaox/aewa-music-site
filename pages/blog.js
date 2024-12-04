import Layout from '../components/Layout';
import { useState, useEffect } from 'react';

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

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

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
    <Layout>
      <div className="min-h-screen bg-black">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-12 text-center">BLOG</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts?.map((post) => (
              <div 
                key={post.id} 
                className="bg-black p-8 rounded-xl border-2 border-white shadow-lg"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-sm">
                    {new Date(post.properties.Date.date?.start).toLocaleDateString()}
                  </span>
                  {post.properties.Status.select.name === 'Published' && (
                    <span className="bg-white text-black text-sm px-4 py-1 rounded-full font-bold">
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
                    className="bg-white text-black px-6 py-2 rounded-full font-bold"
                  >
                    READ MORE!
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* モーダル */}
        {selectedPost && (
          <BlogModal 
            post={selectedPost} 
            onClose={() => setSelectedPost(null)} 
          />
        )}
      </div>
    </Layout>
  );
}