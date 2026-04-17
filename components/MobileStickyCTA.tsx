"use client";

import { Phone, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s+/g, '')}?text=Hi, I'm interested in booking a stay at The Westwood.`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden"
        >
          <div className="bg-background/80 backdrop-blur-lg border border-border shadow-2xl rounded-2xl flex items-center gap-2 p-2">
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold text-sm"
            >
              <Phone size={18} />
              Book Now
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-4 rounded-xl font-bold text-sm"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
