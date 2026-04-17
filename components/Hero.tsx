"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 scale-110"
        style={{ 
          backgroundImage: "url('/photos/in-the-westwood/the-westwood-day-view-1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight drop-shadow-lg">
            Escape to The Westwood
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto drop-shadow-md">
            Swiss Wooden Luxury Cabins in the Heart of Western Ghats
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
        >
          <Link 
            href="/contact" 
            className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-white text-lg px-10 py-7 rounded-full transition-all hover:scale-105 h-auto")}
          >
            Book Your Stay
          </Link>
          <Link 
            href="/rooms" 
            className={cn(buttonVariants({ size: "lg", variant: "outline" }), "bg-transparent text-white border-white/50 hover:bg-white/10 text-lg px-10 py-7 rounded-full backdrop-blur-sm transition-all hover:scale-105 h-auto")}
          >
            Check Availability
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
