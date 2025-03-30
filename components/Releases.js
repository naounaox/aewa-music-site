// components/Releases.js
const Releases = () => {
    return (
      <section id="releases" className="min-h-screen bg-black flex items-center justify-center p-8">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-white">RELEASES</h2>
          
          {/* 🎵 Spotifyの埋め込みプレイヤー */}
          <div className="bg-black/50 p-6 rounded-2xl backdrop-blur-sm">
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
          </div>
        </div>
      </section>
    );
  };
  
  export default Releases;
  