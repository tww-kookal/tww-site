# Quick Reference & Troubleshooting Guide

## 🚀 Quick Command Reference

### Development
```bash
pnpm dev          # Start dev server (http://localhost:3000)
pnpm build        # Build for production
pnpm start        # Run production server
pnpm lint         # Check code quality
```

### Git Workflow
```bash
git status        # See changes
git add .         # Stage all changes
git commit -m "message"  # Commit
git push origin main     # Push (triggers Vercel deploy)
```

### File Operations
```bash
# Add new room → Edit lib/constants.ts → ROOMS array
# Update logo → Add to /public/photos/logo/ → Update LOGOS object
# New page → Create app/[name]/page.tsx → Add to NAV_LINKS
```

---

## 🔧 Troubleshooting Common Issues

### Issue: "npm: command not found"
**Solution**: 
- Install Node.js from https://nodejs.org
- Use pnpm instead: `pnpm install`, `pnpm dev`

### Issue: Port 3000 already in use
**Solution**:
```bash
pnpm dev --port 3001
# Or kill process using port 3000
# Windows: netstat -ano | findstr :3000
```

### Issue: Images not loading in development
**Solution**:
1. Check image path starts with `/photos/`
2. Verify image exists in `/public/photos/` directory
3. Clear browser cache (Ctrl+Shift+Delete)
4. Restart dev server

### Issue: Contact form not working
**Solution**:
1. Check browser console for errors (F12)
2. Verify `/api/contact` route exists
3. Check server logs in terminal
4. Ensure form has name, phone, message fields

### Issue: TypeScript errors preventing build
**Solution**:
```bash
pnpm build          # See error details
# Fix types in component file
pnpm lint --fix     # Auto-fix what's possible
```

### Issue: CSS not applying (Tailwind classes ignored)
**Solution**:
1. Ensure class name is valid Tailwind utility
2. Check tailwind.config.ts includes correct paths
3. Restart dev server
4. Check no conflicting CSS in globals.css

### Issue: Deploy fails on Vercel
**Solution**:
1. Check Vercel deployment logs (dashboard)
2. Run `pnpm build` locally to match build environment
3. Check environment variables set in Vercel dashboard
4. Verify all imports are correct (no broken references)

---

## 📍 Where to Find Things

| What | Where |
|------|-------|
| Room data | `lib/constants.ts` → `ROOMS` |
| Experiences | `lib/constants.ts` → `EXPERIENCES` |
| Testimonials | `lib/constants.ts` → `TESTIMONIALS` |
| Navigation links | `lib/constants.ts` → `NAV_LINKS` |
| Homepage layout | `app/page.tsx` |
| Contact form | `app/contact/page.tsx` |
| API endpoint | `app/api/contact/route.ts` |
| Components | `components/` directory |
| Styling system | `tailwind.config.ts` |
| Global styles | `app/globals.css` |
| Images | `/public/photos/` |
| Logo files | `/public/photos/logo/` |

---

## ✏️ Most Common Edits

### Update Room Info
```
lib/constants.ts → Find ROOMS → Edit specific room object
```

### Add Testimonial
```
lib/constants.ts → Find TESTIMONIALS → Add new object to array
```

### Change Logo
```
1. Add image to /public/photos/logo/
2. Update LOGOS object in lib/constants.ts
3. Update icon path in layout.tsx if needed
```

### Add New Page
```
1. Create app/[name]/page.tsx
2. Add link to NAV_LINKS in lib/constants.ts
3. Build and test
```

### Fix Styling Issue
```
1. Check component className
2. Verify Tailwind class name is correct
3. Check if responsive breakpoint needed (md:, lg:)
4. Use browser DevTools to inspect element
```

---

## 🔍 File Sizes & Optimization

### Check Build Size
```bash
pnpm build
# Look for "Route (app)" in output to see page bundles
```

### Optimize Images
- Keep images under 1MB
- Use WebP format when possible
- Use Next.js Image component with proper sizes
- Compress before uploading: https://tinypng.com

---

## 🌐 Domain & Deployment Quick Facts

| Item | Value |
|------|-------|
| Domain | thewestwood.in |
| Host | Vercel |
| Git Trigger | Push to main branch |
| URL | https://thewestwood.in |
| Staging | Auto-generated preview per PR |
| Build Time | ~2-3 minutes |
| DNS Provider | GoDaddy |

---

## 📞 Key Contacts & URLs

| Item | URL/Contact |
|------|-------------|
| Next.js Docs | https://nextjs.org/docs |
| Vercel Dashboard | https://vercel.com/dashboard |
| GoDaddy Domain | https://www.godaddy.com |
| GitHub Repo | [Your repo URL] |
| React Docs | https://react.dev |
| Tailwind CSS | https://tailwindcss.com |

---

## 💾 Backup & Version Control

### Local Backup
```bash
git log --oneline          # See recent commits
git diff HEAD~1            # See what changed in last commit
git revert <commit-hash>   # Undo specific commit
```

### Restore Previous Version
```bash
git checkout <file-path>   # Restore single file
git reset --hard HEAD~1    # Undo last commit
```

---

## 🎯 Deployment Checklist (Before Pushing)

- [ ] `pnpm lint` passes with no errors
- [ ] `pnpm build` completes successfully
- [ ] Tested homepage on mobile & desktop
- [ ] All links working
- [ ] Images loading properly
- [ ] Contact form functional
- [ ] No console errors (check DevTools F12)
- [ ] Meta tags checked (title, description)
- [ ] Ready to `git push origin main`

---

## ⚡ Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Score | > 90 | [Check] |
| LCP (Largest Contentful Paint) | < 2.5s | [Check] |
| FID (First Input Delay) | < 100ms | [Check] |
| CLS (Cumulative Layout Shift) | < 0.1 | [Check] |
| Page Load Time | < 3s | [Check] |

**Check Performance**:
1. Build locally: `pnpm build && pnpm start`
2. Open DevTools (F12) → Lighthouse tab
3. Run audit and fix issues

---

## 🛠️ Emergency Fixes

### Site completely broken after deployment
```bash
# Option 1: Revert last commit
git revert HEAD
git push origin main

# Option 2: Rollback in Vercel
# Go to Vercel dashboard → Deployments → Click previous → "Promote"
```

### Lost unsaved work
```bash
git log --oneline           # Find last saved version
git checkout <file-path>    # Restore from git
```

### Database/API not responding
- Check API logs in Vercel dashboard
- Verify environment variables
- Check API endpoint is running
- Look for error stack traces in logs

---

## 📚 Learning Resources

- **[Next.js Learning](https://nextjs.org/learn)** - Official Next.js course
- **[React Dev Docs](https://react.dev)** - React documentation
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)** - TypeScript guide
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Utility-first CSS
- **[Vercel Docs](https://vercel.com/docs)** - Deployment documentation

---

## 📝 Notes & Updates Log

### Template for logging changes:
```markdown
## Update: [Date]
**Changed**: [What changed]
**Reason**: [Why changed]
**Files Modified**: [Files touched]
**Status**: ✅ Deployed / ⏳ Pending / 🔧 In Progress
**Notes**: [Any additional notes]
```

---

## 🎓 Learning Path for New Developers

### Week 1: Understand Project
1. Read `01_PROJECT_OVERVIEW.md`
2. Read `02_TECH_STACK_REFERENCE.md`
3. Explore file structure locally
4. Run `pnpm dev` and explore in browser

### Week 2: Make Content Updates
1. Read `04_CONTENT_MANAGEMENT.md`
2. Update room info
3. Add testimonial
4. Test changes locally
5. Push to Git

### Week 3: Build New Features
1. Read `05_DEVELOPMENT_WORKFLOW.md`
2. Create new component
3. Add to homepage
4. Test responsiveness
5. Deploy to Vercel

### Week 4: Deployment & DevOps
1. Read `03_DEPLOYMENT_GUIDE.md`
2. Set up Vercel monitoring
3. Configure GoDaddy DNS
4. Set up error alerts
5. Document deployment process

---

## ✨ Pro Tips

1. **Use browser DevTools regularly**: F12 to check styles, console errors
2. **Responsive Design**: Always test on mobile first (320px)
3. **Git commits**: Commit frequently with descriptive messages
4. **TypeScript**: Trust the type system, fix errors immediately
5. **Performance**: Use Next.js Image component for all photos
6. **Testing**: Test contact form, links, and images before deploy
7. **Documentation**: Update guides when workflows change
8. **Monitoring**: Check Vercel logs after each deployment

---

*Last Updated: April 18, 2026*
*Quick Reference for The Westwood Development Team*
