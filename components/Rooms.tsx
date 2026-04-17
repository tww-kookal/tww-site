"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { ROOMS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Rooms() {
  return (
    <section className="py-24 px-6 bg-muted">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-heading font-bold text-primary"
            >
              Luxury Wooden Cabins
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg opacity-70 leading-relaxed"
            >
              Our Swiss-style wooden cabins offer the perfect blend of rustic charm and modern luxury.
            </motion.p>
          </div>
          <Link 
            href="/rooms" 
            className={cn(buttonVariants({ variant: "link" }), "text-primary font-bold group flex items-center gap-2 h-auto")}
          >
            View All Accommodations
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {ROOMS.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border-none shadow-2xl rounded-3xl group bg-background">
                <CardContent className="p-0 flex flex-col">
                  <div className="relative h-[350px] overflow-hidden">
                    <Image 
                      src={room.image} 
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <div className="px-4 py-2 bg-primary/90 text-white rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg backdrop-blur-sm w-fit">
                        {room.category}
                      </div>
                      <div className="px-4 py-2 bg-accent text-white rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg w-fit">
                        {room.scarcity}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold font-heading text-primary">{room.name}</h3>
                        <p className="text-sm opacity-70 leading-relaxed max-w-md">
                          {room.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm opacity-60 block">Starting from</span>
                        <span className="text-2xl font-bold text-secondary">{room.price}</span>
                        <span className="text-sm opacity-60 block">per night</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 border-t border-muted pt-6">
                      {room.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm opacity-80">
                          <Check size={16} className="text-secondary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      href="/contact" 
                      className={cn(buttonVariants(), "w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-2xl shadow-xl transition-all hover:scale-[1.02] h-auto flex items-center justify-center gap-2")}
                    >
                      Check Availability
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
