import React from "react";
import Link from "next/link";

const Blog = ({ posts, setSelectedPost }) => {
  return (
    <section id="blog" className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">BLOG</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.slice(0, 3).map((post) => (
            <div 
              key={post.id} 
              className="bg-black p-8 rounded-xl transform transition-all hover:scale-105 hover:-rotate-2 border-2 border-white shadow-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-sm text-white">
                  {new Date(post.properties.Date.date?.start).toLocaleDateString()}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
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
  );
};

export default Blog;
