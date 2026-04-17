# 🌲 The Westwood | Premium Hill Resort Website

Welcome to the official repository for **The Westwood**, a high-converting, production-ready luxury resort website built with Next.js. Located in the heart of the Western Ghats (Kookal, Kodaikanal), this project is designed to deliver a premium nature-immersive experience.

---

## 🌟 Layman POV (The Guest's View)
**"A window into your mountain escape."**
Imagine waking up to a 180-degree view of mist-covered forests from your private wooden cabin. This website is your first step into that reality.
- **Easy Booking**: Direct WhatsApp and Call buttons for instant enquiries.
- **Visual Journey**: High-quality galleries of our Cathedral cabins, A-frame stays, and homemade food.
- **Safe & Fun**: Clearly see our secure parking, kids' play areas, and private campfire spots.
- **Always Current**: Get the latest details on our Cedar, Pine, Teak, Maple, and Glamp stays.

---

## 🎨 Designer POV
**"Nature-immersive aesthetic meets functional elegance."**
The design system is built to evoke the serenity of Kookal while maintaining a premium, high-end feel.
- **Palette**: Forest Green (`primary`), Earthy Brown (`secondary`), and Warm Beige (`background`).
- **Typography**: Elegant Serif ([Playfair Display](https://fonts.google.com/specimen/Playfair+Display)) for emotional headings; Clean Sans-Serif ([Geist](https://vercel.com/font)) for high readability.
- **Atmosphere**: Subtle Framer Motion animations create a "breathing" effect, mimicking the calm of the hills.
- **Components**: Custom-themed [shadcn/ui](https://ui.shadcn.com/) components with rounded-3xl corners for a modern, organic feel.

---

## 💻 Developer POV
**"Modern stack, clean architecture, rapid iteration."**
Built for performance, SEO, and maintainability.
- **Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Lucide React icons.
- **State**: Server-side rendering for SEO; Client-side state for dynamic Navbars and Sticky CTAs.
- **Performance**: 
    - Next.js `Image` optimization with specific `sizes` hints.
    - `devIndicators: false` for a clean production preview.
    - Modular component architecture in `/components`.
- **Configuration**: All resort data (rooms, contact, gallery) is centralized in `lib/constants.ts` for zero-code content updates.

---

## 🏗️ Engineer POV
**"Scalable, performant, and reliable infrastructure."**
The project follows engineering best practices for long-term stability.
- **Optimized Assets**: Local image hosting with Next.js automatic WebP conversion.
- **Responsive Engineering**: Mobile-first approach with a dedicated `MobileStickyCTA` for conversion.
- **API Layer**: `/api/contact` route handles lead capture with server-side validation and logging.
- **Linter-Friendly**: Standardized TypeScript interfaces for Rooms, Experiences, and Testimonials.

---

## 📈 Business POV
**"Conversion-first strategy to drive direct bookings."**
Every pixel is aligned with the goal of reducing OTA dependency and increasing direct enquiries.
- **Scarcity Messaging**: "Premium Individual Cabin" and "Twin Mirrored Layout" badges drive urgency.
- **Direct Conversion**: Dynamic WhatsApp links pre-fill messages based on the specific room viewed.
- **Trust Elements**: Prominent display of verified guest testimonials and "Safe & Fun" campus features.
- **Dynamic Pricing**: Price display replaced with "Get Pricing" icons to handle seasonal rate changes and encourage direct dialogue.

---

## 🎖️ Leadership POV
**"Positioning The Westwood as the premier choice in Kodaikanal."**
This digital asset is a cornerstone of the resort's brand identity.
- **Brand Consistency**: Dynamic logo handling in the Navbar ensures the brand is always visible and premium.
- **Visibility = Bookings**: SEO-optimized metadata and fast page loads (Lighthouse > 90 target).
- **Positioning**: Focus on "Swiss Wooden Luxury" to attract high-value guests.
- **Security**: Focus on "Safe Campus" features to appeal to families and premium travelers.

---

## 🧪 Tester POV
**"Bulletproof UX across every device and scenario."**
Validated for a flawless user experience.
- **Responsive Testing**: Verified layout from 320px (Mobile) to 4K (Desktop).
- **Functional Testing**: Verified Contact Form submission, WhatsApp link generation, and navigation links.
- **Asset Verification**: Ensured all images load correctly with proper fallback/alt text.
- **Performance Audit**: Monitored Next.js dev server logs for image optimization warnings and fixed `sizes` attributes.

---

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Production Build**:
   ```bash
   npm run build
   ```

---
*© 2026 The Westwood. Built for the Western Ghats.*
