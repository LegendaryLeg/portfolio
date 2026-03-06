import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] overflow-hidden"
    >
      {/* Pixel grid background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(#3d3527 1px, transparent 1px),
          linear-gradient(90deg, #3d3527 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}></div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.6) 100%)'
      }}></div>
      
      {/* Animated particles */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-[#ff6b35] animate-pulse flicker"></div>
      <div className="absolute top-40 right-40 w-2 h-2 bg-[#d4af37] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-40 left-40 w-2 h-2 bg-[#ff6b35] animate-pulse flicker" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-[#d4af37] animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] border-4 border-[#3d3527] pixel-corners">
            <span className="text-sm text-[#b8956a] pixel-font">AVAILABLE FOR WORK</span>
          </div>
          
          <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight pixel-font leading-relaxed">
            <span className="text-[#6b6356]">{'> '}</span>
            <span className="text-[#d4af37] gold-text">YOUR NAME</span>
          </h1>
          
          <div className="mb-4 pixel-font text-base sm:text-lg md:text-xl text-[#b8956a]">
            <span className="inline-block animate-pulse">█</span> FULL STACK DEVELOPER <span className="inline-block animate-pulse">█</span>
          </div>
          
          <p className="mb-12 text-base sm:text-lg text-[#c4b5a0] max-w-2xl mx-auto border-l-4 border-[#d4af37] pl-4">
            Crafting exceptional digital experiences with clean code, thoughtful design, and attention to detail.
          </p>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#d4af37] hover:text-[#b8956a] transition-colors animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}
