import React from 'react'
import { ImageWithFallback } from '../../components/figma/ImageWithFallback'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../components/ui/carousel'

const Projects = () => {
  const projects = [
    {
      title: 'E-COMMERCE',
      subtitle: 'Online Store Platform',
      description: 'A modern e-commerce solution with seamless checkout and inventory management.',
      image:
        '/images/Tea Plantation.jpg',
      tags: ['React', 'Tailwind CSS', 'JavaScript', 'Supabase', 'Vercel'],
      color: '#d4af37',
      liveUrl: 'https://primeempire.kz/',
      githubUrl: 'https://github.com/LegendaryLeg/PrimeEmpire',
    },
    {
      title: 'COMPUTER VISION',
      subtitle: 'YOLOv8 Object Detection',
      description: 'Real-time foreign object detection solution for conveyor belt in industrial settings.',
      image:
        '/images/YOLOv8.jpg',
      tags: ['Python', 'Scikit-learn', 'PyTorch', 'OpenCV', 'Hugging Face', 'NumPy', 'Pandas', 'YOLOv8'],
      color: '#b8956a',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'FITNESS APP',
      subtitle: 'Mobile Application',
      description: 'Cross-platform fitness tracking application with workout plans and social features.',
      image:
        'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxODYyMzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
      color: '#8b7355',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'ANALYTICS DASHBOARD',
      subtitle: 'Data Visualization',
      description: 'Real-time analytics dashboard for marketing teams with comprehensive insights.',
      image:
        'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTgyNDY2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Vue.js', 'D3.js', 'PostgreSQL', 'AWS'],
      color: '#ff6b35',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'RESTAURANT WEBSITE',
      subtitle: 'Web Application',
      description: 'Beautiful restaurant website with online ordering and reservation system.',
      image:
        'https://images.unsplash.com/photo-1708335583165-57aa131a4969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZXxlbnwxfHx8fDE3NjE3NzgwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Next.js', 'Tailwind', 'Sanity', 'Vercel'],
      color: '#d4af37',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'PORTFOLIO BUILDER',
      subtitle: 'SaaS Platform',
      description: 'No-code portfolio builder helping creatives showcase their work beautifully.',
      image:
        'https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MTc5Nzk5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'GraphQL', 'Prisma', 'Cloudinary'],
      color: '#b8956a',
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute top-10 left-10 w-2 h-2 bg-[#ff6b35] animate-pulse flicker"></div>
      <div className="absolute top-20 right-20 w-2 h-2 bg-[#d4af37] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-[#ff6b35] animate-pulse flicker" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4 inline-block px-4 py-2 bg-[#1a1a1a] border-4 border-[#3d3527] pixel-corners">
              <span className="pixel-font text-xs text-[#b8956a]">03</span>
            </div>
            
            <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl tracking-tight pixel-font text-[#d4af37] leading-relaxed">
              PROJECTS
            </h2>
            
            <p className="text-lg text-[#c4b5a0] max-w-2xl mx-auto mb-8">
              Recent work I'm proud of
            </p>
          </div>

          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div
                    className="group bg-[#1a1a1a] pixel-corners overflow-hidden border-4 hover:scale-105 transition-all relative h-full"
                    style={{ borderColor: `${project.color}80` }}
                  >
                    <div className="aspect-video overflow-hidden bg-[#0d0d0d] relative">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                        style={{ imageRendering: 'pixelated', filter: 'sepia(0.3) contrast(1.2)' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent opacity-60"></div>
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.4) 2px, rgba(0, 0, 0, 0.4) 4px)',
                        }}
                      ></div>
                      
                      <div
                        className="absolute top-2 right-2 flex items-center gap-1 bg-[#0d0d0d] px-2 py-1 border-2 pixel-corners"
                        style={{ borderColor: project.color }}
                      >
                        <span className="text-xs pixel-font" style={{ color: project.color }}>
                          NEW
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="mb-1 pixel-font text-sm" style={{ color: project.color }}>
                        {project.title}
                      </h3>
                      <div className="mb-3 text-xs text-[#6b6356]">{project.subtitle}</div>
                      <p className="mb-4 text-sm text-[#c4b5a0]">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-[#0d0d0d] border-2 pixel-corners text-xs text-[#c4b5a0]"
                            style={{ borderColor: `${project.color}30` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-2 pixel-corners bg-transparent hover:bg-[#1a1a1a] text-[#c4b5a0]"
                          style={{ borderColor: `${project.color}80` }}
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={14} className="mr-2" />
                            VIEW
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-2 pixel-corners bg-transparent hover:bg-[#1a1a1a]"
                          style={{ borderColor: `${project.color}80`, color: project.color }}
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github size={16} />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 p-3 bg-[#1a1a1a] border-4 border-[#3d3527] pixel-corners text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0d0d0d] transition-all">
                <ChevronLeft size={24} />
              </CarouselPrevious>
              <CarouselNext className="static translate-y-0 p-3 bg-[#1a1a1a] border-4 border-[#3d3527] pixel-corners text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0d0d0d] transition-all">
                <ChevronRight size={24} />
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Projects
