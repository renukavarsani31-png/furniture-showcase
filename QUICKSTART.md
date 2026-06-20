# ⚡ Quick Start Guide - Furniture Showcase

Get your furniture website running locally in 10 minutes!

## 🚀 Local Development Setup

### 1. Prerequisites

Make sure you have:
- Node.js 18+ installed
- PostgreSQL installed locally
- Git

### 2. Clone & Setup

```bash
cd ~/Desktop/furniture-showcase

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies  
cd ../frontend
npm install
```

### 3. Database Setup

```bash
# Create PostgreSQL database
createdb furniture_showcase

# Or use psql:
psql -U postgres
CREATE DATABASE furniture_showcase;
\q
```

### 4. Backend Configuration

```bash
cd backend

# Copy environment file
cp .env.example .env

# Edit .env file with your settings:
# For local development, you can skip R2 setup initially
nano .env
```

**Minimum .env for local:**
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/furniture_showcase"
PORT=5000
JWT_SECRET=your-secret-key-change-this
ADMIN_EMAIL=admin@localhost.com
ADMIN_PASSWORD=admin123
```

### 5. Run Migrations & Seeds

```bash
# Still in backend folder
npm run migrate        # Create database tables
npm run seed          # Insert default data (categories & admin user)
```

### 6. Start Backend

```bash
npm run dev
# Server running on http://localhost:5000
```

### 7. Start Frontend (New Terminal)

```bash
cd ~/Desktop/furniture-showcase/frontend

# Copy environment file
cp .env.example .env.local

# Edit with backend URL
echo "NEXT_PUBLIC_API_URL=http://localhost:5000/api" > .env.local

# Start development server
npm run dev
# Frontend running on http://localhost:3000
```

## 🎉 You're Ready!

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Admin Login**: http://localhost:3000/admin/login
  - Email: `admin@localhost.com`
  - Password: `admin123`

## 📁 Project Structure

```
furniture-showcase/
├── backend/                 # Express API
│   ├── src/
│   │   ├── routes/         # API endpoints
│   │   ├── middleware/     # Auth, upload
│   │   └── config/         # Database, R2
│   ├── migrations/         # Database schema
│   └── seeds/             # Default data
│
└── frontend/              # Next.js app
    ├── app/              # Pages (App Router)
    ├── components/       # UI components
    └── lib/             # Utilities
```

## 🔧 Development Commands

### Backend
```bash
npm run dev              # Start dev server
npm run migrate          # Run migrations
npm run migrate:rollback # Rollback last migration
npm run seed             # Seed database
```

### Frontend
```bash
npm run dev             # Start dev server
npm run build           # Build for production
npm run start           # Start production server
```

## 📝 Adding Cloudflare R2 (Optional for Local)

If you want to test image uploads locally:

1. Create R2 bucket on Cloudflare
2. Get credentials
3. Add to backend `.env`:
```env
R2_ACCOUNT_ID=your_account_id
R2_ACCESS_KEY_ID=your_access_key
R2_SECRET_ACCESS_KEY=your_secret_key
R2_BUCKET_NAME=furniture-images
R2_PUBLIC_URL=https://your-bucket.r2.dev
```

## 🐛 Common Issues

### Port already in use?
```bash
# Change port in backend/.env
PORT=5001
```

### Can't connect to database?
```bash
# Check PostgreSQL is running
sudo systemctl status postgresql  # Linux
brew services list                # Mac

# Check connection string in .env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/furniture_showcase"
```

### Frontend can't reach backend?
```bash
# Check NEXT_PUBLIC_API_URL in frontend/.env.local
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Make sure backend is running on port 5000
```

## 📚 Next Steps

1. **Test the API**: http://localhost:5000/health
2. **Browse categories**: http://localhost:3000
3. **Login to admin**: http://localhost:3000/admin/login
4. **Upload test photos** (need R2 setup)
5. **Deploy to production**: See [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🎨 Business Information

Update your business info in:
- `frontend/components/Footer.tsx` - Contact details
- `frontend/app/page.tsx` - Home page content
- `README.md` - Project documentation

## 🚀 Ready to Deploy?

When ready for production, follow: **[DEPLOYMENT.md](./DEPLOYMENT.md)**

Your free hosting stack:
- ✅ Vercel (Frontend)
- ✅ Railway (Backend + Database)  
- ✅ Cloudflare R2 (Images)
- ✅ **Total: $0/month**

---

**Need help?** Check the README.md for detailed documentation!
