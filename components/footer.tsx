"use client";

import Image from "next/image"; // Import Next.js Image component
import { MessageCircle, Instagram, Facebook, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const WHATSAPP_URL = "https://wa.me/2348142846244";

  return (
    <footer className="bg-white text-black pt-10 md:pt-20 pb-5 md:pb-10 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-0 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-6 md:mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <div className="relative w-56 h-20 -mb-2 -ml-2">
                <Image
                  src="/mindshelfLogo.png"
                  alt="Mindshelf Logo"
                  fill
                  sizes="(max-w-708px) 200px, 224px"
                  className="object-cover object-left"
                />
              </div>

            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed italic">
              "Mind reset through valuable contents." <br />
              Your curated source for spiritual growth and intellectual
              excellence.
            </p>
            <div className="flex gap-4">
              {[
                { icon: MessageCircle, link: WHATSAPP_URL },
                {
                  icon: Instagram,
                  link: "https://instagram.com/mindshelfbookstore",
                },
                { icon: Facebook, link: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 md:w-10 h-5 md:h-10 rounded-full bg-purple-200 flex items-center justify-center text-black hover:text-white hover:bg-purple-400 transition-colors shadow-lg"
                >
                  <social.icon
                    className="w-3 md:w-5 h-3 md:h-5"
                    strokeWidth={2.5}
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-black font-bold text-[14px] md:text-lg mb-3 md:mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#7000A5] rounded-full" />
              What we offer
            </h3>
            <ul className="space-y-2 md:space-y-4 text-gray-400 text-sm">
              <li className="hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-2 max-sm:text-[10px]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7000A5]" />
                Sales of Books & Bibles
              </li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-2 max-sm:text-[10px]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7000A5]" />
                Bulk Supply for Institutions
              </li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-2 max-sm:text-[10px]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7000A5]" />
                Special Orders & Recommendations
              </li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-2 max-sm:text-[10px]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7000A5]" />
                Gift Packaging & Personalization
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold text-[14px] md:text-lg mb-3 md:mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#7000A5] rounded-full" />
              Logistics
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                <p className="text-gray-400 text-xs md:text-sm leading-snug">
                  Nationwide Delivery across Nigeria via Motorbike Dispatch &
                  Logistics Partners.
                </p>
              </div>
              <div className="p-2 md:p-4 rounded-xl md:rounded-2xl bg-purple-50 border border-purple-100">
                <p className="text-[10px] md:text-xs font-bold text-purple-400 uppercase mb-1">
                  Wholesale & Retail
                </p>
                <p className="text-gray-500 text-xs md:text-sm font-medium">
                  Best prices for Churches and Schools.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3 md:space-y-6">
            <h3 className="text-black font-bold text-[10px] md:text-lg mb-2 md:mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#7000A5] rounded-full" />
              Ready to Read?
            </h3>
            <div className="space-y-4">
              <p className="text-sm md:text-2xl font-black text-black">
                +234 814 284 6244
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full bg-[#7000A5] hover:bg-[#5a0084] text-white font-bold h-6  md:h-14 rounded-2xl shadow-xl shadow-purple-900/20 items-center justify-center gap-3 cursor-pointer transition-all active:scale-95 max-sm:text-[14px]"
              >
                <MessageCircle className="w-3 md:w-5 h-3 md:h-5" />
                Order on WhatsApp
              </a>
              <p className="text-center text-[10px] md:text-xs text-gray-500">
                Available 8 AM - 6 PM (Mon-Sat)
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 md:pt-10 border-t border-purple-100 flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-gray-500 text-[7px] md:text-sm">
            ©{currentYear}
            <span className="text-black font-bold max-sm:pl-0.5">
              Mindshelf Bookstore
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
