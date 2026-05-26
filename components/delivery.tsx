"use client";

import { Bike, MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Delivery() {
  return (
    <section
      id="delivery"
      className="py-16 md:py-24 px-6 lg:px-8 bg-[#7000A5] relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-2 md:px-4 py-1 md:py-2 rounded-full bg-purple-200 text-black font-black text-[8px] md:text-xs uppercase tracking-widest mb-4 shadow-lg animate-pulse">
            <Bike className="w-2 md:w-4 h-2 md:h-4" />
            Nationwide Shipping
          </div>
          <h2 className="text-2xl md:text-6xl font-serif font-bold text-white mb-2 md:mb-6">
            Delivery <span className="text-purple-300">Nationwide</span>
          </h2>
          <p className="text-purple-100 text-sm md:text-xl max-w-2xl mx-auto opacity-90">
            From our bookshelf to your doorstep. We ensure your valuable
            contents reach you safely and quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          <Card className="group bg-white backdrop-blur-md border-white/20 p-4 md:p-8 rounded-4xl hover:bg-white/10 transition-all duration-500 cursor-default max-sm:gap-2">
            <div className="w-6 md:w-16 h-6 md:h-16 rounded-[12px] md:rounded-2xl bg-purple-300 flex items-center justify-center mb-2 md:mb-6 group-hover:scale-110 transition-transform">
              <Bike className="w-4 md:w-8 h-4 md:h-8 text-black" />
            </div>
            <h3 className="text-sm md:text-2xl font-bold group-hover:text-white text-[#7000A5] mb-0 md:mb-3 transition-colors">
              Fast Dispatch
            </h3>
            <p className="group-hover:text-purple-100 text-gray-600 transition-colors leading-relaxed max-sm:text-[11px]">
              Our efficient motorbike dispatch system ensures your books leave
              our warehouse within hours of ordering.
            </p>
          </Card>

          <Card className="group bg-white hover:bg-white/10 backdrop-blur-md border-white/20 p-4 md:p-8 rounded-4xl transition-all duration-500 cursor-default max-sm:gap-2">
            <div className="w-6 md:w-16 h-6 md:h-16 rounded-[12px] md:rounded-2xl bg-purple-300 flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="w-3 md:w-8 h-3 md:h-8 text-black" />
            </div>
            <h3 className="text-sm md:text-2xl font-bold group-hover:text-white text-[#7000A5] mb-0 md:mb-3 transition-colors">
              Every State
            </h3>
            <p className="group-hover:text-purple-100 text-gray-600 transition-colors leading-relaxed max-sm:text-[11px]">
              No matter where you are in the country, Mindshelf delivers. We
              bridge the gap between you and great knowledge.
            </p>
          </Card>

          <Card className="group hover:bg-white/10 backdrop-blur-md border-white/20 p-4 md:p-8 rounded-4xl bg-white transition-all duration-500 cursor-default max-sm:gap-2">
            <div className="w-6 md:w-16 h-6 md:h-16 rounded-2xl bg-purple-300 flex items-center justify-center mb-2 md:mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-4 md:w-8 h-4 md:h-8 text-black" />
            </div>
            <h3 className="text-sm md:text-2xl font-bold group-hover:text-white text-[#7000A5] mb-0 md:mb-3 transition-colors">
              Safe Arrival
            </h3>
            <p className="group-hover:text-purple-100 text-gray-600 transition-colors leading-relaxed max-sm:text-[11px]">
              We take pride in our packaging. Your books and Bibles arrive in
              perfect, pristine condition, ready for your shelf.
            </p>
          </Card>
        </div>

        <div className="mt-6 md:mt-16 text-center">
          <a
            href="https://wa.me/2348142846244?text=Hello Mindshelf, I'd like to track my order status."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-38 md:w-auto bg-white text-[#7000A5] hover:bg-purple-300 hover:text-black font-black px-2 md:px-10 py-2 md:py-5 rounded-full transition-all items-center justify-center gap-3 shadow-xl active:scale-95 cursor-pointer max-sm:text-[8px] "
          >
            {/* max-sm:w-10 */}
            Track My Order Status
            <ArrowRight className="w-2 md:w-5 h-2 md:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
