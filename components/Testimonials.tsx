"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 opacity-10 text-primary pointer-events-none -translate-y-1/2 translate-x-1/4">
        <Quote size={400} />
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary"
          >
            What Our Guests Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg opacity-70 leading-relaxed"
          >
            Real stories from real guests who experienced the magic of The Westwood.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-xl bg-muted/50 rounded-3xl group hover:bg-muted transition-colors">
                <CardContent className="p-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex gap-1 text-yellow-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-lg font-medium opacity-80 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-muted-foreground/10">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold font-heading text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold font-heading text-primary">{testimonial.name}</span>
                      <span className="text-sm opacity-60">{testimonial.location}</span>
                    </div>
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
