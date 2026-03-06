import React from 'react'
import { ImageWithFallback } from '../../components/figma/ImageWithFallback'
import { Award, Coffee, Users, Flame } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Coffee, label: 'PROJECTS', value: '20+', color: '#d4af37' },
    { icon: Users, label: 'CLIENTS', value: '5+', color: '#b8956a' },
    { icon: Award, label: 'EXPERIENCE', value: '5 YEARS', color: '#8b7355' },
    { icon: Flame, label: 'PASSION', value: 'HIGH', color: '#ff6b35' },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-[#0d0d0d] relative overflow-hidden">
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
                I am a Software Developer with a strong focus on Machine Learning and intelligent systems.
                I graduated with distinction in Computing Science and have experience building real-world
                AI solutions — including industrial computer vision systems, phishing detection models
                trained on 170,000+ websites, and ML-powered signature recognition applications.
             </p>
              
              <p className="mb-8 text-[#c4b5a0] border-l-4 border-[#8b7355] pl-4">
                Beyond model development, I enjoy deploying scalable systems into 
                functional web applications using modern backend and frontend 
                technologies. I work across the full pipeline — from data 
                preprocessing and training to deployment and user-facing implementation.
              </p>

              <p className="mb-8 text-[#c4b5a0] border-l-4 border-[#ff6b35] pl-4">
                My goal is to build practical, production-ready systems that combine 
                strong software engineering principles with applied machine learning.
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
                    src="images/hike 2024.jpg"
                    alt="Me"
                    className="w-full h-full object-cover opacity-60"
                    style={{ imageRendering: 'pixelated', filter: 'sepia(0.3) contrast(1.2)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d0d0d] opacity-40"></div>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 175, 55, 0.03) 2px, rgba(212, 175, 55, 0.03) 4px)',
                    }}
                  ></div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#3d3527] border-4 border-[#d4af37] pixel-corners"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
