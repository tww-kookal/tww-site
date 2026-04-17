"use client";

import { Phone, MessageCircle } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function CTA() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s+/g, '')}?text=Hi, I'm interested in booking a stay at The Westwood.`;

  return (
    <section className="py-24 px-6 bg-primary text-white text-center relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[80%] rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[80%] rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-heading font-bold"
        >
          Plan Your Escape Today
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed"
        >
          Ready to experience the magic of the Western Ghats? Get in touch with us for a personalized quote and availability check.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a 
            href={`tel:${CONTACT_INFO.phone}`} 
            className={cn(buttonVariants({ size: "lg" }), "bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full w-full sm:w-auto transition-transform hover:scale-105 h-auto flex items-center gap-3")}
          >
            <Phone size={20} />
            Call Now
          </a>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={cn(buttonVariants({ size: "lg" }), "bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-full w-full sm:w-auto transition-transform hover:scale-105 h-auto flex items-center gap-3")}
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>
        </motion.div>
        
        <p className="text-sm opacity-70 italic">
          "Quick response guaranteed. We usually reply within 30 minutes."
        </p>
      </div>
    </section>
  );
}
