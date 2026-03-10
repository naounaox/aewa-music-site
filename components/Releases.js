// components/Releases.js
import { useEffect, useRef, useState } from 'react';

const Releases = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // IntersectionObserver：セクションが見える時点でiframe読み込み開始
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="releases" 
      className="min-h-screen bg-black flex items-center justify-center p-8"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 text-white">RELEASES</h2>
        
        {/* Spotifyの埋め込みプレイヤー（遅延ロード） */}
        <div className="bg-black/50 p-6 rounded-2xl backdrop-blur-sm">
          {isVisible ? (
            <iframe 
              style={{ borderRadius: "12px" }} 
              src="https://open.spotify.com/embed/album/4quDywj1HIVLCfqeFxkhuG?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="max-w-2xl mx-auto"
            />
          ) : (
            // プレースホルダー：LCP改善のため軽量なDOM
            <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg" style={{ height: '352px' }} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Releases;
  