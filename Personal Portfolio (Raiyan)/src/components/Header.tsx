import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0d0d0d]/95 backdrop-blur-sm border-b-4 border-[#3d3527]' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="pixel-font text-sm md:text-base tracking-tight transition-colors hover:text-[#d4af37] text-[#b8956a]"
          >
            {'< PORTFOLIO />'}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <Button
              onClick={() => scrollToSection('about')}
              variant="outline"
              className="bg-transparent hover:bg-[#d4af37] hover:text-[#0d0d0d] text-[#b8956a] border-2 border-[#3d3527] hover:border-[#d4af37] pixel-corners transition-all"
            >
              ABOUT
            </Button>
            <Button
              onClick={() => scrollToSection('skills')}
              variant="outline"
              className="bg-transparent hover:bg-[#d4af37] hover:text-[#0d0d0d] text-[#b8956a] border-2 border-[#3d3527] hover:border-[#d4af37] pixel-corners transition-all"
            >
              SKILLS
            </Button>
            <Button
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="bg-transparent hover:bg-[#d4af37] hover:text-[#0d0d0d] text-[#b8956a] border-2 border-[#3d3527] hover:border-[#d4af37] pixel-corners transition-all"
            >
              PROJECTS
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="default"
              className="bg-[#d4af37] hover:bg-[#b8956a] text-[#0d0d0d] border-2 border-[#d4af37] hover:border-[#b8956a] pixel-corners transition-all gold-glow"
            >
              CONTACT
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#d4af37] hover:text-[#b8956a]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t-4 border-[#3d3527]">
            <div className="flex flex-col gap-4">
              <Button
                onClick={() => scrollToSection('about')}
                variant="outline"
                className="bg-transparent hover:bg-[#d4af37] hover:text-[#0d0d0d] text-[#b8956a] border-2 border-[#3d3527] hover:border-[#d4af37] pixel-corners w-full"
              >
                ABOUT
              </Button>
              <Button
                onClick={() => scrollToSection('skills')}
                variant="outline"
                className="bg-transparent hover:bg-[#d4af37] hover:text-[#0d0d0d] text-[#b8956a] border-2 border-[#3d3527] hover:border-[#d4af37] pixel-corners w-full"
              >
                SKILLS
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                variant="outline"
                className="bg-transparent hover:bg-[#d4af37] hover:text-[#0d0d0d] text-[#b8956a] border-2 border-[#3d3527] hover:border-[#d4af37] pixel-corners w-full"
              >
                PROJECTS
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="default"
                className="bg-[#d4af37] hover:bg-[#b8956a] text-[#0d0d0d] border-2 border-[#d4af37] hover:border-[#b8956a] pixel-corners w-full"
              >
                CONTACT
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
