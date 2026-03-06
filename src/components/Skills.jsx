import React from 'react'
import { BrainCog , Cpu, MonitorSmartphone , Zap } from 'lucide-react'

const Skills = () => {
  const skills = [
    {
      icon: BrainCog,
      title: 'MACHINE LEARNING & AI',
      description: 'Building predictive models, computer vision systems, and intelligent applications using real-world datasets.',
      technologies: ['Python', 'PyTorch', 'Scikit-learn', 'OpenCV', 'YOLOv8', 'Pandas', 'NumPy', 'Hugging Face'],
      color: '#d4af37',
    },
    {
      icon: Cpu ,
      title: 'BACKEND DEVELOPMENT',
      description: 'Designing and deploying scalable backend systems and APIs for ML-powered and web applications.',
      technologies: ['Python', 'Flask', 'Java', 'C / C++', 'SQL', 'MySQL', 'REST APIs'],
      color: '#b8956a',
    },
    {
      icon: MonitorSmartphone,
      title: 'WEB DEVELOPMENT',
      description: 'Building responsive and functional web applications with integrated backend and machine learning systems.',
      technologies: ['HTML5', 'CSS', 'JavaScript', 'Flask', 'API Integration'],
      color: '#8b7355',
    },
    {
      icon: Zap,
      title: 'DATA ENGINEERING & OPTIMIZATION',
      description: 'Processing, analyzing, and optimizing large datasets to improve model performance and system efficiency.',
      technologies: ['Pandas', 'NumPy', 'Feature Engineering', 'Model Evaluation', 'Performance Tuning', 'Data Cleaning'],
      color: '#ff6b35',
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
          linear-gradient(45deg, #3d3527 25%, transparent 25%),
          linear-gradient(-45deg, #3d3527 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #3d3527 75%),
          linear-gradient(-45deg, transparent 75%, #3d3527 75%)
        `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
        }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4 inline-block px-4 py-2 bg-[#0d0d0d] border-4 border-[#3d3527] pixel-corners">
              <span className="pixel-font text-xs text-[#b8956a]">02</span>
            </div>
            
            <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl tracking-tight pixel-font text-[#d4af37] leading-relaxed">
              SKILLS
            </h2>
            
            <p className="text-lg text-[#c4b5a0] max-w-2xl mx-auto">
              A diverse skill set to bring your ideas to life
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#0d0d0d] border-4 pixel-corners p-6 hover:scale-105 transition-all group relative"
                style={{ borderColor: `${skill.color}80` }}
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-current opacity-50" style={{ color: skill.color }}></div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-current opacity-50" style={{ color: skill.color }}></div>
                
                <div 
                  className="mb-4 w-12 h-12 border-4 pixel-corners flex items-center justify-center"
                  style={{ borderColor: skill.color, backgroundColor: `${skill.color}10` }}
                >
                  <skill.icon style={{ color: skill.color }} size={24} />
                </div>
                
                <h3 className="mb-3 pixel-font text-sm" style={{ color: skill.color }}>
                  {skill.title}
                </h3>
                
                <p className="mb-4 text-sm text-[#c4b5a0]">{skill.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#1a1a1a] border-2 pixel-corners text-xs text-[#c4b5a0]"
                      style={{ borderColor: `${skill.color}40` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
