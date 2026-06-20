# 📸 Adding Owner Photos to Website

## Step-by-Step Instructions

### 1. Save the Photos from Chat

The two owner photos you shared need to be saved to your computer:

1. **Right-click** on each photo in the chat
2. Click **"Save Image As..."**
3. Save to: `~/Desktop/furniture-showcase/frontend/public/team/`
4. Name them exactly:
   - `owner-1.jpg` (first photo - traditional outfit with turban)
   - `owner-2.jpg` (second photo - glasses and vest)

**File locations should be**:
```
~/Desktop/furniture-showcase/frontend/public/team/owner-1.jpg
~/Desktop/furniture-showcase/frontend/public/team/owner-2.jpg
```

### 2. Update Owner Names and Details

Edit the file: `frontend/app/about/page.tsx`

Find these lines and update:
```tsx
<h3 className="text-2xl font-bold text-gray-900 mb-2">
  [Owner Name]  ← Change this
</h3>
<p className="text-amber-600 font-semibold mb-3">
  Founder & Master Craftsman  ← Update title if needed
</p>
<p className="text-gray-600">
  With over [X] years of experience...  ← Add real experience
</p>
```

Do the same for the second owner/team member.

### 3. Update Company Information

In the same file, update:
- Company story
- Years of experience
- Location details
- Contact information

### 4. Push to GitHub

After saving the photos:

```bash
cd ~/Desktop/furniture-showcase
git add .
git commit -m "Add owner photos and about page"
git push
```

### 5. Redeploy on Vercel

The site will auto-deploy, or manually trigger:
1. Go to Vercel dashboard
2. Your project → Deployments
3. Click "..." → "Redeploy"

---

## 🎨 About Page Features

Your new "About Us" page includes:

✅ **Owner Photo Gallery**
- Professional display of owner photos
- Names and titles
- Bio descriptions

✅ **Company Story**
- History of Hira Sales
- Services offered
- Values and mission

✅ **Visual Elements**
- Quality craftsmanship
- Custom designs
- Customer-first approach

✅ **Call to Action**
- Contact form link
- View portfolio link
- Showroom visit invitation

---

## 📍 Page URL

After deployment, visit:
**https://your-site.vercel.app/about**

---

## 🎯 Customization Tips

### Change Photo Layout
Edit `frontend/app/about/page.tsx`:
- Grid size: `grid md:grid-cols-2` → `grid md:grid-cols-3` (for 3 photos)
- Photo height: `h-96` → `h-80` (shorter) or `h-[500px]` (taller)

### Add More Team Members
Copy the owner card block:
```tsx
<div className="bg-white rounded-lg shadow-lg overflow-hidden">
  <div className="relative h-96">
    <Image src="/team/owner-3.jpg" ... />
  </div>
  ...
</div>
```

### Change Colors
- Amber/Orange: `amber-600` → `blue-600`, `green-600`, etc.
- Background: `bg-gray-50` → `bg-white`, `bg-blue-50`, etc.

---

## 📝 Owner Details Template

Use this template when updating:

```tsx
{/* Owner 1 */}
<h3>Mr. [First Name] [Last Name]</h3>
<p>Founder & CEO</p>
<p>
  With over 15 years of experience in furniture manufacturing,
  [Name] leads Hira Sales with a commitment to quality and 
  customer satisfaction. Specializing in traditional woodwork 
  with modern designs.
</p>

{/* Owner 2 */}
<h3>Mr. [First Name] [Last Name]</h3>
<p>Co-Founder & Design Director</p>
<p>
  [Name] brings expertise in custom furniture design and 
  client consultation. Ensures every project meets exact 
  specifications and exceeds expectations.
</p>
```

---

## ✅ Checklist

- [ ] Save owner-1.jpg to `/frontend/public/team/`
- [ ] Save owner-2.jpg to `/frontend/public/team/`
- [ ] Update owner names in about/page.tsx
- [ ] Update titles and bios
- [ ] Update company story
- [ ] Update years of experience
- [ ] Update location details
- [ ] Commit and push to GitHub
- [ ] Verify deployment on Vercel
- [ ] Visit /about page to check

---

**Questions?** The photos will appear automatically once saved to the correct location!
