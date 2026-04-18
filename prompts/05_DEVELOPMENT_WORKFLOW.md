# Development Workflow & Best Practices

## 🚀 Getting Started with Development

### Environment Setup

```bash
# 1. Clone the repository
git clone <repository-url>
cd tww-site

# 2. Install dependencies (using pnpm)
pnpm install

# 3. Start development server
pnpm dev
# Runs on http://localhost:3000

# 4. Open in browser
# http://localhost:3000
```

### Prerequisites
- Node.js 18+ (check with `node --version`)
- pnpm (check with `pnpm --version`)
- Git (for version control)
- VS Code (recommended editor)

---

## 📁 Project Structure for Developers

### Key Directories

```
app/
├── page.tsx              # Homepage - imports all major sections
├── layout.tsx            # Root layout - global metadata, fonts
├── globals.css           # Global styles
└── api/contact/route.ts  # Contact form API endpoint

components/
├── Navbar.tsx            # Navigation header (sticky/fixed)
├── Hero.tsx              # Hero banner with CTA
├── Experience.tsx        # 3-card experience showcase
├── Rooms.tsx             # 5-card room showcase with WhatsApp
├── Testimonials.tsx      # 5-star review carousel
├── CTA.tsx               # Bottom call-to-action
├── Footer.tsx            # Footer with links
├── MobileStickyCTA.tsx   # Fixed bottom button (mobile only)
└── ui/                   # shadcn/ui components (reusable)
    ├── button.tsx
    ├── card.tsx
    ├── input.tsx
    ├── label.tsx
    ├── textarea.tsx
    └── dialog.tsx

lib/
├── constants.ts          # ⭐ ALL RESORT DATA (rooms, experiences, etc)
└── utils.ts              # Helper functions

public/photos/            # Static images
├── logo/                 # Logo variants
├── cedar/, pine/, etc.   # Room images
└── cafe/, around-the-westwood/, etc.
```

---

## 🔧 Development Commands

### Daily Development

```bash
# Start dev server (with hot reload)
pnpm dev

# Check code quality
pnpm lint

# Build for production (test locally)
pnpm build

# Start production server (after build)
pnpm start
```

### Git Workflow

```bash
# Check what changed
git status

# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: Add new room type" 
# or
git commit -m "fix: Contact form validation"
# or
git commit -m "style: Update hero section colors"

# Push to repository
git push origin main
# Triggers Vercel auto-deployment!
```

---

## 💻 Code Patterns & Best Practices

### 1. Creating a New Component

**Location**: `components/YourComponent.tsx`

```typescript
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface Props {
  title: string;
  description?: string;
  onAction?: () => void;
}

export default function YourComponent({ title, description, onAction }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-8 md:px-8"
    >
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
        {title}
      </h2>
      {description && <p className="text-lg text-slate-600 mb-6">{description}</p>}
      {onAction && <Button onClick={onAction}>Learn More</Button>}
    </motion.div>
  )
}
```

**Key Patterns**:
- ✅ Use TypeScript interfaces for props
- ✅ Use Framer Motion for entrance animations
- ✅ Use Tailwind for all styling
- ✅ Use shadcn/ui Button component
- ✅ Export as `default` function
- ✅ Make components responsive (md: breakpoint)

### 2. Using Data from Constants

**File**: `components/Rooms.tsx`

```typescript
import { ROOMS } from "@/lib/constants"

export default function Rooms() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ROOMS.map((room) => (
        <div key={room.id} className="border rounded-3xl overflow-hidden">
          <img 
            src={room.image} 
            alt={room.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-serif font-bold">{room.name}</h3>
            <p className="text-sm text-slate-600">{room.category}</p>
            {/* ... more content ... */}
          </div>
        </div>
      ))}
    </div>
  )
}
```

**Key Patterns**:
- ✅ Import from `lib/constants`
- ✅ Use `.map()` for dynamic lists
- ✅ Use `key={unique-id}` for React rendering
- ✅ Use Tailwind responsive classes (mobile-first: sm:, md:, lg:)
- ✅ Destructure object properties

### 3. API Routes

**File**: `app/api/contact/route.ts`

```typescript
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, phone, message } = data

    // Validation
    if (!name || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      )
    }

    // Process enquiry (log, email, database, etc.)
    console.log({
      name,
      phone,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "Enquiry received successfully!",
    })
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    )
  }
}
```

**Key Patterns**:
- ✅ Use `NextResponse` for API responses
- ✅ Validate input data before processing
- ✅ Return appropriate HTTP status codes
- ✅ Log errors to console (Vercel captures these)
- ✅ Use try-catch for error handling

### 4. Styling with Tailwind + Custom Classes

```typescript
// Using utility classes
<div className="flex flex-col md:flex-row gap-4 px-4 py-8">
  <div className="w-full md:w-1/2">
    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
      Title
    </h2>
    <p className="text-lg text-slate-600 leading-relaxed">Description</p>
  </div>
</div>

// Using clsx for conditional classes
import clsx from "clsx"

const buttonClass = clsx(
  "px-6 py-3 rounded-lg font-semibold transition",
  isActive ? "bg-green-600 text-white" : "bg-gray-200 text-slate-800",
  isDisabled && "opacity-50 cursor-not-allowed"
)
```

**Responsive Breakpoints**:
- No prefix: Mobile (0px - 640px)
- `sm:`: 640px+
- `md:`: 768px+
- `lg:`: 1024px+
- `xl:`: 1280px+
- `2xl:`: 1536px+

### 5. Type Safety with TypeScript

```typescript
// Define interfaces for data structures
interface Room {
  id: string
  name: string
  category: string
  description: string
  image: string
  features: string[]
  scarcity: string
}

interface Experience {
  title: string
  description: string
  icon: string
  image: string
}

// Use in components
const renderRooms = (rooms: Room[]) => {
  return rooms.map((room: Room) => (
    <div key={room.id}>
      <h3>{room.name}</h3>
    </div>
  ))
}
```

---

## 🔄 Common Development Tasks

### Task 1: Update Room Information

1. Open `lib/constants.ts`
2. Find `ROOMS` array
3. Update specific room object
4. Save file (auto hot-reload in browser)
5. Verify on `/` or `/rooms` page

```typescript
// Example: Update Cedar room
{
  id: "cedar",
  name: "Cedar",
  // ... update any fields ...
  scarcity: "Limited Availability",  // Changed
}
```

### Task 2: Add New Section to Homepage

1. Create new component in `components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add to JSX in desired position
4. Style with Tailwind
5. Test responsiveness

```typescript
// app/page.tsx
import NewSection from "@/components/NewSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <NewSection />  {/* Add here */}
      <Rooms />
      {/* ... */}
    </main>
  )
}
```

### Task 3: Create New Page

1. Create `app/[pagename]/page.tsx`
2. Add to `NAV_LINKS` in `lib/constants.ts`
3. Import necessary components
4. Build layout
5. Test navigation

```typescript
// app/blog/page.tsx
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Blog() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-12">
        {/* Blog content here */}
      </section>
      <Footer />
    </main>
  )
}
```

### Task 4: Modify Contact Form

1. Open `app/contact/page.tsx`
2. Update form fields as needed
3. Ensure API endpoint matches (`/api/contact`)
4. Test form submission
5. Check console logs for received data

---

## 🐛 Debugging Tips

### 1. Check Console Logs

```bash
# Development server terminal
# Look for errors, warnings, and info logs

# Browser DevTools Console (F12)
# Check for JavaScript errors
```

### 2. Check Next.js Build Errors

```bash
pnpm build
# Shows all TypeScript, ESLint, and Next.js errors
# Fix errors before deploying
```

### 3. Use Browser DevTools

- **Elements**: Check DOM structure
- **Styles**: Verify Tailwind classes apply
- **Network**: Check API calls
- **Console**: Check JavaScript errors
- **Responsive**: Test different screen sizes

### 4. Common Issues

| Issue | Cause | Fix |
|-------|-------|-----|
| Image not showing | Wrong path | Path must start with `/photos/` |
| Component not updating | Cache issue | Hard refresh (Ctrl+Shift+R) |
| API error 500 | Validation failed | Check console logs on server |
| Type errors | Missing interface | Define interface in component |
| Styling broken | Tailwind not building | Run `pnpm build`, check Tailwind config |

---

## 📋 Code Quality Checklist

Before committing code:

- [ ] No TypeScript errors (`pnpm build` passes)
- [ ] No ESLint warnings (`pnpm lint` passes)
- [ ] Component is responsive (tested on 320px, 768px, 1200px)
- [ ] Images have alt text
- [ ] All links are functional
- [ ] Form validation works
- [ ] Mobile version tested
- [ ] Accessibility considered (keyboard navigation, color contrast)
- [ ] Performance acceptable (Lighthouse > 90)

---

## 🔄 Git Commit Message Convention

```
feat:  Add new feature                    # New feature
fix:   Fix bug in component               # Bug fix
style: Update hero section styling        # Styling only
docs:  Update README documentation        # Documentation
refactor: Reorganize component structure  # Code refactoring
perf:  Optimize image loading             # Performance
test:  Add unit tests                     # Tests
chore: Update dependencies                # Maintenance
```

**Example Commits**:
```
feat: Add new "Wellness" experience section
fix: Contact form not submitting on mobile
style: Update brand colors to match new logo
```

---

## 🚀 Performance Optimization Tips

### Image Optimization
```typescript
import Image from "next/image"

<Image
  src="/photos/cedar/view.jpg"
  alt="Cedar room view"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority  // Only for above-the-fold images
/>
```

### Code Splitting
```typescript
import dynamic from "next/dynamic"

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <div>Loading...</div>,
})
```

### CSS Best Practices
- ✅ Use Tailwind utilities (not custom CSS)
- ✅ Avoid inline styles
- ✅ Use Tailwind plugins for custom components
- ✅ Minimize CSS files (Tailwind purges unused)

---

## 📚 Helpful Resources

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **Framer Motion**: https://www.framer.com/motion
- **shadcn/ui**: https://ui.shadcn.com

---

*Last Updated: April 18, 2026*
*Framework: Next.js 16.2.4 | Language: TypeScript*
