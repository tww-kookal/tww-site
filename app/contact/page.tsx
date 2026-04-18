"use client";

import NextImage from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, MessageCircle, Send, Instagram } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CONTACT_INFO, RESORT_NAME } from "@/lib/constants";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s+/g, '')}?text=Hi, I'm interested in booking a stay at The Westwood.`;

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="relative h-[40vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <NextImage
            src="/images/around-the-westwood/misty-road-kookal.jpg"
            alt="Misty Road to Kookal"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white space-y-4 px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold">Contact Us</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Ready to book your escape? Reach out to us today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Channels */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-primary">Get in Touch</h2>
              <p className="opacity-70 leading-relaxed text-lg">
                Whether you have questions about our cabins, availability, or local experiences, we're here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="p-3 bg-secondary/10 rounded-full w-fit text-secondary">
                  <Phone size={24} />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold font-heading">Call Us</h3>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="text-sm opacity-70 hover:text-primary transition-colors">{CONTACT_INFO.phone}</a>
                  <a href={`tel:${CONTACT_INFO.alternatePhone.replace(/\s+/g, '')}`} className="text-sm opacity-70 hover:text-primary transition-colors">{CONTACT_INFO.alternatePhone}</a>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-3 bg-green-600/10 rounded-full w-fit text-green-600">
                  <MessageCircle size={24} />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold font-heading">WhatsApp</h3>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 hover:text-primary transition-colors">Chat with us now</a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-full w-fit text-primary">
                  <Mail size={24} />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold font-heading">Email</h3>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm opacity-70 hover:text-primary transition-colors">{CONTACT_INFO.email}</a>
                  <a href={`mailto:${CONTACT_INFO.alternateEmail}`} className="text-sm opacity-70 hover:text-primary transition-colors truncate max-w-[200px]" title={CONTACT_INFO.alternateEmail}>{CONTACT_INFO.alternateEmail}</a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-pink-600/10 rounded-full w-fit text-pink-600">
                  <Instagram size={24} />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold font-heading">Instagram</h3>
                  <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 hover:text-primary transition-colors">@thewestwoodkookal</a>
                </div>
              </div>

              <div className="space-y-4 sm:col-span-2">
                <div className="p-3 bg-accent/10 rounded-full w-fit text-accent">
                  <MapPin size={24} />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold font-heading">Location</h3>
                  <p className="text-sm opacity-70 leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="aspect-video w-full bg-muted rounded-3xl overflow-hidden shadow-lg border border-muted flex items-center justify-center">
              <div className="text-center space-y-4 px-8">
                <MapPin size={48} className="mx-auto text-primary opacity-50" />
                <p className="text-sm opacity-60 italic">
                  Google Maps view of Kookal, Western Ghats.
                </p>
                <a 
                  href={CONTACT_INFO.googleMaps} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline" }), "h-auto py-2")}
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted/50 p-8 md:p-12 rounded-3xl shadow-2xl space-y-8 border border-muted relative overflow-hidden">
            {/* Success Overlay */}
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-primary/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-white text-center p-8 space-y-6"
              >
                <div className="p-4 bg-white/20 rounded-full">
                  <Send size={48} />
                </div>
                <h3 className="text-3xl font-heading font-bold">Enquiry Sent!</h3>
                <p className="opacity-90 max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 30 minutes.
                </p>
                <Button variant="outline" className="text-white border-white hover:bg-white/10" onClick={() => setIsSuccess(false)}>
                  Send Another Message
                </Button>
              </motion.div>
            )}

            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold text-primary">Send an Enquiry</h2>
              <p className="opacity-70 text-sm">Fill out the form below and we'll contact you shortly.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-none shadow-sm py-6 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  placeholder="+91 98765 43210" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background border-none shadow-sm py-6 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="I'm interested in booking a cabin for..." 
                  required 
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-none shadow-sm rounded-xl"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white py-8 rounded-2xl shadow-xl transition-all hover:scale-[1.02] text-lg font-bold"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <p className="text-xs text-center opacity-50 pt-4">
              By submitting this form, you agree to our privacy policy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
