import React, { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `${formData.message}\n\n---\nFrom: ${formData.name} <${formData.email}>`
    )
    window.location.href = `mailto:raiyan.mokhd@gmail.com?subject=${subject}&body=${body}`
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'EMAIL',
      content: 'raiyan.mokhd@gmail.com',
      href: 'mailto:raiyan.mokhd@gmail.com',
      color: '#d4af37',
    },
    {
      icon: Phone,
      title: 'PHONE',
      content: '+7 (707) 85-98-058',
      href: 'tel:+77078598058',
      color: '#b8956a',
    },
    {
      icon: MapPin,
      title: 'LOCATION',
      content: 'Almaty, Kazakhstan',
      href: '#',
      color: '#8b7355',
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
          repeating-linear-gradient(0deg, #3d3527, #3d3527 1px, transparent 1px, transparent 10px),
          repeating-linear-gradient(90deg, #3d3527, #3d3527 1px, transparent 1px, transparent 10px)
        `,
        }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4 inline-block px-4 py-2 bg-[#0d0d0d] border-4 border-[#3d3527] pixel-corners">
              <span className="pixel-font text-xs text-[#b8956a]">04</span>
            </div>
            
            <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl tracking-tight pixel-font text-[#d4af37] leading-relaxed">
              GET IN TOUCH
            </h2>
            
            <p className="text-lg text-[#c4b5a0] max-w-2xl mx-auto">
              Let's work together on your next project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="mb-6 pixel-font text-[#d4af37]">CONTACT INFO</h3>
              
              <p className="mb-8 text-[#c4b5a0] border-l-4 border-[#d4af37] pl-4">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div 
                      className="w-12 h-12 bg-[#0d0d0d] border-4 pixel-corners flex items-center justify-center flex-shrink-0 group-hover:gold-glow transition-all"
                      style={{ borderColor: `${info.color}80` }}
                    >
                      <info.icon style={{ color: info.color }} size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-[#6b6356] mb-1 pixel-font">{info.title}</div>
                      <div className="text-[#c4b5a0]">{info.content}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-[#0d0d0d] pixel-corners p-8 border-4 border-[#3d3527]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-[#d4af37] pixel-font text-xs">
                    NAME
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[#1a1a1a] border-2 border-[#3d3527] pixel-corners text-[#c4b5a0] focus:border-[#d4af37] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-[#b8956a] pixel-font text-xs">
                    EMAIL
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#1a1a1a] border-2 border-[#3d3527] pixel-corners text-[#c4b5a0] focus:border-[#b8956a] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-[#8b7355] pixel-font text-xs">
                    MESSAGE
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-[#1a1a1a] border-2 border-[#3d3527] pixel-corners text-[#c4b5a0] focus:border-[#8b7355] transition-colors resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#d4af37] hover:bg-[#b8956a] text-[#0d0d0d] border-4 border-[#d4af37] hover:border-[#b8956a] pixel-corners gold-glow transition-all"
                >
                  <Send size={16} className="mr-2" />
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
