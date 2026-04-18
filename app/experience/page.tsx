import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import NextImage from "next/image";
import { Trees, UtensilsCrossed, Flame, Moon, Compass, Sparkles, Wifi, ShieldCheck } from "lucide-react";

const MORE_EXPERIENCES = [
  {
    title: "Nature Immersion",
    description: "Wake up to the sounds of the forest and the mist rolling over the hills. Guided nature walks available through the pristine Western Ghats.",
    icon: Trees,
    image: "/images/around-the-westwood/kookal-lake.jpg",
  },
  {
    title: "The Cafe",
    description: "Authentic, fresh, and homemade food that tastes just like home. Prepared with locally sourced organic ingredients from our mountain garden.",
    icon: UtensilsCrossed,
    image: "/images/cafe/cafe-dining-area-2.JPG",
  },
  {
    title: "In the Westwood",
    description: "Explore our beautiful campus, with spaces for kids to play, mist-covered views, and magical nights under the stars.",
    icon: Flame,
    image: "/images/in-the-westwood/campus.jpg",
  },
  {
    title: "Always Connected",
    description: "High-speed WiFi reaches every room, cafe, play area, and glamp, while CCTV-monitored outdoor areas keep the campus secure.",
    icon: Wifi,
    image: "/images/in-the-westwood/campus.jpg",
  },
  {
    title: "24/7 Safety & Security",
    description: "Rest easy knowing our entire campus is under continuous CCTV surveillance. With round-the-clock monitoring of all outdoor areas, pathways, and common spaces, your safety and peace of mind are our top priority—whether you're on a staycation or workation.",
    icon: ShieldCheck,
    image: "/images/in-the-westwood/campus.jpg",
  },
  {
    title: "Stargazing",
    description: "With no light pollution, the night sky at Kookal is a celestial wonder. Witness the Milky Way in all its glory.",
    icon: Moon,
    image: "/images/in-the-westwood/the-westwood-night-view-3.jpg",
  },
  {
    title: "Mountain Trekking",
    description: "Explore hidden trails and panoramic viewpoints with our local guides who know every secret of these hills.",
    icon: Compass,
    image: "/images/around-the-westwood/misty-road-kookal.jpg",
  },
  {
    title: "Pure Relaxation",
    description: "Simply sit on your private balcony with a book and a cup of tea, and let the peace of the forest wash over you.",
    icon: Sparkles,
    image: "/images/cedar/cedar-deck-view-2.jpg",
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="relative h-[50vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <NextImage
            src="/images/around-the-westwood/vegetation-view.jpg"
            alt="Western Ghats Vegetation"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white space-y-4 px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold">The Westwood Experience</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            It's not just a stay; it's a journey into the soul of the Western Ghats.
          </p>
        </div>
      </section>

      {/* Experience Content */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {MORE_EXPERIENCES.map((exp, index) => (
              <div 
                key={index}
                className="space-y-6 group"
              >
                <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-lg">
                  <NextImage 
                    src={exp.image} 
                    alt={exp.title}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 p-3 bg-primary/80 backdrop-blur-sm rounded-full text-white">
                    <exp.icon size={24} />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold font-heading text-primary">{exp.title}</h3>
                  <p className="opacity-70 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
