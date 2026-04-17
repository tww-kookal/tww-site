"use client";

import { Trees, UtensilsCrossed, VolumeX, Home } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const EXPERIENCES = [
  {
    icon: Trees,
    title: "Wake up to forest views",
    description: "Start your day with the mist-covered mountains and the sound of chirping birds.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2071",
  },
  {
    icon: UtensilsCrossed,
    title: "Homemade food like home",
    description: "Authentic local flavors prepared with love and fresh ingredients from our kitchen.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070",
  },
  {
    icon: VolumeX,
    title: "Silence, peace, and nature",
    description: "Escape the city noise. Immerse yourself in the tranquility of the Western Ghats.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=2070",
  },
  {
    icon: Home,
    title: "Private, premium cabins",
    description: "Exclusive Swiss-style wooden cabins designed for maximum comfort and privacy.",
    image: "https://images.unsplash.com/photo-1449156001931-929ffbc09975?auto=format&fit=crop&q=80&w=2070",
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
