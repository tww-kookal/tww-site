# The Westwood | Project Overview & Learnings

## 📋 Executive Summary
**The Westwood** is a luxury resort website built for a premium hill resort located in Kookal, Kodaikanal, Tamil Nadu, India. The site is conversion-focused, designed to drive direct bookings and minimize OTA dependency while maintaining a premium, nature-immersive aesthetic.

**Deployment**: Vercel | **Domain**: thewestwood.in (GoDaddy) | **Version**: 0.1.0

---

## 🎯 Business Context
- **Target Market**: High-value travelers seeking luxury nature experiences
- **Key Positioning**: "Swiss Wooden Luxury" in the Western Ghats
- **Primary Goal**: Reduce OTA dependency through direct booking conversion
- **Secondary Goals**: Build brand trust, showcase safety features, highlight unique experiences

---

## 📐 Technology Stack

### Core Framework
- **Next.js**: 16.2.4 (App Router - latest architecture)
- **TypeScript**: 5 (strict mode enabled)
- **React**: 19.2.4
- **Node.js**: Required (check with `node --version`)

### Styling & UI
- **Tailwind CSS**: v4 (latest with new `@tailwindcss/postcss`)
- **shadcn/ui**: v4.3.0 (custom-themed components)
- **Lucide React**: 0.477.0 (icons)
- **Framer Motion**: 12.38.0 (subtle animations)

### Build & Dev Tools
- **ESLint**: 9 (code quality)
- **PostCSS**: 4 (CSS transformation)
- **pnpm**: Package manager (check with `pnpm --version`)

---

## 🏗️ Project Architecture

### Directory Structure
```
tww-site/
├── app/                          # Next.js App Router
│   ├── api/contact/route.ts      # Lead capture API
│   ├── contact/page.tsx          # Contact page
│   ├── experience/page.tsx       # Experience page
│   ├── gallery/page.tsx          # Gallery page
│   ├── rooms/page.tsx            # Rooms listing
│   ├── page.tsx                  # Homepage (main)
│   ├── layout.tsx                # Root layout + metadata
│   └── globals.css               # Global styles
├── components/
│   ├── Navbar.tsx                # Navigation header
│   ├── Hero.tsx                  # Hero section
│   ├── Experience.tsx            # Experiences showcase
│   ├── Rooms.tsx                 # Room cards & listings
│   ├── Testimonials.tsx          # Guest reviews
│   ├── CTA.tsx                   # Call-to-action
│   ├── Footer.tsx                # Footer section
│   ├── MobileStickyCTA.tsx        # Mobile conversion button
│   └── ui/                       # shadcn/ui components (button, card, etc.)
├── lib/
│   ├── constants.ts              # ALL resort data (rooms, experiences, testimonials)
│   └── utils.ts                  # Helper functions
├── public/images/                # Static images
│   ├── logo/                     # Brand logos
│   ├── cedar/, pine/, teak/, maple/, glamp/  # Room images
│   ├── cafe/                     # Restaurant images
│   ├── around-the-westwood/      # Location images
│   └── in-the-westwood/          # Campus images
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies
└── prompts/                      # Documentation (this folder)
```

### Data Flow (Centralized Constants)
```
lib/constants.ts (SINGLE SOURCE OF TRUTH)
    ↓
Components (consume via import)
    ├── Navbar (NAV_LINKS)
    ├── Rooms (ROOMS array)
    ├── Experience (EXPERIENCES array)
    └── Testimonials (TESTIMONIALS array)
```

**Key Principle**: All resort content (rooms, pricing info, experiences, testimonials) is centralized in `lib/constants.ts`. This allows **zero-code content updates**.

---

## 🏨 Resort Room Types

| Room | Style | Capacity | Size | Key Feature | Scarcity Badge |
|------|-------|----------|------|-------------|---|
| **Cedar** | Cathedral | 8 adults | 800 sqft | 180° panoramic views, 3 King beds | Premium Individual Cabin |
| **Pine** | A-Frame | 5 adults | 600 sqft | Mountain air, elegant design | Unique A-Frame Design |
| **Teak** | Twin | 3 adults | 350 sqft | Shared deck with Maple | Twin Mirrored Layout |
| **Maple** | Twin | 3 adults | 350 sqft | Mirrored layout to Teak | Twin Mirrored Layout |
| **Glamp** | Tent | 2 adults | 100 sqft | Nature immersion, cozy | Unique Nature Experience |

**Common Features**: Private campfire area, heated bathroom, indoor pantry, sunrise/sunset views.

---

## 🎪 Experiences

1. **Nature Immersion**: Guided walks through Western Ghats, mist-covered forests
2. **The Cafe**: Homemade, organic, locally-sourced food
3. **Safe & Fun Campus**: Parking, kids' play area (swings, slides, courts), family-friendly

---

## 🔄 Homepage Flow

```
Navbar (sticky/fixed)
  ↓
Hero (headline + CTA)
  ↓
Experience (3-card showcase)
  ↓
Rooms (5-card showcase with WhatsApp integration)
  ↓
Testimonials (5-star reviews)
  ↓
CTA (final conversion push)
  ↓
Footer (links + contact)
  ↓
MobileStickyCTA (fixed bottom on mobile)
```

---

## 🎨 Design System

### Color Palette
- **Primary**: Forest Green (nature-aligned)
- **Secondary**: Earthy Brown (warm, premium)
- **Background**: Warm Beige (organic feel)
- **Accents**: White, dark neutrals

### Typography
- **Serif Headings**: Playfair Display (emotional, premium)
- **Body Text**: Geist Sans (clean, high-readability)
- **Monospace**: Geist Mono (code, technical)

### Spacing & Borders
- **Border Radius**: Primarily `rounded-3xl` (organic, modern feel)
- **Spacing**: Tailwind standard (4px base unit)
- **Animation**: Framer Motion for subtle micro-interactions

---

## 📡 API Endpoints

### POST /api/contact
**Purpose**: Capture lead enquiries (name, phone, message)

**Request Body**:
```json
{
  "name": "Guest Name",
  "phone": "+91-XXXXXXXXXX",
  "message": "Custom inquiry message"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Enquiry received successfully!"
}
```

**Backend**: Currently logs to console. Ready for email/database integration.

---

## 🔐 SEO & Metadata

**Current Strategy**:
- ✅ Meta title: "The Westwood | Luxury Resort in Kookal"
- ✅ Meta description: "Stay in Swiss-style wooden cabins amidst the Western Ghats..."
- ✅ Logo assets: Dark/light variants + square icon
- ✅ Remote image patterns: Unsplash support configured

**Missing** (for future): robots.txt, sitemap.xml, Open Graph tags, structured data (Schema.org)

---

## 🚀 Deployment Details

### Vercel Configuration
- ✅ Next.js 16.2.4 is Vercel-native
- ✅ Environment: Production-ready
- ✅ Dev indicators: Disabled for production preview
- ✅ Image optimization: Enabled with remote patterns

### GoDaddy Domain Integration
- **Domain**: thewestwood.in
- **DNS Setup**: Point nameservers to Vercel's DNS
- **SSL**: Automatic via Vercel

---

## 📦 npm Scripts

```bash
npm run dev       # Start dev server (http://localhost:3000)
npm run build     # Create production build
npm start         # Start production server
npm run lint      # Run ESLint validation
```

---

## ✅ Key Learnings for Future Reference

1. **Centralized Data Management**: All content lives in `lib/constants.ts`. Any content update doesn't require code changes—just modify the constants file.

2. **Conversion-First Design**: Every component has WhatsApp integration, mobile CTAs, and urgency messaging built-in.

3. **Performance Priority**: Image optimization, Next.js Image component usage, and `devIndicators: false` for clean production preview.

4. **Responsive Strategy**: Mobile-first approach with dedicated MobileStickyCTA component for conversion.

5. **TypeScript Strict**: All components are strictly typed for maintainability and fewer runtime errors.

6. **Component Structure**: Large sections (Hero, Experience, Rooms, etc.) are separate components for modularity and reusability.

7. **Accessibility**: Uses shadcn/ui (accessible by default), Lucide icons, semantic HTML.

---

## 🔍 Common Tasks Reference

- **Update Room Info**: Edit `lib/constants.ts` → ROOMS array
- **Change Testimonials**: Edit `lib/constants.ts` → TESTIMONIALS array
- **Add Navigation Link**: Edit `lib/constants.ts` → NAV_LINKS array
- **Modify Colors**: Edit `tailwind.config.ts` or component className
- **Add New Page**: Create file in `app/[page]/page.tsx`, add to NAV_LINKS

---

## 📝 Notes for Development

- Always run `npm run lint` before pushing to production
- Use TypeScript interfaces for type safety
- Test responsive layouts at 320px, 768px, 1024px breakpoints
- Ensure all images have alt text and proper `sizes` attributes
- Verify WhatsApp links work with different room selections
- Check contact form validation on mobile

---

*Last Updated: April 18, 2026*
*Project Version: 0.1.0*
