"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/2348142846244"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-3000 w-8 md:w-16 h-8 md:h-16 bg-[#7000A5] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
    >
      <MessageCircle 
      // size={32}
       className="fill-current w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
       />
    </a>
  );
}

