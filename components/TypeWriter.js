import { useState, useEffect } from "react";

const TypeWriter = ({ text, shouldStartTyping }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const sanitizedText = text.replace(/'/g, "&apos;"); // ✅ アポストロフィをエスケープ

  useEffect(() => {
    if (shouldStartTyping) {
      setDisplayText("");
      setIndex(0);
    }
  }, [shouldStartTyping]);

  useEffect(() => {
    if (!shouldStartTyping) return;

    if (index < sanitizedText.length) {
      let speed = 50;
      const superStartIndex = sanitizedText.indexOf("I'm super");
      const vibeIndex = sanitizedText.indexOf("That's the vibe");

      if (index >= superStartIndex && index < vibeIndex) {
        const progress = (index - superStartIndex) / (vibeIndex - superStartIndex);
        speed = Math.max(10, 50 - (progress * 40));
      }

      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + sanitizedText[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index, sanitizedText, shouldStartTyping]);

  return (
    <div 
      style={{ whiteSpace: "pre-line" }}
      className="text-xl md:text-3xl"
    >
      {displayText}
    </div>
  );
};

export default TypeWriter;
