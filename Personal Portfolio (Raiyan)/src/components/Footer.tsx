import { Github, Linkedin, Mail, Twitter, Flame } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: '#d4af37' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: '#b8956a' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: '#8b7355' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email', color: '#ff6b35' },
  ];

  return (
    <footer className="bg-[#0d0d0d] border-t-4 border-[#3d3527]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="text-center md:text-left">
              <div className="pixel-font text-sm mb-2 text-[#d4af37]">{'< PORTFOLIO />'}</div>
              <p className="text-sm text-[#6b6356]">
                Crafting digital experiences since {currentYear - 5}
              </p>
            </div>

            <div className="flex items-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6b6356] hover:text-[#c4b5a0] transition-all hover:scale-110 p-2 border-2 border-transparent hover:border-current pixel-corners"
                  style={{ '--hover-color': social.color } as React.CSSProperties}
                  aria-label={social.label}
                  onMouseEnter={(e) => e.currentTarget.style.color = social.color}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t-2 border-[#2a2620] text-center text-sm text-[#6b6356] flex items-center justify-center gap-2">
            <span>© {currentYear} Made with</span>
            <Flame size={14} className="text-[#ff6b35] fill-current flicker" />
            <span>and dedication</span>
          </div>
          
          {/* Pixel decoration */}
          <div className="mt-6 flex justify-center gap-2">
            <div className="w-3 h-3 bg-[#d4af37]"></div>
            <div className="w-3 h-3 bg-[#b8956a]"></div>
            <div className="w-3 h-3 bg-[#8b7355]"></div>
            <div className="w-3 h-3 bg-[#ff6b35]"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
