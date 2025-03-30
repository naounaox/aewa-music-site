// import { FaInstagram, FaFacebookF, FaYoutube, FaSoundcloud } from "react-icons/fa";
// import { SiApplemusic, SiSpotify } from "react-icons/si";
// import Link from 'next/link';


// export default function Layout({ children }) {
//  return (
//    <main className="min-h-screen bg-black text-white flex flex-col font-gorditas">
//    <nav className="w-full max-w-screen-xl mx-auto px-4 py-8 flex items-center justify-center overflow-hidden">
//   <ul className="flex items-center justify-between w-full max-w-5xl">
//     <li><Link href="#releases" className="text- font-gorditas hover:text-gray-300">RELEASES</Link></li>
//     <li className="mx-4 md:mx-16"><Link href="#about" className="text-xl font-gorditas hover:text-gray-300">ABOUT</Link></li>
//     <li className="mx-4 md:mx-16"><Link href="/" className="text-3xl md:text-6xl font-gorditas">æwa</Link></li>
//     <li className="mx-4 md:mx-16"><Link href="#blog" className="text-xl font-gorditas hover:text-gray-300">BLOG</Link></li>
//     <li><Link href="#contact" className="text-xl font-gorditas hover:text-gray-300">CONTACT</Link></li>
//   </ul>
// </nav>
//      {children}
//      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
//   <div className="flex flex-col items-center space-y-6">
//     <div className="flex space-x-6">
//       <Link href="https://www.instagram.com/aewasongs" 
//          target="_blank" 
//          rel="noopener noreferrer" 
//          className="hover:text-gray-300">
//         <FaInstagram size={24} />
//       </Link>
//       <Link href="https://www.facebook.com/aewasongs" 
//          target="_blank" 
//          rel="noopener noreferrer" 
//          className="hover:text-gray-300">
//         <FaFacebookF size={24} />
//       </Link>
//        <Link href="https://soundcloud.com/aewasongs"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="hover:text-gray-300">
//          <FaSoundcloud size={24} />
//          </Link>
//       <Link href="https://music.apple.com/jp/artist/aewa-oiui/1535817204" 
//          target="_blank" 
//          rel="noopener noreferrer" 
//          className="hover:text-gray-300">
//         <SiApplemusic size={24} />
//       </Link>
//       <Link href="https://open.spotify.com/intl-ja/artist/5JV1dLA0kOJbrBAvPNZFDX" 
//          target="_blank" 
//          rel="noopener noreferrer" 
//          className="hover:text-gray-300">
//         <SiSpotify size={24} />
//       </Link>
//       <Link href="https://www.youtube.com/@aewasongs" 
//          target="_blank" 
//          rel="noopener noreferrer" 
//          className="hover:text-gray-300">
//         <FaYoutube size={24} />
//       </Link>
//     </div>
//     <p className="text-sm text-gray-400">
//       © All rights reserved by aewa until he get board
//     </p>
//   </div>
// </footer>
//    </main>
//  )
// }

import { useState } from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaSoundcloud } from "react-icons/fa";
import { SiApplemusic, SiSpotify } from "react-icons/si";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // 三本線アイコン
import Link from "next/link";



export default function Layout({ children }) {
  const [open, setOpen] = useState(false); // ハンバーガーメニューの開閉状態

  // メニューを開く関数
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // メニューを閉じる関数
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col font-gorditas">
      <>

<AppBar
  position="fixed"
  sx={{
    backgroundColor: '#000000', // 背景色を黒に
    color: 'white', // テキストを白に
    height: { xs: '70px', sm: '80px', md: '100px' }, // ヘッダーの高さ
  }}
>
  <Toolbar
    sx={{
      justifyContent: 'space-between',
      px: { xs: 2, sm: 4 }, // スマホでは左右の余白を調整
    }}
  >
    {/* PC用のナビゲーション（スマホでは非表示） */}
    <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
  <Button
    color="inherit"
    href="#releases"
    sx={{
      fontFamily: 'Gorditas, cursive', // フォントをGorditasに変更
      fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' }, // デバイス幅ごとの文字サイズ
    }}
  >
    RELEASES
  </Button>
  <Button
    color="inherit"
    href="#about"
    sx={{
      fontFamily: 'Gorditas, cursive', // フォントをGorditasに変更
      fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' }, // デバイス幅ごとの文字サイズ
    }}
  >
    ABOUT
  </Button>
</Box>


    {/* 中央のテキスト */}
    <Button
      variant="h4"
      href="#home"
      sx={{
        fontFamily: 'Gorditas, cursive',
        textAlign: 'center',
        fontSize: { xs: '3.5rem', sm: '4rem', md: '6rem' },
        letterSpacing: '0.07em',
        whiteSpace: 'nowrap',
        textTransform: 'none',
      }}
    >
      æwa
    </Button>

    {/* 右側のPC用ナビゲーション（スマホでは非表示） */}
    <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
  <Button
    color="inherit"
    href="#blog"
    sx={{
      fontFamily: 'Gorditas, cursive', // フォントをGorditasに変更
      fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' }, // デバイス幅ごとの文字サイズ
    }}
  >
    BLOG
  </Button>
  <Button
    color="inherit"
    href="#contact"
    sx={{
      fontFamily: 'Gorditas, cursive', // フォントをGorditasに変更
      fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' }, // デバイス幅ごとの文字サイズ
    }}
  >
    CONTACT
  </Button>
</Box>

    {/* スマホ用のハンバーガーメニュー（PCでは非表示） */}
    <IconButton
      color="inherit"
      aria-label="menu"
      sx={{ display: { xs: 'block', sm: 'none' } }}
      onClick={handleDrawerOpen}
    >
      <MenuIcon />
    </IconButton>

    {/* ドロワーメニュー（スライドするサイドメニュー） */}
    <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
      <List sx={{ width: 250 }}>
        {['HOME', 'RELEASES', 'ABOUT', 'BLOG', 'CONTACT'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={handleDrawerClose} href={`#${text.toLowerCase()}`}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  </Toolbar>
</AppBar>
</>


      {/* メインコンテンツ */}
      {children}

      {/* フッター */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <Link
              href="https://www.instagram.com/aewasongs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://www.facebook.com/aewasongs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaFacebookF size={24} />
            </Link>
            <Link
              href="https://soundcloud.com/aewasongs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaSoundcloud size={24} />
            </Link>
            <Link
              href="https://music.apple.com/jp/artist/aewa-oiui/1535817204"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <SiApplemusic size={24} />
            </Link>
            <Link
              href="https://open.spotify.com/intl-ja/artist/5JV1dLA0kOJbrBAvPNZFDX"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <SiSpotify size={24} />
            </Link>
            <Link
              href="https://www.youtube.com/@aewasongs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaYoutube size={24} />
            </Link>
          </div>
          <p className="text-sm text-gray-400">© All rights reserved by aewa until he get board</p>
        </div>
      </footer>
    </main>
  );
}

