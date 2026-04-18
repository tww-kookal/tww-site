# Technology Stack Reference Guide

## 🛠️ Complete Dependencies & Versions

### Production Dependencies
```json
{
  "@base-ui/react": "^1.4.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "framer-motion": "^12.38.0",
  "lucide-react": "^0.477.0",
  "next": "16.2.4",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "shadcn": "^4.3.0",
  "tailwind-merge": "^3.5.0",
  "tw-animate-css": "^1.4.0"
}
```

### Development Dependencies
```json
{
  "@tailwindcss/postcss": "^4",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "eslint": "^9",
  "eslint-config-next": "16.2.4",
  "tailwindcss": "^4",
  "typescript": "^5"
}
```

---

## 📚 Library-Specific Guide

### 1. **Next.js 16.2.4** | App Router
**Purpose**: Server-side rendering, API routes, static optimization

**Key Configuration** (`next.config.ts`):
```typescript
devIndicators: false,          // Hide Next.js dev badge in prod
images: {
  remotePatterns: [{           // Allow Unsplash images
    protocol: "https",
    hostname: "images.unsplash.com",
  }],
}
```

**Usage**:
- App Router: All pages in `/app` directory
- Dynamic routes: `/app/[slug]/page.tsx`
- API routes: `/app/api/[endpoint]/route.ts`
- Static exports possible for Vercel

**Next Version Alert**: Project uses latest Next.js. Check AGENTS.md/CLAUDE.md for breaking changes before upgrading.

---

### 2. **React 19.2.4** | Component Library
**Purpose**: UI component framework, state management

**Key Features Used**:
- Functional components
- Hooks (useState, useEffect, useContext)
- Server Components by default (Next.js integration)
- Suspense boundaries for lazy loading

**Best Practice**: Use server components for static content, client components (`"use client"`) for interactivity.

---

### 3. **TypeScript 5** | Type Safety
**Purpose**: Static type checking, IDE support, developer experience

**Configuration** (`tsconfig.json`):
```json
{
  "strict": true,              // Strict mode enabled
  "noEmit": true,              // Don't emit JS from TS
  "jsx": "react-jsx",          // React 17+ JSX transform
  "paths": {
    "@/*": ["./*"]             // @ alias for root
  }
}
```

**Usage Example**:
```typescript
interface Room {
  id: string;
  name: string;
  capacity: number;
}

export const ROOMS: Room[] = [...]
```

---

### 4. **Tailwind CSS v4** | Styling
**Purpose**: Utility-first CSS framework

**PostCSS Integration** (`postcss.config.mjs`):
```javascript
{
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

**Key Classes Used**:
- `min-h-screen`, `flex`, `grid` → Layouts
- `rounded-3xl` → Organic borders
- `text-base`, `font-serif` → Typography
- `bg-green-50`, `text-slate-800` → Colors
- `md:`, `lg:` → Responsive breakpoints

**Custom Config** (`tailwind.config.ts`):
- Extend color palette: forest green, earthy brown, warm beige
- Add custom fonts: Playfair Display, Geist
- Theme overrides for premium feel

---

### 5. **shadcn/ui** | Component Library
**Purpose**: Pre-built, accessible React components

**Components Used**:
- `Button` → CTA buttons with variants
- `Card` → Room/experience containers
- `Dialog` → Modal interactions
- `Input` → Form fields
- `Label` → Form labels
- `Textarea` → Contact form message box
- `NavigationMenu` → Navbar structure

**Customization**: All components support Tailwind classNames overrides.

**Example**:
```typescript
import { Button } from "@/components/ui/button"

export function CTA() {
  return <Button variant="default">Book Now</Button>
}
```

---

### 6. **Framer Motion 12.38.0** | Animation
**Purpose**: Smooth, performant animations

**Implementation Strategy**:
- Subtle entrance animations on scroll
- Hover effects on cards
- Fade-in for images
- Mobile-optimized (reduced motion on low-end devices)

**Example**:
```typescript
import { motion } from "framer-motion"

export function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Welcome to The Westwood
    </motion.div>
  )
}
```

---

### 7. **Lucide React 0.477.0** | Icons
**Purpose**: Lightweight, customizable SVG icons

**Icons Used**:
- `Trees` → Nature/experience section
- `UtensilsCrossed` → Cafe/dining
- `ShieldCheck` → Safety features
- `Phone`, `Mail` → Contact options

**Usage**:
```typescript
import { Trees, UtensilsCrossed } from "lucide-react"

export function Experience() {
  return (
    <>
      <Trees size={32} />
      <UtensilsCrossed size={32} />
    </>
  )
}
```

---

### 8. **clsx & tailwind-merge** | CSS Utilities
**Purpose**: Conditional styling, CSS class merging

**Usage**:
```typescript
import clsx from "clsx"
import { twMerge } from "tailwind-merge"

const buttonClass = clsx(
  "px-4 py-2 rounded",
  isActive && "bg-blue-500",
  disabled && "opacity-50"
)

// Merge without duplicates:
const merged = twMerge("px-4", "px-6") // → "px-6"
```

---

### 9. **class-variance-authority** | Component Variants
**Purpose**: Type-safe component variant management

**Likely Usage** (in shadcn/ui):
```typescript
import { cva, type VariantProps } from "class-variance-authority"

const button = cva("px-4 py-2 rounded", {
  variants: {
    variant: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-200 text-black",
    },
  },
})
```

---

### 10. **ESLint 9** | Code Quality
**Purpose**: Static code analysis, enforce best practices

**Config** (`eslint.config.mjs`):
- Next.js preset: next/eslint-config
- TypeScript support enabled
- React hooks linting

**Commands**:
```bash
npm run lint              # Check for linting errors
npm run lint -- --fix    # Auto-fix where possible
```

---

## 📊 Comparison: Why These Choices?

| Library | Purpose | Alternative | Why This? |
|---------|---------|-------------|----------|
| Next.js | Framework | Vite, Remix | SSR + SEO for resort booking |
| React 19 | UI library | Vue, Svelte | Largest ecosystem, team expertise |
| TypeScript | Type safety | JavaScript, Flow | Catches bugs, better DX |
| Tailwind v4 | Styling | CSS Modules, Styled Components | Fast development, consistent design |
| shadcn/ui | Components | Material-UI, Chakra | Customizable, lightweight, accessible |
| Framer Motion | Animation | React Spring, Animate.css | Smooth, declarative, Vercel native |

---

## 🔧 Installation & Setup

```bash
# Clone project
git clone <repo-url>
cd tww-site

# Install dependencies (using pnpm)
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run production server
pnpm start
```

---

## 📦 Package Manager: pnpm

**Why pnpm?**
- Faster than npm/yarn
- Disk space efficient
- Dependency resolution clarity

**Common Commands**:
```bash
pnpm add <package>           # Add package
pnpm remove <package>        # Remove package
pnpm update                  # Update all packages
pnpm install --frozen-lockfile  # CI/CD (exact versions)
```

---

## 🚀 Optimization Best Practices

### Image Optimization
- Use `<Image>` component from `next/image`
- Always provide `alt` text
- Set explicit `width`, `height`, and `sizes`

```typescript
<Image
  src="/photo.jpg"
  alt="Room view"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority // Only for above-the-fold images
/>
```

### Code Splitting
- Automatic with Next.js (per-route bundles)
- Dynamic imports for large components:

```typescript
import dynamic from "next/dynamic"

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <p>Loading...</p>,
})
```

### Performance Monitoring
- Lighthouse score target: > 90
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## 🔗 Version Constraints & Compatibility

| Dependency | Current | Min Required | Max Allowed |
|----------|---------|--------------|-------------|
| next | 16.2.4 | 14.x | 16.x |
| react | 19.2.4 | 18.x | 19.x |
| typescript | 5 | 5.x | 5.x |
| tailwindcss | 4 | 3.4+ | 4.x |

---

## ⚠️ Known Issues & Deprecations

1. **Next.js 16 Breaking Changes**: Check AGENTS.md before code changes
2. **Tailwind CSS v4**: Different configuration from v3 (PostCSS required)
3. **React 19**: Experimental features in use; check React docs for updates

---

*Last Updated: April 18, 2026*
