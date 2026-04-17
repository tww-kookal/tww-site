"use client";

import { Trees, UtensilsCrossed, ShieldCheck, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const EXPERIENCES = [
  {
    icon: Trees,
    title: "Wake up to forest views",
    description: "Start your day with the mist-covered mountains and the sound of chirping birds.",
    image: "/photos/cedar/cedar-deck-view-2.jpg",
  },
  {
    icon: UtensilsCrossed,
    title: "Homemade food like home",
    description: "Authentic local flavors from The Cafe, prepared with fresh organic ingredients.",
    image: "/photos/cafe/cafe-dining-area-2.JPG",
  },
  {
    icon: Gamepad2,
    title: "Kids Play & Sports",
    description: "Swings, slides, basketball, and badminton courts for endless fun in a safe environment.",
    image: "/photos/in-the-westwood/kids-playing.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Secure On-Site Parking",
    description: "Ample and safe space for your cars, motorcycles, and bikes within our campus.",
    image: "/photos/in-the-westwood/campus.jpg",
  },
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <Image 
                src={exp.image} 
                alt={exp.title}
                fill
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="p-3 bg-primary/80 backdrop-blur-sm rounded-full w-fit mb-4">
                  <exp.icon size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">{exp.title}</h3>
                <p className="text-sm opacity-80 line-clamp-2 transition-all group-hover:line-clamp-none">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
