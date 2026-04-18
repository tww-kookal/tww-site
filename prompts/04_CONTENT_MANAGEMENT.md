# Content Management & Data Updates Guide

## 📝 Overview

**Key Principle**: All resort content is centralized in `lib/constants.ts`. This allows **zero-code content updates** without touching React components.

**Single Source of Truth**: `lib/constants.ts`

---

## 🏨 Room Content Management

### Current Rooms in System
1. Cedar (Cathedral cabin, 8 guests)
2. Pine (A-frame cabin, 5 guests)
3. Teak (Twin cabin, 3 guests)
4. Maple (Twin cabin, 3 guests)
5. Glamp (Glamping tent, 2 guests)

### How to Update Room Information

**Location**: `lib/constants.ts` → `ROOMS` array

**Current Structure**:
```typescript
export const ROOMS = [
  {
    id: "cedar",                        // Unique identifier (used in URLs)
    name: "Cedar",                      // Display name
    category: "Individual Cabin",       // Room type/category
    description: "A cathedral styled..." // Full description (1-2 paragraphs)
    image: "/photos/cedar/cedar-outer-view-1.JPG",  // Room image path
    features: [                         // Key amenities list
      "Max Occupancy: 8 Adults",
      "Private Campfire Area",
      "800 sqft Built-up Space",
      // ... more features
    ],
    scarcity: "Premium Individual Cabin", // Urgency badge
  },
  // ... more rooms
]
```

### Example: Update Cedar Room Price in WhatsApp Message

**File**: `components/Rooms.tsx`

**Find**: The WhatsApp link generation logic

**Current**: Links pre-fill with room name only

**To Add Pricing**: Modify Rooms component to include pricing (when available):
```typescript
// Example modification
const message = `I'm interested in ${room.name} at The Westwood. Please share pricing.`
```

### Example: Add New Room

**File**: `lib/constants.ts`

**Add to ROOMS array**:
```typescript
{
  id: "oak",
  name: "Oak",
  category: "Individual Cabin",
  description: "A new oak cabin with modern amenities...",
  image: "/photos/oak/oak-view.jpg",
  features: [
    "Max Occupancy: 6 Adults",
    "Private Campfire Area",
    // ... more features
  ],
  scarcity: "Exclusive New Addition",
}
```

**Then automatically**:
- Appears on Rooms page
- Available for WhatsApp booking
- Shows in room listings
- No component changes needed!

---

## 🎪 Experience Content Management

### Current Experiences
1. Nature Immersion
2. The Cafe
3. Safe & Fun Campus

### Update Experience Information

**Location**: `lib/constants.ts` → `EXPERIENCES` array

**Current Structure**:
```typescript
export const EXPERIENCES = [
  {
    title: "Nature Immersion",                    // Display title
    description: "Wake up to the sounds...",      // Description text
    icon: "Trees",                                // Lucide icon name
    image: "/photos/around-the-westwood/kookal-lake.jpg", // Image path
  },
  // ... more experiences
]
```

### Add New Experience

```typescript
{
  title: "Wellness & Yoga",
  description: "Start your day with guided yoga sessions overlooking the forest...",
  icon: "Leaf",  // From Lucide icons
  image: "/photos/wellness/yoga-session.jpg",
}
```

**Available Icons** (Lucide React):
- `Trees` → Nature
- `UtensilsCrossed` → Food/Dining
- `ShieldCheck` → Safety
- `Leaf` → Wellness
- `Gamepad2` → Recreation
- `Users` → Social
- `Camera` → Photography

---

## ⭐ Testimonials Management

### Current Testimonials
5 guest reviews with name, location, text, and 5-star rating

### Update Testimonials

**Location**: `lib/constants.ts` → `TESTIMONIALS` array

**Current Structure**:
```typescript
export const TESTIMONIALS = [
  {
    name: "Anjali Sharma",           // Guest name
    location: "Bangalore",            // City/state
    text: "The most peaceful stay...", // Review text
    rating: 5,                        // Star rating (1-5)
  },
  // ... more testimonials
]
```

### Add New Testimonial

```typescript
{
  name: "Priya Kapoor",
  location: "Mumbai",
  text: "Absolutely magical! The sunset from Cedar was unforgettable. Will definitely come back!",
  rating: 5,
}
```

### Rotate Testimonials Strategy

- Keep 5-7 top testimonials
- Update quarterly or after reaching new review milestones
- Prioritize: 5-star reviews, specific details, verified guests

---

## 🔗 Navigation Links Management

### Current Navigation Links
- Home (/)
- Rooms (/rooms)
- Experience (/experience)
- Gallery (/gallery)
- Contact (/contact)

### Update Navigation

**Location**: `lib/constants.ts` → `NAV_LINKS` array

**Current Structure**:
```typescript
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Experience", href: "/experience" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
]
```

### Add New Navigation Link

```typescript
{ label: "Blog", href: "/blog" }
// Then create app/blog/page.tsx for the actual page
```

---

## 🎨 Brand Information

### Resort Details

**Location**: `lib/constants.ts` → Top of file

```typescript
export const RESORT_NAME = "The Westwood";
export const RESORT_LOCATION = "Kookal, Kodaikanal, Tamilnadu, India";
```

### Logos

**Location**: `lib/constants.ts` → `LOGOS` object

```typescript
export const LOGOS = {
  light: "/photos/logo/6.png",              // For dark backgrounds
  dark: "/photos/logo/westwoodlogo2.png",   // For light backgrounds
  square: "/photos/logo/0.jpg",             // Square format
  icon: "/photos/logo/w-logo.jpg",          // Favicon-sized
}
```

**To Update Logo**:
1. Add new logo image to `/public/photos/logo/`
2. Update path in `LOGOS` object
3. Automatically updates in Navbar and throughout site

---

## 🖼️ Image Management

### Image Directory Structure
```
public/photos/
├── logo/                      # Brand logos
│   ├── 6.png (light)
│   ├── westwoodlogo2.png (dark)
│   ├── 0.jpg (square)
│   └── w-logo.jpg (icon)
├── cedar/                     # Cedar room images
├── pine/                      # Pine room images
├── teak/                      # Teak room images
├── maple/                     # Maple room images
├── glamp/                     # Glamp tent images
├── cafe/                      # Restaurant/cafe images
├── around-the-westwood/       # Landscape/location images
└── in-the-westwood/           # Campus/facility images
```

### Update Room Images

**Current**: Each room has 1 main image in `ROOMS.image`

**File Path Format**: `/photos/[room]/[image-name].jpg`

**Example**: 
- Cedar: `/photos/cedar/cedar-outer-view-1.JPG`
- Pine: `/photos/pine/pine-front-view.jpg`

**To Change Room Image**:
1. Add new image to `/public/photos/[room]/`
2. Update `image` field in `ROOMS` array, `lib/constants.ts`
3. Image updates on site automatically

### Image Best Practices

- **Format**: JPG for photos, PNG for logos
- **Size**: ~800-1200px wide (Next.js optimizes)
- **Quality**: High-res originals, optimized for web
- **Alt Text**: Implicit from component (include descriptive filename)
- **Naming**: kebab-case (cedar-outer-view-1.jpg)

---

## 📞 Contact Information

### Current Contact Data

**Location**: `lib/constants.ts` (needs to be added)

**Recommended Addition**:
```typescript
export const CONTACT = {
  phone: "+91-XXXXXXXXXX",
  whatsapp: "+91-XXXXXXXXXX",
  email: "contact@thewestwood.in",
  address: "Kookal, Kodaikanal, Tamilnadu 624101, India",
  coordinates: {
    latitude: 10.2381,
    longitude: 77.4881,
  },
}
```

### Update Contact in Components

- **WhatsApp Links**: Navbar, Rooms, CTA, MobileStickyCTA
- **Phone Links**: Footer, Contact page
- **Email**: Contact form submission destination
- **Map**: Gallery page location marker

---

## 🔄 FAQ & Dynamic Content

### Where to Add FAQ Section

1. Create `app/faq/page.tsx`
2. Add FAQ array to `lib/constants.ts`:
   ```typescript
   export const FAQS = [
     {
       question: "What is the best time to visit?",
       answer: "The Western Ghats are magical year-round...",
     },
   ]
   ```
3. Display in new FAQ page component

### Example FAQ Items

```typescript
export const FAQS = [
  {
    question: "What is checkout time?",
    answer: "Standard checkout is 11:00 AM. Late checkout available upon request.",
  },
  {
    question: "Is there WiFi available?",
    answer: "Yes, high-speed WiFi is available in all cabins and common areas.",
  },
  {
    question: "Do you offer airport pickup?",
    answer: "Yes, we arrange airport transfers from Kochi or Coimbatore.",
  },
]
```

---

## 📊 Content Update Workflow

### Step 1: Identify Change Needed
- Room pricing update?
- New testimonial?
- Logo change?
- Experience detail update?

### Step 2: Locate in `lib/constants.ts`
- Find relevant section (ROOMS, EXPERIENCES, etc.)
- Identify specific item/array

### Step 3: Make Update
- Edit text, images, or features
- Keep formatting consistent
- Check TypeScript types match

### Step 4: Test Locally
```bash
npm run dev
# Visit http://localhost:3000
# Verify changes display correctly
# Check all links work
```

### Step 5: Deploy
```bash
git add lib/constants.ts
git commit -m "Update: [description]"
git push origin main
# Vercel auto-deploys
```

---

## ⚠️ Common Mistakes to Avoid

1. **Forgetting Quotes**: `"Cedar"` not `Cedar`
2. **Wrong Image Path**: Must start with `/photos/`
3. **Inconsistent IDs**: Use lowercase, no spaces (cedar, not Cedar)
4. **Missing Commas**: Arrays need commas between items
5. **Broken URLs**: Verify all hrefs exist
6. **Stale Data**: Clear browser cache after updates

---

## 📋 Content Checklist

Before deploying content updates:
- [ ] All text is spell-checked
- [ ] Images are optimized and in correct folder
- [ ] New items have all required fields
- [ ] TypeScript compiles without errors
- [ ] Tested locally on `/`
- [ ] Links point to correct pages
- [ ] No broken image references
- [ ] Formatting consistent with existing items

---

*Last Updated: April 18, 2026*
*Data Source: lib/constants.ts*
