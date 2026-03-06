import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Coffee, Users, Flame } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Coffee, label: 'PROJECTS', value: '50+', color: '#d4af37' },
    { icon: Users, label: 'CLIENTS', value: '30+', color: '#b8956a' },
    { icon: Award, label: 'EXPERIENCE', value: '5+ YRS', color: '#8b7355' },
    { icon: Flame, label: 'PASSION', value: 'HIGH', color: '#ff6b35' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#0d0d0d] relative overflow-hidden">
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-8 h-8 bg-[#3d3527] opacity-50"></div>
      <div className="absolute top-0 right-0 w-8 h-8 bg-[#3d3527] opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 bg-[#3d3527] opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#3d3527] opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="mb-6 inline-block px-4 py-2 bg-[#1a1a1a] border-4 border-[#3d3527] pixel-corners">
                <span className="pixel-font text-xs text-[#b8956a]">01</span>
              </div>
              
              <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl tracking-tight pixel-font text-[#d4af37] leading-relaxed">
                ABOUT ME
              </h2>
              
              <p className="mb-6 text-[#c4b5a0] border-l-4 border-[#d4af37] pl-4">
                I'm a passionate designer and developer dedicated to creating beautiful, 
                functional digital experiences. With over 5 years in the industry, I've 
                collaborated with amazing clients to bring their visions to life.
              </p>
              
              <p className="mb-8 text-[#c4b5a0] border-l-4 border-[#8b7355] pl-4">
                My approach combines creative design thinking with technical expertise to deliver 
                solutions that not only look great but perform exceptionally. I believe in clean code, 
                pixel-perfect design, and user-centered development.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center bg-[#1a1a1a] p-4 border-4 pixel-corners transition-all hover:scale-105 hover:border-opacity-100"
                    style={{ borderColor: `${stat.color}80` }}
                  >
                    <div className="mb-2 flex justify-center">
                      <stat.icon style={{ color: stat.color }} size={24} />
                    </div>
                    <div className="mb-1 pixel-font text-sm" style={{ color: stat.color }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#6b6356]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="aspect-square bg-[#1a1a1a] border-4 border-[#3d3527] pixel-corners overflow-hidden relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1755541516450-644adb257ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MTg1MTI2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Workspace"
                    className="w-full h-full object-cover opacity-60"
                    style={{ imageRendering: 'pixelated', filter: 'sepia(0.3) contrast(1.2)' }}
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d0d0d] opacity-40"></div>
                  {/* Scanline effect */}
                  <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 175, 55, 0.03) 2px, rgba(212, 175, 55, 0.03) 4px)'
                  }}></div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#3d3527] border-4 border-[#d4af37] pixel-corners"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
