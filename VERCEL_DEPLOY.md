# 🚀 Deploy to Vercel - Complete Guide

**Everything on Vercel** - Frontend, Backend, and Database! ✨

## ⚡ Quick Deploy (5 Minutes)

### Step 1: Cloudflare R2 Setup (2 min)

1. **Create account**: https://dash.cloudflare.com
2. **Create R2 bucket**:
   - Go to R2 → Create bucket
   - Name: `furniture-images`
   - Make it public: Settings → Public Access → Allow
3. **Get credentials**:
   - R2 → Manage R2 API Tokens → Create Token
   - Save: Account ID, Access Key, Secret Key, Bucket URL

### Step 2: Push to GitHub (1 min)

**Easy Method** (Recommended):
```bash
cd ~/Desktop/furniture-showcase
./PUSH_TO_GITHUB.sh
```

**Manual Method**:
```bash
cd ~/Desktop/furniture-showcase
git init
git add .
git commit -m "Furniture showcase website"
git remote add origin https://github.com/renukavarsani31-png/furniture-showcase.git
git branch -M main
git push -u origin main
```

📍 **Your Repository**: https://github.com/renukavarsani31-png/furniture-showcase

### Step 3: Deploy Backend on Vercel (2 min)

1. Go to https://vercel.com → Login with GitHub
2. Click **"Add New..." → "Project"**
3. Import: **renukavarsani31-png/furniture-showcase**
4. Configure:
   - **Root Directory**: `backend`
   - **Framework Preset**: Other
   - Click **Deploy**

5. **Add Postgres Database**:
   - Go to **Storage** tab
   - **Create Database** → Postgres
   - Name: `furniture-db`
   - Region: Closest to you
   - Click **Create**
   - Database auto-connects! ✅

6. **Add Environment Variables**:
   - Go to **Settings** → **Environment Variables**
   - Add these:

```env
# R2 Credentials (from Step 1)
R2_ACCOUNT_ID=your_cloudflare_account_id
R2_ACCESS_KEY_ID=your_r2_access_key
R2_SECRET_ACCESS_KEY=your_r2_secret_key
R2_BUCKET_NAME=furniture-images
R2_PUBLIC_URL=https://your-bucket-url.r2.dev

# Security
JWT_SECRET=your_random_32_character_string_here

# Admin Account (change these!)
ADMIN_EMAIL=admin@yourcompany.com
ADMIN_PASSWORD=YourStrongPassword123!
```

7. **Redeploy**:
   - Go to **Deployments** tab
   - Latest deployment → **"..."** → **Redeploy**
   - Copy your backend URL: `https://furniture-showcase-backend.vercel.app`

### Step 4: Run Database Migrations

**Option A: Vercel CLI (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link to your backend project
cd ~/Desktop/furniture-showcase/backend
vercel link

# Pull environment variables
vercel env pull .env.local

# Run migrations
export $(cat .env.local | xargs) && npm run migrate && npm run seed
```

**Option B: Local with production database**
```bash
cd backend
# Copy POSTGRES_URL from Vercel dashboard
export POSTGRES_URL="postgres://..."
npm run migrate
npm run seed
```

### Step 5: Deploy Frontend on Vercel (1 min)

1. In Vercel → **"Add New..." → "Project"**
2. Import **same repo**: **renukavarsani31-png/furniture-showcase**
3. Configure:
   - **Root Directory**: `frontend`
   - **Framework Preset**: Next.js
4. **Add Environment Variable**:
   ```env
   NEXT_PUBLIC_API_URL=https://your-backend.vercel.app/api
   ```
   (Use your backend URL from Step 3)
5. Click **Deploy**
6. Your site is LIVE! 🎉
   - URL: `https://furniture-showcase.vercel.app`

## ✅ You're Done!

**Your Website**:
- Frontend: https://furniture-showcase.vercel.app
- Backend: https://furniture-showcase-backend.vercel.app
- Database: Vercel Postgres
- Images: Cloudflare R2

**Admin Login**:
- URL: https://furniture-showcase.vercel.app/admin/login
- Email: (your ADMIN_EMAIL)
- Password: (your ADMIN_PASSWORD)

## 🎨 Add Custom Domain (Optional)

### Frontend Domain
1. Go to frontend project → **Settings** → **Domains**
2. Add: `www.yourfurniture.com`
3. Follow DNS instructions (add CNAME record)
4. SSL: Automatic! ✅

### Backend Domain  
1. Go to backend project → **Settings** → **Domains**
2. Add: `api.yourfurniture.com`
3. Update DNS (add CNAME record)
4. Update frontend env: `NEXT_PUBLIC_API_URL=https://api.yourfurniture.com/api`

## 🔄 Auto-Deploy Setup

Every git push auto-deploys!

```bash
# Make changes
git add .
git commit -m "Update furniture photos"
git push

# Both frontend and backend auto-deploy! ✨
```

## 📊 Monitor Your Site

### Vercel Dashboard

**Backend Project**:
- **Functions**: View API logs
- **Storage**: Browse database
- **Deployments**: View history
- **Analytics**: API usage

**Frontend Project**:
- **Analytics**: Page views, visitors
- **Speed Insights**: Performance
- **Deployments**: Build logs

### Cloudflare R2:
- **Dashboard**: View storage usage
- **Metrics**: Bandwidth (unlimited!)

## 🐛 Troubleshooting

### ❌ Backend deployment failed?
```bash
# Check logs in Vercel dashboard
Common fixes:
- Verify all env variables are set
- Check vercel.json exists in backend folder
- Ensure package.json scripts are correct
```

### ❌ Database connection error?
```bash
# Verify Postgres is connected:
1. Backend project → Storage tab
2. Should see "furniture-db" connected
3. POSTGRES_URL should be auto-populated in env variables
```

### ❌ Frontend can't connect to backend?
```bash
# Check NEXT_PUBLIC_API_URL:
1. Frontend project → Settings → Environment Variables
2. Should be: https://your-backend.vercel.app/api
3. Redeploy frontend after changing
```

### ❌ Images not uploading?
```bash
# Verify R2 credentials:
1. All R2 env variables set in backend?
2. Bucket is public in Cloudflare?
3. Check backend logs for errors
```

### ❌ Migrations haven't run?
```bash
# Run migrations:
vercel link (to your backend project)
vercel env pull
npm run migrate
npm run seed

# Verify in Vercel Storage → Browse database
```

## 💰 Cost Breakdown

| Item | Limit | Cost |
|------|-------|------|
| **Vercel Frontend** | 100GB bandwidth | $0 |
| **Vercel Backend** | 100GB compute | $0 |
| **Vercel Postgres** | 256MB database | $0 |
| **Cloudflare R2** | 10GB images | $0 |
| **SSL Certificates** | Unlimited | $0 |
| **Auto Deployments** | Unlimited | $0 |
| **TOTAL** | | **$0/month** |

### When to Upgrade?

**Vercel Pro ($20/month)** when you need:
- More than 100GB bandwidth
- Larger database (5GB)
- Team collaboration
- Advanced analytics

Most small furniture businesses stay free for years! 🎉

## 📈 What Your Free Tier Handles

- ✅ **1,000+ furniture photos** (10GB R2 storage)
- ✅ **200,000 page views/month** (100GB bandwidth)
- ✅ **10,000+ visitors/month** (Vercel functions)
- ✅ **Unlimited inquiries** via contact form
- ✅ **Instant global delivery** (CDN)

## 🎓 Next Steps

1. **Change admin password** (first login)
2. **Upload your furniture photos**
3. **Organize into categories**:
   - Doors
   - Bedrooms
   - Kitchens
   - TV Units
   - Halls & Dining
   - Wardrobes
   - Showroom
4. **Add contact info** in website footer
5. **Share with customers!** 🎉

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Community**: https://github.com/vercel/vercel/discussions
- **Cloudflare R2**: https://developers.cloudflare.com/r2

---

**Congratulations! Your furniture showcase is LIVE! 🎊**

Visit: https://furniture-showcase.vercel.app
