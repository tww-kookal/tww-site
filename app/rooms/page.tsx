import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import { ROOMS } from "@/lib/constants";
import { Check, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function RoomsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="relative h-[40vh] flex items-center justify-center pt-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/photos/in-the-westwood/misty-view.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white space-y-4 px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold">Our Accommodations</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Experience the true essence of mountain living in our hand-crafted Swiss wooden cabins.
          </p>
        </div>
      </section>

      {/* Rooms List */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto space-y-24">
          {ROOMS.map((room, index) => (
            <div 
              key={room.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
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

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">{room.name}</h2>
                  <p className="text-lg opacity-70 leading-relaxed">
                    {room.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold font-heading text-lg">Key Features</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {room.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm opacity-80">
                        <div className="p-1 bg-secondary/10 rounded-full">
                          <Check size={14} className="text-secondary" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-muted flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1">
                    <span className="text-sm opacity-60 block text-center sm:text-left">Starting from</span>
                    <span className="text-3xl font-bold text-secondary">{room.price}</span>
                    <span className="text-sm opacity-60"> / night</span>
                  </div>
                  <Link 
                    href="/contact" 
                    className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-7 rounded-2xl shadow-xl transition-all hover:scale-105 h-auto flex items-center gap-2")}
                  >
                    Check Availability
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
