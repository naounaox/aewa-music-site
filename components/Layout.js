import { FaInstagram, FaFacebookF, FaYoutube, FaSoundcloud } from "react-icons/fa";
import { SiApplemusic, SiSpotify } from "react-icons/si";

export default function Layout({ children }) {
 return (
   <main className="min-h-screen bg-black text-white flex flex-col font-gorditas">
   <nav className="container mx-auto px-4 py-8 flex items-center justify-center">
  <ul className="flex items-center">
    <li><a href="#releases" className="text- font-gorditas hover:text-gray-300">RELEASES</a></li>
    <li className="mx-16"><a href="#about" className="text-xl font-gorditas hover:text-gray-300">ABOUT</a></li>
    <li className="mx-16"><a href="/" className="text-6xl font-gorditas">æwa</a></li>
    <li className="mx-16"><a href="#blog" className="text-xl font-gorditas hover:text-gray-300">BLOG</a></li>
    <li><a href="#contact" className="text-xl font-gorditas hover:text-gray-300">CONTACT</a></li>
  </ul>
</nav>
     {children}
     <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
  <div className="flex flex-col items-center space-y-6">
    <div className="flex space-x-6">
      <a href="https://www.instagram.com/aewasongs" 
         target="_blank" 
         rel="noopener noreferrer" 
         className="hover:text-gray-300">
        <FaInstagram size={24} />
      </a>
      <a href="https://www.facebook.com/aewasongs" 
         target="_blank" 
         rel="noopener noreferrer" 
         className="hover:text-gray-300">
        <FaFacebookF size={24} />
      </a>
       <a href="https://soundcloud.com/aewasongs"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-300">
         <FaSoundcloud size={24} />
         </a>
      <a href="https://music.apple.com/jp/artist/aewa-oiui/1535817204" 
         target="_blank" 
         rel="noopener noreferrer" 
         className="hover:text-gray-300">
        <SiApplemusic size={24} />
      </a>
      <a href="https://open.spotify.com/intl-ja/artist/5JV1dLA0kOJbrBAvPNZFDX" 
         target="_blank" 
         rel="noopener noreferrer" 
         className="hover:text-gray-300">
        <SiSpotify size={24} />
      </a>
      <a href="https://www.youtube.com/@aewasongs" 
         target="_blank" 
         rel="noopener noreferrer" 
         className="hover:text-gray-300">
        <FaYoutube size={24} />
      </a>
    </div>
    <p className="text-sm text-gray-400">
      © All rights reserved by aewa until he get board
    </p>
  </div>
</footer>
   </main>
 )
}