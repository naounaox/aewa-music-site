import Image from 'next/image';

const fonts = [
  'Ubuntu',
  'Indie Flower',
  'Shadows Into Light',
  'Nixie One',
  'Special Elite',
  'Share Tech Mono',
  'Coda',
  'Elsie'
];

const getPhraseWithFont = (index) => ({
  text: 'still pop, still fuzzy',
  font: fonts[index % fonts.length]
});

const rows = 18;
const phrasesPerRow = 8;

export default function HomeHero() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-black">
      <div className="absolute inset-0 flex flex-col justify-start opacity-20"
           style={{
             transform: 'translateY(-20%)',
             height: '140vh',
             willChange: 'transform',
             backfaceVisibility: 'hidden',
             perspective: 1000,
           }}>
    {Array(rows).fill(null).map((_, rowIndex) => (
      <div 
        key={rowIndex} 
        className="whitespace-nowrap text-3xl md:text-7xl font-bold py-3 md:py-4"
        style={{
          transform: 'translateX(-10%)',
          width: '180%',
          backfaceVisibility: 'hidden',
        }}
      >
        {Array(phrasesPerRow).fill(null).map((_, phraseIndex) => {
          const phrase = getPhraseWithFont(rowIndex * phrasesPerRow + phraseIndex);
          return (
            <span
              key={phraseIndex}
              style={{ fontFamily: `'${phrase.font}', cursive` }}
            >
              {phrase.text + ', '}
            </span>
          );
        })}
      </div>
    ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <div 
          className="record-container absolute"
          style={{ 
            width: '90vw',
            maxWidth: '800px',
            height: 'auto',
            aspectRatio: '1 / 1',
            zIndex: 10
          }}
        >
          <div className="record-spin">
            <img
              src="/aewamain.webp"
              alt="aewa main"
              className="w-full h-full object-contain"
              loading="eager"
              fetchPriority="high"
              width="800"
              height="800"
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-9xl font-gorditas relative" style={{ zIndex: 20 }}>æwa</h1>
      </div>
    </section>
  );
}
