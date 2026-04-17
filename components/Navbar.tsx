"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { RESORT_NAME, NAV_LINKS, CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className={cn(
            "text-2xl font-heading font-bold tracking-tight transition-colors duration-300",
            scrolled ? "text-primary" : "text-white drop-shadow-md"
          )}
        >
          {RESORT_NAME}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white drop-shadow-md"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className={cn(
              buttonVariants(), 
              "px-6 transition-all duration-300",
              !scrolled && "bg-white text-primary hover:bg-white/90"
            )}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden transition-colors duration-300",
            scrolled ? "text-foreground" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg p-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t">
              <Link href="/contact" className={cn(buttonVariants(), "w-full py-6 text-center")}>Book Now</Link>
              <div className="flex justify-center gap-4 pt-4">
                <a href={`tel:${CONTACT_INFO.phone}`} className="p-2 bg-secondary rounded-full text-white">
                  <Phone size={20} />
                </a>
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s+/g, '')}`} className="p-2 bg-green-600 rounded-full text-white">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
