'use client'

import { BookOpen, Star, Sparkles, Truck, Gift, CheckCircle2 } from 'lucide-react'
import { Card } from '@/components/ui/card'

const SERVICES = [
  {
    icon: BookOpen,
    title: 'Sales of Books & Bibles',
    description: 'Explore our extensive collection of books and Bibles sourced from trusted publishers worldwide.',
  },
  {
    icon: Star,
    title: 'Book Recommendations',
    description: 'Get personalized book recommendations tailored to your interests and reading preferences.',
  },
  {
    icon: Sparkles,
    title: 'Special Orders',
    description: 'Request specific titles or rare editions. We help you find exactly what you\'re looking for.',
  },
  {
    icon: Truck,
    title: 'Bulk Supply for Churches & Schools',
    description: 'Special pricing for institutions. Perfect for libraries, organizations, and ministry growth.',
  },
  {
    icon: Gift,
    title: 'Gift Packaging & Personalization',
    description: 'Make it special. We offer professional gift wrapping and custom personalization for your loved ones.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-18 md:py-24 px-6 md:px-6 lg:px-8 bg-[#FDFCFE] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
           <path d="M0,50 Q25,40 50,50 T100,50" fill="none" stroke="#7000A5" strokeWidth="0.5" />
           <path d="M0,60 Q25,50 50,60 T100,60" fill="none" stroke="#7000A5" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-8 md:mb-16 text-center">
          <div className="bg-[#7000A5] text-white px-4 md:px-10 py-1.5 md:py-3 rounded-tr-4xl rounded-bl-4xl shadow-lg mb-4 md:mb-8">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight">
              Our Services
            </h2>
          </div>
          
          <p className="text-xs md:text-xl font-serif text-[#7000A5] font-semibold mb-2">
            "Mind reset through valuable contents"
          </p>
          <div className="flex items-center gap-2 text-gray-500 font-bold uppercase tracking-tighter text-[8px] md:text-sm">
            <CheckCircle2 className="w-3 md:w-4 h-3 md:h-4 text-green-500" />
            We sell wholesale and retail...
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            const isPurpleCard = index % 2 === 1 
            
            return (
              <Card
                key={index}
                className={`group border-none shadow-sm hover:shadow-xl transition-all gap-1 md:gap-6 duration-300 p-5 md:p-8 rounded-xl md:rounded-3xl ${
                  isPurpleCard ? 'bg-[#7000A5] text-white' : 'bg-white'
                }`}
              >
                <div
                  className={`w-7 md:w-14 h-7 md:h-14 rounded-sm md:rounded-2xl flex items-center justify-center mb-1 md:mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${
                    isPurpleCard ? 'bg-white/20' : 'bg-purple-50'
                  }`}
                >
                  <Icon className={`w-3 md:w-7 h-3 md:h-7 ${isPurpleCard ? 'text-white' : 'text-[#7000A5]'}`} />
                </div>
                
                <h3 className={`text-sm md:text-xl font-bold mb-1 md:mb-3 ${isPurpleCard ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                
                <p className={`leading-relaxed text-[12px] md:text-sm ${isPurpleCard ? 'text-purple-100' : 'text-gray-600'}`}>
                  {service.description}
                </p>
              </Card>
            )
          })}
        </div>

        <div className="mt-8 md:mt-16 p-3 md:p-8 rounded-4xl bg-purple-400/10 border-2 border-dashed border-purple-500 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="bg-purple-400 p-1 md:p-3 rounded-full">
              <Truck className="w-3 md:w-6 h-3 md:h-6 text-black" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm md:text-lg leading-tight">Need Bulk Supply?</h4>
              <p className="text-gray-600  max-sm:text-[10px]">Special pricing for Churches, Schools & Schools.</p>
            </div>
          </div>
          <button 
            onClick={() => window.open('https://wa.me/2348142846244', '_blank')}
            className="bg-black text-white px-4 md:px-8 py-1 md:py-3 rounded-full font-bold hover:scale-105 transition-transform cursor-pointer max-sm:text-[10px]"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  )
}