'use client'

import { BookOpen, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/2348142846244', '_blank')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border border-white/20 shadow-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8" style={{ color: '#7000A5' }} />
            <span className="text-xl font-bold text-gray-900">Mindshelf</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium transition">
              Services
            </a>
            <a href="#delivery" className="text-gray-700 hover:text-gray-900 font-medium transition">
              Delivery
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition">
              About
            </a>
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleWhatsApp}
            className="bg-white text-white hover:bg-opacity-90"
            style={{ backgroundColor: '#7000A5' }}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact
          </Button>
        </div>
      </div>
    </nav>
  )
}
