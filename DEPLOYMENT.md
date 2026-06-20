# 🚀 Free Deployment Guide - Furniture Showcase

Complete step-by-step guide to deploy your furniture website for **FREE** on Vercel!

## 📋 Prerequisites

- GitHub account (free)
- Vercel account (free)
- Cloudflare account (free)

**Everything deploys to Vercel** - Frontend, Backend, and Database all in one place! 🎉

## 🎯 Deployment Steps

### Step 1: Setup Cloudflare R2 (Image Storage)

1. **Create Account**
   - Go to https://dash.cloudflare.com
   - Sign up (free, no credit card needed)

2. **Create R2 Bucket**
   ```
   - Go to R2 → Create bucket
   - Name: furniture-images
   - Location: Automatic
   - Click "Create bucket"
   ```

3. **Make Bucket Public**
   ```
   - Go to your bucket → Settings
   - Public access → Allow Access
   - Copy the Public bucket URL
   ```

4. **Get API Credentials**
   ```
   - Go to R2 → Manage R2 API Tokens
   - Create API Token
   - Name: furniture-api
   - Permissions: Object Read & Write
   - Copy and save:
     * Account ID
     * Access Key ID
     * Secret Access Key
   ```

### Step 2: Push to GitHub

```bash
cd Desktop/furniture-showcase
git init
git add .
git commit -m "Initial commit - Furniture Showcase"

# Create repo on GitHub
gh repo create furniture-showcase --public --source=. --push
# Or push manually to GitHub
```

### Step 3: Deploy Everything on Vercel (One Click!)

1. **Go to Vercel**
   - Visit https://vercel.com
   - Sign up/Login with GitHub
   - Click "Add New..." → "Project"
   - Import `furniture-showcase` repository

2. **Deploy Backend First**
   ```
   - Project: furniture-showcase
   - Framework Preset: Other
   - Root Directory: backend
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
   - Install Command: npm install
   ```

3. **Add Vercel Postgres (FREE)**
   ```
   - Go to Storage tab
   - Create Database → Postgres
   - Name: furniture-db
   - Click "Create"
   - Auto-connects to your backend!
   ```

4. **Backend Environment Variables**
   ```
   Settings → Environment Variables → Add all:
   
   # Database (auto-filled from Vercel Postgres)
   POSTGRES_URL (auto-generated)
   
   # From Cloudflare R2:
   R2_ACCOUNT_ID=your_account_id
   R2_ACCESS_KEY_ID=your_access_key_id
   R2_SECRET_ACCESS_KEY=your_secret_access_key
   R2_BUCKET_NAME=furniture-images
   R2_PUBLIC_URL=https://your-bucket.r2.dev
   
   # Security:
   JWT_SECRET=generate_random_string_here_32chars
   
   # Admin:
   ADMIN_EMAIL=admin@yourdomain.com
   ADMIN_PASSWORD=StrongPassword123!
   ```

5. **Redeploy Backend**
   ```
   - Deployments tab → Latest deployment → "..." → Redeploy
   - Wait for deployment
   - Copy URL: https://furniture-showcase-backend.vercel.app
   ```

6. **Run Database Migrations**
   ```
   Go to backend project → Settings → Functions
   Create a serverless function to run migrations (one-time)
   Or use Vercel CLI:
   
   npm i -g vercel
   vercel login
   cd backend
   vercel env pull
   npm run migrate
   npm run seed
   ```

### Step 4: Deploy Frontend on Vercel

1. **Deploy Frontend**
   ```
   - In Vercel: "Add New..." → "Project"
   - Import same repo: furniture-showcase
   - Framework Preset: Next.js
   - Root Directory: frontend
   ```

2. **Environment Variables**
   ```
   NEXT_PUBLIC_API_URL=https://furniture-showcase-backend.vercel.app/api
   ```

3. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉
   - URL: https://furniture-showcase.vercel.app

### Step 5: Custom Domain (Optional - FREE SSL)

#### Frontend Domain:
```
- Frontend Project → Settings → Domains
- Add: www.yourfurniture.com
- Follow DNS instructions
- SSL: Auto-configured (free)
```

#### Backend Domain:
```
- Backend Project → Settings → Domains
- Add: api.yourfurniture.com
- Update DNS records
- SSL: Auto-configured (free)
```

### Step 6: Initial Setup

1. **Login to Admin Panel**
   ```
   URL: https://yoursite.vercel.app/admin/login
   Email: admin@yourdomain.com (from env variable)
   Password: StrongPassword123! (from env variable)
   ```

2. **Change Password**
   - Go to Profile → Change Password
   - Use a strong password!

3. **Upload Your Photos**
   - Go to Projects → New Project
   - Select category (Doors, Bedrooms, etc.)
   - Upload images from your Google photos
   - Add title and description
   - Click Save

## 🔄 Auto-Deployment

**Every time you push to GitHub:**
- ✅ Backend redeploys automatically on Vercel
- ✅ Frontend redeploys automatically on Vercel

```bash
git add .
git commit -m "Update"
git push
# Both services auto-deploy! ✨
```

## 📊 Monitoring & Management

### Vercel Dashboard (Backend + Frontend)
- **Analytics**: Project → Analytics (both projects)
- **Logs**: Project → Deployments → View Function Logs
- **Database**: Storage → Postgres → Browse data
- **Performance**: Auto-optimized
- **Bandwidth**: 100GB/month free

### Cloudflare R2
- **Storage used**: R2 → Bucket → Metrics
- **Bandwidth**: Free unlimited!
- **Images**: 10GB free storage

## 🐛 Troubleshooting

### Backend not starting?
```bash
# Check Vercel backend logs:
# Common issues:
- POSTGRES_URL missing
- Environment variables not set
- Migration not run
```

### Frontend can't connect?
```bash
# Check environment variable in frontend project:
NEXT_PUBLIC_API_URL=https://your-backend.vercel.app/api

# Redeploy:
- Vercel → Frontend Project → Settings → Environment Variables
- Update NEXT_PUBLIC_API_URL
- Redeploy from Deployments tab
```

### Database connection error?
```bash
# In backend project:
# Go to Storage → Postgres
# Verify database is connected
# Check POSTGRES_URL is auto-populated
```

### Images not uploading?
```bash
# Check R2 credentials in Backend project:
- R2_ACCOUNT_ID
- R2_ACCESS_KEY_ID
- R2_SECRET_ACCESS_KEY
- R2_BUCKET_NAME
- R2_PUBLIC_URL

# Verify bucket is public in Cloudflare
```

## 💰 Cost Summary - 100% FREE!

| Service | Free Tier | Monthly Cost |
|---------|-----------|--------------|
| **Vercel (Frontend)** | 100GB bandwidth | $0 |
| **Vercel (Backend)** | 100GB invocations | $0 |
| **Vercel Postgres** | 256MB database | $0 |
| **Cloudflare R2** | 10GB storage | $0 |
| **SSL Certificates** | Included | $0 |
| **Auto Deployments** | Unlimited | $0 |
| **TOTAL** | | **$0/month** |

### What's Included FREE?
- ✅ Unlimited projects
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Serverless functions
- ✅ PostgreSQL database
- ✅ Auto-scaling
- ✅ GitHub integration
- ✅ Analytics

## 📈 Scaling (When you grow)

**Vercel Pro ($20/month)** - Upgrade when needed:
- 1TB bandwidth (vs 100GB)
- Larger database (5GB vs 256MB)
- Advanced analytics
- Team collaboration
- Priority support

**Cloudflare R2 Paid**:
- $0.015/GB storage after 10GB
- Still no egress fees!
- Unlimited requests

## 🎓 Next Steps

1. ✅ Upload all your furniture photos
2. ✅ Organize into categories
3. ✅ Add contact info in footer
4. ✅ Share website with customers!
5. ✅ Monitor inquiries in admin panel
6. ✅ Add more projects regularly

## 📞 Support

- Railway: https://railway.app/help
- Vercel: https://vercel.com/support
- Cloudflare: https://community.cloudflare.com

---

**Your furniture website is now LIVE and FREE! 🎉**

Share it: `https://yoursite.vercel.app`
