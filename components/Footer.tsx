import Link from "next/link";
import { RESORT_NAME, RESORT_LOCATION, NAV_LINKS, CONTACT_INFO } from "@/lib/constants";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About */}
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-heading font-bold tracking-tight">
            {RESORT_NAME}
          </Link>
          <p className="text-sm opacity-80 leading-relaxed">
            Experience the luxury of Swiss-style wooden cabins in the heart of the Western Ghats. A perfect retreat for nature lovers.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold font-heading">Quick Links</h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold font-heading">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm opacity-80">
              <Phone size={16} />
              <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
            </li>
            <li className="flex items-center gap-3 text-sm opacity-80">
              <Mail size={16} />
              <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
            </li>
            <li className="flex items-start gap-3 text-sm opacity-80 leading-relaxed">
              <MapPin size={16} className="mt-1" />
              <span>{CONTACT_INFO.address}</span>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold font-heading">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Facebook size={20} />
            </a>
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s+/g, '')}`} className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
          <p className="text-xs opacity-50 pt-4 border-t border-white/10">
            &copy; {new Date().getFullYear()} {RESORT_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
