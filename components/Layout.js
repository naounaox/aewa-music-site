import { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube, FaSoundcloud } from "react-icons/fa";
import { SiApplemusic, SiSpotify } from "react-icons/si";
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(state);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col font-gorditas">
      {/* ナビゲーション */}
      <nav className="w-full max-w-screen-xl mx-auto px-4 py-8 flex items-center justify-between">
        
        {/* スマホ版（ロゴ＋ハンバーガー） */}
        <div className="md:hidden flex items-center w-full justify-between">
          <Link href="/" className="text-3xl font-gorditas">æwa</Link>
          <IconButton onClick={toggleDrawer(true)} color="inherit">
            <MenuIcon className="text-white" />
          </IconButton>
        </div>

        {/* PC版ナビゲーション */}
        <ul className="hidden md:flex items-center justify-between w-full max-w-5xl">
          <li><Link href="#releases" className="text-xl font-gorditas hover:text-gray-300">RELEASES</Link></li>
          <li className="mx-4 md:mx-16"><Link href="#about" className="text-xl font-gorditas hover:text-gray-300">ABOUT</Link></li>
          <li className="mx-4 md:mx-16"><Link href="/" className="text-3xl md:text-6xl font-gorditas">æwa</Link></li>
          <li className="mx-4 md:mx-16"><Link href="#blog" className="text-xl font-gorditas hover:text-gray-300">BLOG</Link></li>
          <li><Link href="#contact" className="text-xl font-gorditas hover:text-gray-300">CONTACT</Link></li>
        </ul>

        {/* MUIのDrawer（ハンバーガーメニュー） */}
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <div className="w-64 bg-black h-full text-white">
            <List>
              {["BLOG", "CONTACT", "HOME", "ABOUT", "RELEASE"].map((text) => (
                <ListItem button key={text} onClick={toggleDrawer(false)}>
                  <Link href={`#${text.toLowerCase()}`} className="w-full">
                    <ListItemText primary={text} className="text-white text-center" />
                  </Link>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </nav>

      {/* コンテンツ部分 */}
      {children}

      {/* フッター */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <Link href="https://www.instagram.com/aewasongs" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </Link>
            <Link href="https://www.facebook.com/aewasongs" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebookF size={24} />
            </Link>
            <Link href="https://soundcloud.com/aewasongs" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaSoundcloud size={24} />
            </Link>
            <Link href="https://music.apple.com/jp/artist/aewa-oiui/1535817204" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <SiApplemusic size={24} />
            </Link>
            <Link href="https://open.spotify.com/intl-ja/artist/5JV1dLA0kOJbrBAvPNZFDX" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <SiSpotify size={24} />
            </Link>
            <Link href="https://www.youtube.com/@aewasongs" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaYoutube size={24} />
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            © All rights reserved by aewa until he get bored
          </p>
        </div>
      </footer>
    </main>
  );
}
