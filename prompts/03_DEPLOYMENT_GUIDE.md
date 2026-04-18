# Deployment & Domain Configuration Guide

## 🚀 Deployment Platform: Vercel

### Why Vercel?
- **Native Next.js Support**: Built by the creators of Next.js
- **Zero-Config Deployment**: Push to Git → Auto-deploy
- **Performance**: Global CDN, edge computing, serverless functions
- **Monitoring**: Built-in analytics, error tracking
- **Environment**: Staging and production environments

---

## 📋 Pre-Deployment Checklist

### Before Every Deployment
- [ ] Run `npm run lint` → No errors/warnings
- [ ] Run `npm run build` → Successful build locally
- [ ] Test all pages: `/`, `/rooms`, `/experience`, `/gallery`, `/contact`
- [ ] Test API: POST to `/api/contact` with sample data
- [ ] Check images: All rooms, cafe, logo images load
- [ ] Test WhatsApp links: Click room buttons, verify pre-filled messages
- [ ] Mobile responsiveness: 320px, 768px, 1024px+ viewports
- [ ] Forms: Contact form submits and returns success
- [ ] Links: All navigation links work across pages
- [ ] Meta tags: Check Open Graph tags in browser dev tools

---

## 🔄 Deployment Process

### Step 1: Push to Git Repository
```bash
git add .
git commit -m "Update: [description of changes]"
git push origin main
```

### Step 2: Vercel Automatic Deployment
- Vercel watches your Git repository (GitHub/GitLab/Bitbucket)
- On push to `main` branch → Automatic build and deployment
- Staging URLs auto-generated for preview branches

### Step 3: Production URL
- **URL**: `https://tww-site.vercel.app` (default)
- **Custom Domain**: `https://thewestwood.in` (configured below)

---

## 🌐 GoDaddy Domain Configuration

### Domain: thewestwood.in

#### Step 1: Set Vercel Project Name
In Vercel dashboard:
1. Go to Project Settings
2. Set "Project Name" to match your preference
3. Domains section: Add custom domain

#### Step 2: Update GoDaddy DNS Records
In GoDaddy domain settings:

**Remove default nameservers**, add Vercel's:
```
dns1.vercel-dns.com
dns2.vercel-dns.com
```

Or manually add CNAME records:
```
CNAME: www → cname.vercel-dns.com
CNAME: @ → cname.vercel-dns.com (optional, for root)
```

#### Step 3: Verify Domain
- In Vercel dashboard, click "Verify DNS records"
- Wait 24-48 hours for DNS propagation
- Test with: `nslookup thewestwood.in`

#### Step 4: SSL Certificate
- Vercel auto-provisions Let's Encrypt certificate
- HTTPS enabled by default
- Verify: Green lock icon in browser

---

## 🔐 Environment Variables

### Development (local)
Create `.env.local` in project root:
```env
# API endpoints
NEXT_PUBLIC_API_URL=http://localhost:3000

# Analytics (if needed)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Production (Vercel)
Set in Vercel dashboard → Settings → Environment Variables:

```env
NEXT_PUBLIC_CONTACT_EMAIL=contact@thewestwood.in
NEXT_PUBLIC_WHATSAPP_NUMBER=+91-XXXXXXXXXX
NEXT_PUBLIC_RESORT_PHONE=+91-XXXXXXXXXX
```

**Note**: Variables prefixed with `NEXT_PUBLIC_` are exposed to browser (use for non-sensitive data only).

---

## 📊 Performance Monitoring

### Lighthouse Score Target: > 90

**Current Optimizations**:
- ✅ Image optimization (Next.js Image)
- ✅ Code splitting (per-route)
- ✅ CSS minification (Tailwind)
- ✅ Dev indicators disabled
- ✅ Lazy loading (Framer Motion)

**Monitor with**:
1. Vercel Analytics Dashboard
2. Google PageSpeed Insights
3. WebPageTest.org

---

## 🐛 Debugging Production Issues

### 1. Check Build Logs
- Vercel dashboard → Deployments tab
- Click failed build → View logs
- Look for TypeScript, ESLint, or Next.js errors

### 2. Check Runtime Errors
- Vercel dashboard → Functions tab
- Monitor serverless function logs
- Check `/api/contact` endpoint logs

### 3. Network Issues
- Open DevTools → Network tab
- Check failed requests
- Verify API calls (especially `/api/contact`)

### 4. Image Loading Issues
- Check if images in `/public` exist
- Verify `sizes` attribute on `<Image>` components
- Check Unsplash remote pattern in `next.config.ts`

---

## 🔄 Rollback Strategy

### Rollback to Previous Version
1. Go to Vercel dashboard
2. Deployments tab
3. Find previous successful deployment
4. Click "..." → "Promote to Production"

### Via Git
```bash
git revert HEAD          # Create new commit reverting changes
git push origin main     # Triggers new Vercel deployment
```

---

## 🗂️ Vercel Project Structure

### Files Deployed
```
tww-site/
├── app/                 ✅ Deployed
├── components/          ✅ Deployed
├── lib/                 ✅ Deployed
├── public/              ✅ Deployed (static assets)
├── next.config.ts       ✅ Used during build
├── tsconfig.json        ✅ Used during build
├── tailwind.config.ts   ✅ Used during build
├── package.json         ✅ Used for dependencies
└── .env.local          ⚠️ Not deployed (use Vercel env vars)
```

### Files NOT Deployed
- `.git/` - Version control
- `node_modules/` - Installed from package.json
- `.env.local` - Use Vercel dashboard instead
- `prompts/` - Documentation only (optional)

---

## 📱 Mobile Optimization Checklist

- [ ] Viewport meta tag in `layout.tsx`
- [ ] MobileStickyCTA component renders correctly
- [ ] Touch targets > 44px for buttons
- [ ] Form inputs have proper mobile keyboard
- [ ] Images scale correctly on mobile
- [ ] No horizontal scrolling on 320px
- [ ] Text is readable without zoom

---

## 🔍 SEO Checklist Before Production

- [ ] Meta title: Concise, includes keywords
- [ ] Meta description: 155-160 characters
- [ ] Open Graph tags: `og:title`, `og:description`, `og:image`
- [ ] Favicon: Properly linked in manifest
- [ ] robots.txt: Allow indexing
- [ ] sitemap.xml: Submitted to Google Search Console
- [ ] Structured data: Schema.org markup
- [ ] Mobile-friendly: Responsive design working
- [ ] Page speed: Lighthouse > 90

---

## 🚨 Common Deployment Issues & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| Build fails | TypeScript error | Run `npm run build` locally, check error |
| 404 on images | Wrong path in `/public` | Verify image exists in public folder |
| Contact API not working | Environment variable missing | Add `NEXT_PUBLIC_CONTACT_EMAIL` to Vercel |
| Domain not resolving | DNS not updated | Wait 24-48 hours or check GoDaddy settings |
| Slow page load | Large images | Use proper `sizes` attribute, enable priority |
| Form submission fails | CORS issue (if separate backend) | Configure CORS headers in API route |

---

## 📞 Production Support Contacts

**Vercel Support**: https://vercel.com/support

**GoDaddy Support**: https://www.godaddy.com/help

**Next.js Documentation**: https://nextjs.org/docs

---

## 🎯 Post-Deployment Tasks

1. **Verify Live Site**
   - Visit https://thewestwood.in
   - Test all pages and functionality
   - Check contact form submission

2. **Monitor First 24 Hours**
   - Check Vercel Analytics dashboard
   - Review any error logs
   - Verify no broken links or images

3. **Submit to Search Engines**
   - Google Search Console: Submit sitemap
   - Bing Webmaster Tools: Add site
   - Monitor indexing status

4. **Set Up Monitoring**
   - Vercel Analytics
   - Google Analytics (if configured)
   - Email alerts for deployment failures

5. **Backup & Documentation**
   - Keep deployment notes
   - Document any custom configurations
   - Update this guide with new learnings

---

## 📝 Deployment Log Template

```markdown
## Deployment: [Date] [Time]
- **Deployed By**: [Name]
- **Changes**: [Brief description]
- **Build Time**: [X seconds]
- **Tests Passed**: Yes/No
- **Issues**: [Any encountered]
- **Status**: ✅ Successful / ⚠️ Issues / ❌ Failed
```

---

*Last Updated: April 18, 2026*
*Domain: thewestwood.in | Deployment: Vercel*
