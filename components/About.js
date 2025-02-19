import { useState, useEffect } from "react";
import Link from "next/link";
import TypeWriter from "@/components/TypeWriter"; // ✅ TypeWriterをインポート

const About = () => {
  const [isAboutVisible, setIsAboutVisible] = useState(false); // ✅ ここで isAboutVisible を定義

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsAboutVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初回実行
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about-section" className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">ABOUT</h2>
        <div className="bg-gray-900/50 p-12 rounded-lg font-mono">
          <TypeWriter 
            text={`Hi, I'm aewa, as you know it. For you impatient folks who can't read more than three lines - here's the quick version: I'm still pop, still fuzzy. I'm super, ultra, happy, sexy, cool, hot, greatest, holy, ultimate, f**kin', sick, tremendous, awesome, incredible, magnificent, extraordinary, phenomenal, fantastic, legendary, spectacular, epic, brilliant, insane, marvelous, outstanding, remarkable, stunning, excellent, divine, savage, rad, dope, lit, wicked, mind-blowing, out of this world, and absolutely bonkers. That's the vibe.

And hey, if you need a more formal explanation, check out the rest of this site. 'Cause yeah, I can be diligent too.`}
            shouldStartTyping={isAboutVisible} // ✅ 修正：変数を適切に渡す
          />
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/about"
            className="inline-flex items-center text-lg border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Learn More About aewa →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
