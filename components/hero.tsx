"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Truck, BookCheck, Zap, Sparkles } from "lucide-react";

export function Hero() {
  const WHATSAPP_URL = "https://wa.me/2348142846244";

  return (
    <section className="relative min-h-screen pt-20 md:pt-28 pb-10 md:pb-20 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-150 h-150 bg-purple-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-125 h-125 bg-indigo-50 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          
          <div className="text-center lg:text-left order-1 relative z-20">
            <div className="inline-flex items-center gap-2 px-2 md:px-4 py-0.5 md:py-1.5 rounded-full bg-purple-100 text-[#7000A5] text-[9px] md:text-xs font-black mb-4 md:mb-8 tracking-widest shadow-sm border border-purple-200">
              <Zap className="w-2 md:w-4 h-2 md:h-4 fill-current" />
              <span>WHOLESALE & RETAIL BOOKSTORE</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#7000A5] leading-[0.85] mb-6">
              Read.<br />Grow.<br />Inspire.
            </h1>

            <p className="text-xs md:text-2xl font-medium text-gray-800 italic mb-2 md:mb-6">
              “Mind reset through valuable contents”
            </p>

            <p className="text-xs md:text-lg text-gray-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Sales of Books & Bibles, Special Orders, and Bulk Supply for
              Churches & Schools. Curating the most vital titles for your
              transformation and spiritual growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#7000A5] hover:bg-[#5a0084] text-white font-bold px-3 md:px-10 py-3 md:py-5 text-sm md:text-lg rounded-2xl shadow-xl shadow-purple-200 transition-all hover:-translate-y-1 active:scale-95"
              >
                <MessageCircle className="w-3 md:w-6 h-3 md:h-6 mr-3" />
                Chat on WhatsApp
              </a>

              <a
                href="#catalog"
                className="inline-flex items-center justify-center border-2 border-purple-100 text-[#7000A5] hover:bg-purple-50 font-bold px-3 md:px-10 py-3 md:py-5 text-sm md:text-lg rounded-2xl transition-all"
              >
                Explore Catalog
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 opacity-80">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-purple-50 rounded-lg border border-purple-100">
                  <Truck className="w-5 h-5 text-[#7000A5]" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  Nationwide Delivery
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-purple-50 rounded-lg border border-purple-100">
                  <BookCheck className="w-5 h-5 text-[#7000A5]" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  Special Orders
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center order-1 lg:order-2 py-10 lg:py-0">
            <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-40 md:w-56 h-[110%] bg-purple-600 rounded-[4rem] -rotate-12 opacity-[0.07] hidden sm:block" />

            <div className="relative w-full max-w-lg">
              <div className="absolute -top-6 right-[5%] md:-right-4 bg-purple-700 p-2 md:p-5 rounded-4xl shadow-2xl z-30 flex items-center gap-4 animate-bounce border-4 border-white text-white">
                <div className="bg-white/20 text-white p-0.5 md:p-2.5 rounded-xl backdrop-blur-md">
                  <Truck className="w-3 md:w-6 h-3 md:h-6" />
                </div>
                <div className="pr-2">
                  <p className="text-[7px] md:text-[10px] font-bold uppercase leading-none text-purple-200 mb-1">Delivery</p>
                  <p className="text-[10px] md:text-base font-black leading-none text-white">Nationwide</p>
                </div>
              </div>

              <div className="relative z-10 rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-12 border-white bg-purple-50 aspect-square">
                <img
                  src="/heroSection.avif"
                  alt="Modern Mindshelf"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#7000A5]/30 via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 bg-[#7000A5]/90 backdrop-blur-xl border border-white/20 p-2 md:p-4 rounded-2xl text-white">
                  <Sparkles className="w-2 md:w-5 h-2 md:h-5 mb-2 text-purple-200" />
                  <p className="text-[9px] md:text-xs font-bold uppercase tracking-widest leading-tight">Mind Reset<br />Content</p>
                </div>
              </div>

              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl -z-10 opacity-50" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// "use client";

// import { Button } from "@/components/ui/button";
// import { MessageCircle, Truck, BookCheck, Zap, Sparkles } from "lucide-react";

// export function Hero() {
//   return (
//     <section className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-white">
//       {/* Background Orbs */}
//       <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-purple-50 rounded-full blur-3xl opacity-60" />
//       <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-40" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
//           {/* Left Content */}
//           <div className="text-center lg:text-left order-2 lg:order-1">
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-[#7000A5] text-xs font-black mb-8 tracking-widest shadow-sm border border-purple-200">
//               <Zap className="w-4 h-4 fill-current" />
//               <span>WHOLESALE & RETAIL BOOKSTORE</span>
//             </div>

//             <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#7000A5] leading-[0.85] mb-6">
//               Read.<br />Grow.<br />Inspire.
//             </h1>

//             <p className="text-xl md:text-2xl font-medium text-gray-800 italic mb-6">
//               “Mind reset through valuable contents”
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10">
//               <a
//                 href="https://wa.me/2348142846244"
//                 target="_blank"
//                 className="inline-flex items-center justify-center bg-[#7000A5] hover:bg-purple-800 text-white font-bold px-10 py-5 text-lg rounded-2xl shadow-xl transition-all hover:-translate-y-1 active:scale-95"
//               >
//                 <MessageCircle className="w-6 h-6 mr-3" />
//                 Chat on WhatsApp
//               </a>

//               {/* THIS IS THE HANDSHAKE FIX */}
//               <a
//                 href="#catalog"
//                 className="inline-flex items-center justify-center border-2 border-purple-100 text-[#7000A5] hover:bg-purple-50 font-bold px-10 py-5 text-lg rounded-2xl transition-all"
//               >
//                 Explore Catalog
//               </a>
//             </div>
//           </div>

//           {/* Right Visual */}
//           <div className="relative flex justify-center items-center order-1 lg:order-2 py-10 lg:py-0">
//             <div className="relative w-full max-w-lg">
//               <div className="relative z-10 rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white bg-purple-50 aspect-square">
//                 <img
//                   src="/heroSection.avif"
//                   alt="Modern Mindshelf"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#7000A5]/30 to-transparent" />
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

