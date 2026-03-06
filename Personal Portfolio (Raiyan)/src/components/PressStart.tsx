import { useState } from 'react';
import { Swords } from 'lucide-react';

interface PressStartProps {
  onStart: () => void;
}

export function PressStart({ onStart }: PressStartProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handleStart = () => {
    setIsPressed(true);
    setTimeout(() => {
      onStart();
    }, 800);
  };

  return (
    <div className={`fixed inset-0 bg-[#0d0d0d] flex items-center justify-center z-50 transition-opacity duration-800 ${isPressed ? 'opacity-0' : 'opacity-100'}`}>
      {/* Pixel grid background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(#3d3527 1px, transparent 1px),
          linear-gradient(90deg, #3d3527 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}></div>

      {/* Vignette effect */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)'
      }}></div>

      <div className="relative z-10 text-center">
        {/* Title */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Swords className="text-[#d4af37]" size={48} />
          </div>
          <h1 className="pixel-font text-3xl sm:text-4xl md:text-6xl mb-4 text-[#d4af37] gold-text leading-relaxed">
            PORTFOLIO
          </h1>
          <div className="pixel-font text-sm sm:text-base text-[#b8956a] mb-2">
            DEVELOPER & DESIGNER
          </div>
        </div>

        {/* Press Start Button */}
        <button
          onClick={handleStart}
          className="group relative px-8 py-4 bg-transparent border-4 border-[#d4af37] pixel-corners text-[#d4af37] pixel-font text-sm sm:text-base hover:bg-[#d4af37] hover:text-[#0d0d0d] transition-all duration-300 animate-pulse hover:animate-none gold-glow"
        >
          <span className="relative z-10">PRESS START</span>
          
          {/* Decorative corners */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-4 border-l-4 border-[#b8956a]"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-4 border-r-4 border-[#b8956a]"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-4 border-l-4 border-[#b8956a]"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-4 border-r-4 border-[#b8956a]"></div>
        </button>

        {/* Subtitle */}
        <p className="mt-8 text-sm text-[#6b6356] pixel-font">
          {'>'} CLICK TO ENTER {'<'}
        </p>
      </div>

      {/* Animated flame particles */}
      <div className="absolute bottom-10 left-10 w-2 h-2 bg-[#ff6b35] animate-pulse flicker"></div>
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-[#d4af37] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-20 left-20 w-2 h-2 bg-[#ff6b35] animate-pulse flicker" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-10 right-10 w-2 h-2 bg-[#d4af37] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
}
