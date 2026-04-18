"use client";

import { Trees, UtensilsCrossed, ShieldCheck, Gamepad2, Flame, Wifi } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";
import { useState, useEffect } from "react";

const EXPERIENCES = [
  {
    icon: Trees,
    title: "Wake up to forest views",
    description: "Start your day with the mist-covered mountains and the sound of chirping birds.",
    images: [
      "/images/in-the-westwood/forest-view-morning.jpg",
      "/images/in-the-westwood/forest-view.jpg",
      "/images/in-the-westwood/parking-view.jpg",
      "/images/in-the-westwood/forest-view-2.jpg",
      "/images/in-the-westwood/forest-view-3.jpg",
      "/images/in-the-westwood/misty-view.jpg"
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Homemade food like home",
    description: "Authentic local flavors from The Cafe, prepared with fresh organic ingredients.",
    images: [
      "/images/cafe/cafe-dining-area-1.JPG",
      "/images/cafe/cafe-dining-area-2.JPG",
      "/images/cafe/cafe-dining-area-3.JPG",
      "/images/cafe/cafe-dining-area-4.JPG",
      "/images/cafe/cafe-front-view-1.jpg"
    ],
  },
  {
    icon: Gamepad2,
    title: "Kids Play & Sports",
    description: "Swings, slides, basketball, and badminton courts for endless fun in a safe environment.",
    images: [
      "/images/play-area/swing-1.jpeg",
      "/images/play-area/bad-1.jpg",
      "/images/play-area/kids-see-saw-2.jpeg",
      "/images/play-area/bad-6.jpg",
      "/images/play-area/basket-ball-1.jpeg",
      "/images/play-area/play-slide-1.jpeg"
    ],
  },
  {
    icon: Flame,
    title: "Private Campfire",
    description: "Cozy nights under the stars with private campfire areas for your family and friends.",
    images: [
      "/images/in-the-westwood/campfire-1.jpg",
      "/images/in-the-westwood/campfire-2.jpg",
      "/images/in-the-westwood/campfire-3.jpg",
      "/images/in-the-westwood/evening-view-campfire-1.jpg"
    ],
  },
  {
    icon: ShieldCheck,
    title: "Secure On-Site Parking",
    description: "Ample and safe space for your cars, motorcycles, and bikes within our campus.",
    images: [
      "/images/in-the-westwood/car-parking-1.jpg",
      "/images/in-the-westwood/two-wheeler-parking.jpg",
      "/images/in-the-westwood/car-parking-2.jpg",
      "/images/in-the-westwood/two-wheeler-parking-2.jpg",
      "/images/in-the-westwood/car-parking-3.jpg"
    ],
  },
];

function ExperienceCard({ exp, index }: { exp: typeof EXPERIENCES[0], index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (exp.images.length <= 1) return;

    // Stagger the start time of each card's image rotation based on index
    const staggerDelay = index * 800; // Each card starts 800ms after the previous one
    
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % exp.images.length);
      }, 4000); // Change image every 4 seconds

      return () => clearInterval(interval);
    }, staggerDelay);

    return () => clearTimeout(timeout);
  }, [exp.images.length, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-[400px] overflow-hidden rounded-2xl shadow-lg cursor-pointer"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={exp.images[currentImageIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <NextImage 
            src={exp.images[currentImageIndex]} 
            alt={exp.title}
            fill
            sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
        <div className="p-3 bg-primary/80 backdrop-blur-sm rounded-full w-fit mb-4">
          <exp.icon size={24} />
        </div>
        <h3 className="text-xl font-bold font-heading mb-2">{exp.title}</h3>
        <p className="text-sm opacity-80 line-clamp-2 transition-all group-hover:line-clamp-none">
          {exp.description}
        </p>
        
        {exp.images.length > 1 && (
          <div className="flex gap-1 mt-4">
            {exp.images.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 flex-1 rounded-full transition-all ${i === currentImageIndex ? 'bg-white' : 'bg-white/30'}`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary"
          >
            Experience the Magic of Nature
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg opacity-70 leading-relaxed"
          >
            At The Westwood, we don't just provide rooms; we create memories that last a lifetime.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {EXPERIENCES.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
