"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import NextImage from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "Cabins", "Food", "Night", "Activities", "Lakes", "Grasslands", "Forest", "Water Falls", "Temple", "Valley"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="relative h-[40vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <NextImage
            src="/images/in-the-westwood/the-westwood-night-view-1.jpg"
            alt="The Westwood Night View"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white space-y-4 px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold">Visual Journey</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            A glimpse into the beauty and tranquility of The Westwood.
          </p>
        </div>
      </section>

      {/* Gallery Filter & Grid */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all ${
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-lg" 
                    : "bg-muted text-foreground/60 hover:bg-muted-foreground/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
          >
            <AnimatePresence>
              {filteredImages.map((img, index) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative group rounded-3xl overflow-hidden shadow-xl cursor-pointer"
                >
                  <NextImage 
                    src={img.src} 
                    alt={img.alt}
                    width={800}
                    height={600}
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <span className="text-xs font-bold tracking-widest uppercase mb-2 block">{img.category}</span>
                      <h3 className="text-xl font-heading font-bold">{img.alt}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
