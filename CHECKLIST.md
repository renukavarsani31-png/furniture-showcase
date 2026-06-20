# ✅ Complete Deployment Checklist

Follow this step-by-step to get your furniture website live!

## 📋 Pre-Deployment Checklist

### Local Setup (Optional - Skip if deploying directly)
- [ ] Node.js installed (v18+)
- [ ] PostgreSQL installed locally
- [ ] Git installed
- [ ] Code editor (VS Code recommended)

### Required Accounts (All FREE!)
- [ ] GitHub account created
- [ ] Vercel account created (signup with GitHub)
- [ ] Cloudflare account created

## 🚀 Deployment Steps

### Phase 1: Cloudflare R2 Setup (5 minutes)
- [ ] Login to Cloudflare dashboard
- [ ] Navigate to R2
- [ ] Create bucket named `furniture-images`
- [ ] Make bucket public (Settings → Public Access)
- [ ] Create API token
- [ ] Save credentials:
  - [ ] Account ID
  - [ ] Access Key ID
  - [ ] Secret Access Key
  - [ ] Public bucket URL

### Phase 2: GitHub Setup (2 minutes)
- [ ] Open terminal in `~/Desktop/furniture-showcase`
- [ ] Run: `./PUSH_TO_GITHUB.sh` (automatic script)
  - OR manually:
    - [ ] Run: `git init`
    - [ ] Run: `git add .`
    - [ ] Run: `git commit -m "Initial commit"`
    - [ ] Run: `git remote add origin https://github.com/renukavarsani31-png/furniture-showcase.git`
    - [ ] Run: `git push -u origin main`
- [ ] Verify code is on GitHub: https://github.com/renukavarsani31-png/furniture-showcase

### Phase 3: Backend Deployment (10 minutes)
- [ ] Login to Vercel (https://vercel.com)
- [ ] Click "Add New..." → "Project"
- [ ] Import: **renukavarsani31-png/furniture-showcase**
- [ ] Configure project:
  - [ ] Root Directory: `backend`
  - [ ] Framework: Other
- [ ] Click "Deploy" (wait 2 min)
- [ ] Add Postgres database:
  - [ ] Go to Storage tab
  - [ ] Create → Postgres
  - [ ] Name: `furniture-db`
  - [ ] Wait for creation
- [ ] Add environment variables (Settings → Environment Variables):
  - [ ] `R2_ACCOUNT_ID`
  - [ ] `R2_ACCESS_KEY_ID`
  - [ ] `R2_SECRET_ACCESS_KEY`
  - [ ] `R2_BUCKET_NAME`
  - [ ] `R2_PUBLIC_URL`
  - [ ] `JWT_SECRET` (generate random string)
  - [ ] `ADMIN_EMAIL`
  - [ ] `ADMIN_PASSWORD`
- [ ] Redeploy (Deployments → latest → Redeploy)
- [ ] Copy backend URL (save it!)

### Phase 4: Run Database Migrations (5 minutes)
- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Login: `vercel login`
- [ ] Navigate to backend: `cd ~/Desktop/furniture-showcase/backend`
- [ ] Link project: `vercel link`
- [ ] Pull env: `vercel env pull .env.local`
- [ ] Run migrations: `export $(cat .env.local | xargs) && npm run migrate`
- [ ] Run seeds: `export $(cat .env.local | xargs) && npm run seed`
- [ ] Verify in Vercel: Storage → Browse database

### Phase 5: Frontend Deployment (5 minutes)
- [ ] In Vercel: "Add New..." → "Project"
- [ ] Import same repo: **renukavarsani31-png/furniture-showcase**
- [ ] Configure:
  - [ ] Root Directory: `frontend`
  - [ ] Framework: Next.js
- [ ] Add environment variable:
  - [ ] `NEXT_PUBLIC_API_URL` = your backend URL + `/api`
- [ ] Click "Deploy"
- [ ] Wait 2-3 minutes
- [ ] Copy frontend URL

### Phase 6: Verification (3 minutes)
- [ ] Visit frontend URL
- [ ] Homepage loads successfully
- [ ] Go to `/admin/login`
- [ ] Login with admin credentials
- [ ] Verify admin panel loads
- [ ] Backend API responds: Visit backend URL `/health`

## 🎨 Post-Deployment Setup

### Initial Configuration (15 minutes)
- [ ] Login to admin panel
- [ ] Change admin password (Profile → Change Password)
- [ ] Verify all categories are present:
  - [ ] Doors
  - [ ] Bedrooms
  - [ ] Kitchens
  - [ ] TV Units & Living
  - [ ] Halls & Dining
  - [ ] Wardrobes
  - [ ] Showroom

### Upload Your Content (30 minutes)
- [ ] Gather your furniture photos
- [ ] Create first project:
  - [ ] Projects → New Project
  - [ ] Choose category
  - [ ] Add title and description
  - [ ] Upload 3-5 images
  - [ ] Set featured image
  - [ ] Click Save
- [ ] Repeat for 5-10 projects
- [ ] Test viewing on frontend

### Testing (10 minutes)
- [ ] Browse public website
- [ ] Test category filtering
- [ ] View project details
- [ ] Submit test inquiry via contact form
- [ ] Check inquiry in admin panel
- [ ] Test on mobile device
- [ ] Share link with friend for feedback

## 🌐 Optional: Custom Domain

### Domain Setup (If you have a domain)
- [ ] Purchase domain (Namecheap, GoDaddy, etc.)
- [ ] In Vercel frontend project:
  - [ ] Settings → Domains
  - [ ] Add: `www.yoursite.com`
  - [ ] Follow DNS instructions
- [ ] In Vercel backend project:
  - [ ] Settings → Domains
  - [ ] Add: `api.yoursite.com`
  - [ ] Follow DNS instructions
- [ ] Update frontend env:
  - [ ] `NEXT_PUBLIC_API_URL` = `https://api.yoursite.com/api`
  - [ ] Redeploy frontend
- [ ] Wait for DNS propagation (10-60 min)
- [ ] Test custom domains

## 📊 Monitoring Setup

### Vercel Analytics
- [ ] Frontend project → Analytics tab
- [ ] Enable Web Analytics (free)
- [ ] Monitor page views

### Set Up Alerts
- [ ] Vercel → Project Settings → Notifications
- [ ] Enable email notifications for:
  - [ ] Deployment failures
  - [ ] Build errors

## 🔒 Security Checklist

### Immediate Actions
- [ ] Changed default admin password
- [ ] Saved admin credentials securely
- [ ] JWT_SECRET is random and secure
- [ ] Environment variables not committed to git
- [ ] `.env` in `.gitignore`

### Recommended
- [ ] Enable 2FA on Vercel account
- [ ] Enable 2FA on GitHub account
- [ ] Enable 2FA on Cloudflare account
- [ ] Regular password changes (every 3 months)

## 📱 Marketing & Launch

### Prepare Marketing Materials
- [ ] Take screenshots of website
- [ ] Create social media posts
- [ ] Prepare email announcement
- [ ] Print business cards with website URL

### Announce Launch
- [ ] Share on Facebook
- [ ] Share on Instagram
- [ ] Share on WhatsApp Business
- [ ] Email existing customers
- [ ] Update Google My Business
- [ ] Add website to business listings

## 🎯 Ongoing Maintenance

### Weekly Tasks
- [ ] Check for new inquiries
- [ ] Respond to customer messages
- [ ] Upload new projects

### Monthly Tasks
- [ ] Review analytics
- [ ] Check website performance
- [ ] Backup database (Vercel auto-backups)
- [ ] Update featured projects

### Quarterly Tasks
- [ ] Review and update pricing
- [ ] Add seasonal content
- [ ] Update portfolio with best work
- [ ] Review and optimize SEO

## 📈 Growth Checklist

### When You Need More
- [ ] Monitor Vercel usage (Dashboard → Usage)
- [ ] Watch for:
  - [ ] >80GB bandwidth used
  - [ ] >200MB database size
  - [ ] Slow response times
- [ ] Consider upgrading to Vercel Pro ($20/month) when:
  - [ ] Traffic exceeds free tier
  - [ ] Need larger database
  - [ ] Want advanced analytics

### Additional Features (Future)
- [ ] Add WhatsApp chat widget
- [ ] Add customer reviews section
- [ ] Add blog for furniture tips
- [ ] Add quote calculator
- [ ] Add before/after galleries
- [ ] Integrate with Instagram feed
- [ ] Add newsletter signup
- [ ] Add customer testimonials

## 🐛 Troubleshooting

### If Something Goes Wrong
- [ ] Check Vercel deployment logs
- [ ] Verify all environment variables
- [ ] Check database connection
- [ ] Test backend health endpoint
- [ ] Clear browser cache
- [ ] Try incognito mode
- [ ] Check Cloudflare R2 bucket is public
- [ ] Verify DNS settings (if using custom domain)

### Get Help
- [ ] Review error messages in Vercel logs
- [ ] Check VERCEL_DEPLOY.md troubleshooting section
- [ ] Vercel community: github.com/vercel/vercel/discussions
- [ ] Cloudflare community: community.cloudflare.com

## ✅ Final Checklist

### Before Going Live
- [ ] Website loads on desktop
- [ ] Website loads on mobile
- [ ] All categories visible
- [ ] At least 5 projects uploaded
- [ ] Contact form works
- [ ] Admin panel accessible
- [ ] Images loading fast
- [ ] No broken links
- [ ] Footer has contact info
- [ ] Privacy policy added (if required)

### Launch Day
- [ ] Take backup of database
- [ ] Share website link
- [ ] Monitor for issues
- [ ] Respond to first inquiries quickly
- [ ] Celebrate! 🎉

## 🎊 Success Metrics

Track these to measure success:
- [ ] Number of visitors (Vercel Analytics)
- [ ] Number of inquiries received
- [ ] Response time to inquiries
- [ ] Conversion rate (visitors → inquiries)
- [ ] Most viewed categories
- [ ] Most viewed projects
- [ ] Traffic sources

---

## 📝 Notes Section

Use this space for your own notes:

**Backend URL**: _________________________

**Frontend URL**: _________________________

**Admin Email**: _________________________

**Admin Password**: _______________________ (Keep secure!)

**R2 Bucket URL**: _________________________

**Deployment Date**: _________________________

**Custom Domain**: _________________________

---

**Congratulations on launching your furniture showcase website! 🎉**

**Questions?** Check [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md) or [START_HERE.md](./START_HERE.md)
