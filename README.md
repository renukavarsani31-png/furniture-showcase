# Furniture Showcase Website

A modern furniture portfolio website for showcasing your work - doors, bedrooms, kitchens, halls, showrooms, and more.

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hook Form** - Form handling
- **Next Image** - Optimized images

### Backend
- **Node.js + Express** - API server
- **PostgreSQL** - Database
- **Knex.js** - SQL query builder
- **Cloudflare R2** - Image storage (S3-compatible)
- **Multer** - File uploads

## Features

✅ **Image Galleries** by category:
  - Doors
  - Bedrooms
  - Kitchens
  - Halls
  - Showrooms
  - TV Units
  - Wardrobes
  - Custom Furniture

✅ **Filter & Search** - Browse by room type
✅ **Contact Form** - Customer inquiries
✅ **Admin Panel** - Upload and manage projects
✅ **Responsive Design** - Mobile-friendly
✅ **Image Optimization** - Fast loading
✅ **Cloudflare R2** - Free image storage

## Project Structure

```
furniture-showcase/
├── frontend/          # Next.js application
│   ├── app/          # App router pages
│   ├── components/   # Reusable components
│   ├── lib/          # Utilities
│   └── public/       # Static assets
├── backend/          # Express API
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   └── config/
│   ├── migrations/   # Knex migrations
│   └── knexfile.js   # Knex configuration
└── README.md
```

## Setup Instructions

### 1. Cloudflare R2 Setup (Free Tier)

1. Go to https://dash.cloudflare.com
2. Create R2 bucket: "furniture-images"
3. Get API credentials:
   - Account ID
   - Access Key ID
   - Secret Access Key
   - Bucket URL

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Add your credentials to .env
npm run migrate
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env.local
# Add backend API URL
npm run dev
```

### 4. Database Setup

```bash
# Create PostgreSQL database
createdb furniture_showcase

# Run migrations
cd backend
npm run migrate
```

## Environment Variables

### Backend (.env)
```
DATABASE_URL="postgresql://user:password@localhost:5432/furniture_showcase"
PORT=5000
R2_ACCOUNT_ID=your_account_id
R2_ACCESS_KEY_ID=your_access_key
R2_SECRET_ACCESS_KEY=your_secret_key
R2_BUCKET_NAME=furniture-images
R2_PUBLIC_URL=your_bucket_public_url
JWT_SECRET=your_secret_key
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Usage

1. **Upload Photos**: Use admin panel to upload furniture images
2. **Categorize**: Assign categories (doors, bedrooms, etc.)
3. **Public View**: Customers browse your portfolio
4. **Contact**: Customers can inquire via contact form

## Business Information

**Company**: Hira Sales
**Location**: Madhapar
**Services**: Custom furniture, doors, bedrooms, kitchens, halls

## Free Hosting Options

### Recommended Free Stack

#### Both Frontend & Backend - **Vercel** ✅ 100% FREE
- **Why**: Everything in one place, super easy!
- **Free Tier**: 
  - 100GB bandwidth/month
  - Serverless functions
  - PostgreSQL database (256MB)
  - Automatic scaling
  - Custom domains with SSL
- **URL**: https://vercel.com

**Benefits of All-Vercel Setup:**
- 🎯 Single platform (easier management)
- 🚀 Faster deployment (one click)
- 🔄 Automatic database connection
- 💾 Built-in PostgreSQL
- 🆓 Completely free for small sites
- 📊 Unified analytics dashboard

**Steps:**
1. Push code to GitHub (one repo)
2. Deploy backend to Vercel (add Postgres)
3. Deploy frontend to Vercel
4. Both auto-deploy on git push! ✨

#### Image Storage - **Cloudflare R2** ✅ FREE
- **Free Tier**: 10GB storage, unlimited bandwidth
- **No Egress Fees**: Unlike AWS S3
- **URL**: https://cloudflare.com

### Complete Free Hosting Setup

```bash
# 1. Backend on Vercel
- Go to vercel.com
- Import GitHub repo: furniture-showcase (root: backend)
- Add Vercel Postgres from Storage tab
- Environment Variables (see DEPLOYMENT.md)
- Deploy

# 2. Frontend on Vercel
- Import same GitHub repo (root: frontend)
- Environment Variables:
  NEXT_PUBLIC_API_URL=https://your-backend.vercel.app/api
- Deploy

# 3. Connect Custom Domain (Optional but FREE)
- Both projects: Settings → Domains
- Frontend: www.yoursite.com
- Backend: api.yoursite.com
- SSL: Automatic!
```

### Cost Breakdown (100% FREE)

| Service | Free Tier | Cost |
|---------|-----------|------|
| **Vercel Frontend** | 100GB bandwidth/month | $0 |
| **Vercel Backend** | 100GB invocations/month | $0 |
| **Vercel Postgres** | 256MB database | $0 |
| **Cloudflare R2** (Images) | 10GB storage | $0 |
| **Domain** (Optional) | - | $10-15/year |
| **SSL Certificates** | Included | $0 |
| **Total Monthly** | - | **$0** |

### Alternative Free Options

#### Option 2: Vercel + Neon Database
- **Frontend**: Vercel
- **Backend**: Vercel Serverless
- **Database**: Neon (free PostgreSQL)
- **Images**: Cloudflare R2

#### Option 3: All Serverless
- **Frontend**: Vercel
- **Backend**: Vercel API Routes (built into Next.js)
- **Database**: Vercel Postgres
- **Images**: Cloudflare R2

### Production Checklist

✅ Push code to GitHub  
✅ Deploy backend to Vercel (with Postgres)
✅ Deploy frontend to Vercel  
✅ Setup Cloudflare R2 bucket  
✅ Add environment variables  
✅ Run database migrations  
✅ Create admin user  
✅ Upload initial photos  
✅ Add custom domain (optional)  
✅ Test contact form  
✅ Share with customers!  

### Traffic Estimates (Free Tier is Enough)

**Vercel Free Tier**: 100GB bandwidth
- Average page: ~500KB
- **200,000 page views/month** ✅

**Vercel Functions**: 100GB-hours compute
- API requests: Fast & efficient
- **10,000+ visitors/month** ✅

**Vercel Postgres**: 256MB database
- Perfect for 1000s of projects
- **All your furniture photos** ✅

Perfect for furniture business starting out! When you grow, upgrade is just $20/month.

## License

Private - All Rights Reserved
