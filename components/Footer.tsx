import Link from "next/link";
import { RESORT_NAME, RESORT_LOCATION, NAV_LINKS, CONTACT_INFO, LOGOS } from "@/lib/constants";
import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-amber-50 text-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About */}
        <div className="space-y-6">
          <Link href="/" className="relative block h-16 w-48">
            <Image
              src={LOGOS.light}
              alt={RESORT_NAME}
              fill
              sizes="(max-width: 768px) 100vw, 192px"
              className="object-contain object-left"
            />
          </Link>
          <p className="text-sm opacity-75 leading-relaxed max-w-xs">
            Experience the luxury of Swiss-style wooden cabins in the heart of the Western Ghats. A perfect retreat for nature lovers.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold font-heading text-amber-900">Quick Links</h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold font-heading text-amber-900">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex flex-col gap-1 text-sm opacity-70">
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}>{CONTACT_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-3 ml-7">
                <a href={`tel:${CONTACT_INFO.alternatePhone.replace(/\s+/g, '')}`}>{CONTACT_INFO.alternatePhone}</a>
              </div>
            </li>
            <li className="flex flex-col gap-1 text-sm opacity-70">
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </div>
              <div className="flex items-center gap-3 ml-7">
                <a href={`mailto:${CONTACT_INFO.alternateEmail}`}>{CONTACT_INFO.alternateEmail}</a>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm opacity-70 leading-relaxed">
              <MapPin size={16} className="mt-1 shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold font-heading text-amber-900">Follow Us</h3>
          <div className="flex gap-4">
            <a 
              href={CONTACT_INFO.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-amber-200 rounded-full hover:bg-amber-300 transition-colors text-gray-900"
              title="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s+/g, '')}`} className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition-colors text-white" title="Chat on WhatsApp">
              <MessageCircle size={20} />
            </a>
          </div>
          <p className="text-xs opacity-50 pt-4 border-t border-amber-200">
            &copy; {new Date().getFullYear()} {RESORT_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
