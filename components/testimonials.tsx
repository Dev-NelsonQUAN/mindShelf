'use client'

import { Star, Quote } from 'lucide-react'

const REVIEWS = [
  {
    name: "Pastor Sunday B.",
    role: "Church Coordinator",
    text: "Mindshelf handled our bulk Bible order for the youth ministry flawlessly. The packaging was top-notch and delivery was faster than expected!",
  },
  {
    name: "Q. Ade. Nelson",
    role: "Regular Reader",
    text: "I love the personalized gift wrapping. I sent a book to my friend in Abuja and she was so impressed by the presentation. Definitely my go-to bookstore.",
  },
  {
    name: "School Admin",
    role: "Secondary School",
    text: "The book recommendations provided by Mindshelf helped us update our library with modern, high-value titles. Excellent wholesale pricing too.",
  }
]

export function Testimonials() {
  return (
    <section className="py-14 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xl md:text-4xl font-serif font-bold text-[#7000A5] mb-4">What Our Readers Say</h2>
          <div className="flex justify-center gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-3 md:w-5 h-3 md:h-5 fill-purple-300 text-purple-300" />)}
          </div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          {REVIEWS.map((review, i) => (
            <div key={i} className="bg-white p-4 md:p-8 rounded-xl md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all relative group">
              <Quote className="absolute top-6 right-8 w-12 h-12 text-purple-50 group-hover:text-purple-100 transition-colors" />
              <p className="text-gray-600 italic mb-4 md:mb-8 relative z-10 max-sm:text-[12px]">"{review.text}"</p>
              <div>
                <h4 className="font-black text-gray-900 max-sm:text-[14px]">{review.name}</h4>
                <p className="text-[12px] md:text-xs font-bold text-[#7000A5] uppercase tracking-widest">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}