"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Our Services", href: "#services" },
    { name: "Explore Bookshelf", href: "#catalog" },
    { name: "About Us", href: "#about" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-5000 bg-white/90 backdrop-blur-md border-b border-purple-100 h-14 md:h-20">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          
          <a 
            href="#home" 
            className="shrink-0 relative z-50 block cursor-pointer"
          >
            <img
              src="/mindshelfLogo.png"
              alt="Mindshelf Logo"
              className="h-14 md:h-24 w-auto object-contain object-left"
            />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-gray-600 hover:text-[#7000A5] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="https://wa.me/2348142846244"
              target="_blank"
              className="bg-[#7000A5] text-white sm:px-4 lg:px-8 sm:py-2 lg:py-3 rounded-full font-bold flex items-center gap-2 hover:bg-purple-800 transition-all shadow-lg shadow-purple-100"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#7000A5] relative z-6000"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-4500 bg-white transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <div className="flex flex-col h-full pt-32 px-3 gap-8 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-1xl font-serif font-semibold text-[#7000A5] border-b border-purple-50 pb-4"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/2348142846244"
            target="_blank"
            className="bg-[#7000A5] text-white py-3 lg:py-6 rounded-2xl sm:text-sm lg:text-xl font-bold flex items-center justify-center gap-3"
          >
            <MessageCircle size={24} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
