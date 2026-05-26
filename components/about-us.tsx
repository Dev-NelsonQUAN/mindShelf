'use client'

import { Target, Heart, Sparkles, CheckCircle2 } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-14 md:py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-10 border-white aspect-4/5 sm:aspect-square lg:aspect-4/5 bg-purple-50">
              <img 
                src="/aboutSectionBig.avif"
                alt="Modern reading environment" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#7000A5]/20 to-transparent" />
            </div>

            <div className="absolute -top-6 -left-6 w-full h-full bg-purple-50 rounded-[3rem] -z-10 border border-purple-100" />
            
            <div className="absolute -bottom-8 -right-8 w-40 h-40 md:w-56 md:h-56 rounded-4xl md:rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl z-20 hidden sm:block bg-purple-100">
               <img 
                src="/aboutSectionSmall.avif"
                alt="Vibrant modern book collection" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-10 -right-4 bg-[#7000A5] text-white p-4 rounded-2xl shadow-xl z-30 flex items-center gap-3 animate-pulse">
                <Sparkles className="w-2 md:w-5 h-2 md:h-5 text-purple-200" />
                <span className="text-[7px] md:text-xs font-black uppercase tracking-widest">The Mind Reset</span>
            </div>
          </div>

          <div className="space-y-4 md:space-y-10 order-1 lg:order-2">
            <div className="space-y-3 md:space-y-6">
              <div className="inline-flex items-center gap-2 text-[#7000A5] font-black text-xs uppercase tracking-widest">
                <div className="w-8 h-0.5 bg-[#7000A5]" />
                Our Philosophy
              </div>
              
              <h2 className="text-2xl md:text-6xl font-serif font-bold text-[#7000A5] leading-tight">
                Our Mission: <br />
                <span className="italic text-gray-900 font-medium">The Mind Reset</span>
              </h2>
              
              <p className="text-sm md:text-xl text-gray-600 leading-relaxed">
                At <span className="font-bold text-[#7000A5]">Mindshelf</span>, we believe that the right book doesn't just entertain, it transforms. Our curated selection of Bibles and literature is designed to reset your mind and inspire spiritual and intellectual growth.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="flex gap-6 group cursor-default">
                <div className="w-6 md:w-14 h-6 md:h-14 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0 group-hover:bg-[#7000A5] transition-colors duration-300 border border-purple-100">
                  <Target className="w-3 md:w-7 h-3 md:h-7 text-[#7000A5] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-xl text-gray-900 mb-0 md:mb-1">Curated Quality</h4>
                  <p className="text-gray-500 max-sm:text-[12px] leading-relaxed">We hand-pick titles that offer genuine value. No fillers, only vital content that helps you grow.</p>
                </div>
              </div>

              <div className="flex gap-6 group cursor-default">
                <div className="w-6 md:w-14 h-6 md:h-14 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0 group-hover:bg-[#7000A5] transition-colors duration-300 border border-purple-100">
                  <Heart className="w-3 md:w-7 h-3 md:h-7 text-[#7000A5] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-xl text-gray-900 mb-0 md:mb-1">Service with Passion</h4>
                  <p className="text-gray-500 leading-relaxed max-sm:text-[12px]">Whether it's a single Bible or a bulk order for a school, we serve with excellence and modern efficiency.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 md:pt-4 flex items-center gap-3 text-[12px] md:text-sm font-bold text-gray-400 uppercase tracking-tighter">
                <CheckCircle2 className="w-2 md:w-5 h-2 md:h-5 text-[#7000A5]" />
                We sell wholesale and retail nationwide
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}