# ⚡ Quick Reference Card

## 🚀 Deploy in 3 Commands

```bash
# 1. Push to GitHub
cd ~/Desktop/furniture-showcase
./PUSH_TO_GITHUB.sh

# 2. Deploy to Vercel (via web interface)
# Go to: https://vercel.com
# Import: renukavarsani31-png/furniture-showcase
# Deploy backend + frontend

# 3. Run migrations
cd backend
npm i -g vercel
vercel link
vercel env pull
npm run migrate && npm run seed
```

**Done! Your site is live! 🎉**

---

## 📋 Essential Links

| Resource | URL |
|----------|-----|
| **Your GitHub** | https://github.com/renukavarsani31-png/furniture-showcase |
| **Vercel Dashboard** | https://vercel.com/dashboard |
| **Cloudflare Dashboard** | https://dash.cloudflare.com |
| **Documentation** | [START_HERE.md](./START_HERE.md) |
| **Deployment Guide** | [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md) |
| **Checklist** | [CHECKLIST.md](./CHECKLIST.md) |

---

## 🔑 Important Credentials

### Cloudflare R2
```
Account ID: ___________________________
Access Key: ___________________________
Secret Key: ___________________________
Bucket Name: furniture-images
Public URL: ___________________________
```

### Admin Account
```
Email: ___________________________
Password: ___________________________
```

### Vercel URLs
```
Backend: ___________________________
Frontend: ___________________________
```

---

## 🎯 Common Commands

### Backend Development
```bash
cd backend
npm install              # Install dependencies
npm run dev             # Start dev server
npm run migrate         # Run migrations
npm run migrate:rollback # Rollback migration
npm run seed            # Seed database
```

### Vercel CLI
```bash
vercel login            # Login to Vercel
vercel                  # Deploy current directory
vercel env pull         # Pull environment variables
vercel logs             # View logs
vercel --prod           # Deploy to production
```

### Git Commands
```bash
git status              # Check status
git add .               # Stage all files
git commit -m "message" # Commit changes
git push                # Push to GitHub
```

---

## 📁 Project Structure

```
furniture-showcase/
├── backend/           → Deploy to Vercel (root: backend)
│   ├── src/          → Source code
│   ├── migrations/   → Database schema
│   └── seeds/        → Default data
│
├── frontend/         → Deploy to Vercel (root: frontend)
│   └── (Next.js app)
│
└── docs/             → All .md files
```

---

## 🔧 Environment Variables

### Backend (.env)
```env
POSTGRES_URL=postgresql://...
R2_ACCOUNT_ID=...
R2_ACCESS_KEY_ID=...
R2_SECRET_ACCESS_KEY=...
R2_BUCKET_NAME=furniture-images
R2_PUBLIC_URL=https://...
JWT_SECRET=random_32_char_string
ADMIN_EMAIL=admin@yourcompany.com
ADMIN_PASSWORD=YourStrongPassword123!
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=https://your-backend.vercel.app/api
```

---

## 🛣️ API Endpoints

### Public
```
GET  /api/categories          List categories
GET  /api/projects            List projects
GET  /api/projects/:slug      Get project
POST /api/inquiries           Submit form
GET  /health                  Health check
```

### Admin (needs JWT token)
```
POST /api/auth/login          Login
GET  /api/auth/me             Current user
POST /api/projects            Create project
POST /api/images/upload/:id   Upload images
GET  /api/inquiries           List inquiries
```

---

## 🐛 Troubleshooting Quick Fixes

### Backend won't start?
```bash
# Check environment variables in Vercel
# Verify POSTGRES_URL is set
# Check deployment logs
```

### Frontend can't connect?
```bash
# Verify NEXT_PUBLIC_API_URL
# Should end with /api
# Redeploy after changing env vars
```

### Database error?
```bash
# Run migrations: npm run migrate
# Check Vercel Storage → Postgres
# Verify connection string
```

### Images not uploading?
```bash
# Check R2 credentials
# Verify bucket is public
# Test R2 connection in Cloudflare
```

---

## 💰 Free Tier Limits

| Service | Limit | Status |
|---------|-------|--------|
| **Vercel Bandwidth** | 100GB/month | ✅ FREE |
| **Vercel Functions** | 100GB-hours | ✅ FREE |
| **Vercel Postgres** | 256MB | ✅ FREE |
| **Cloudflare R2** | 10GB storage | ✅ FREE |
| **R2 Bandwidth** | Unlimited | ✅ FREE |
| **SSL Certificates** | Unlimited | ✅ FREE |

**Total: $0/month** 🎉

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Community**: https://github.com/vercel/vercel/discussions
- **Cloudflare R2**: https://developers.cloudflare.com/r2
- **Next.js Docs**: https://nextjs.org/docs
- **Knex.js Docs**: https://knexjs.org

---

## ✅ Deployment Checklist

**Before Deploy:**
- [ ] Cloudflare R2 bucket created
- [ ] R2 API credentials saved
- [ ] Code pushed to GitHub

**During Deploy:**
- [ ] Backend deployed to Vercel
- [ ] Postgres database added
- [ ] Environment variables set
- [ ] Frontend deployed to Vercel
- [ ] Migrations run
- [ ] Seeds run

**After Deploy:**
- [ ] Test website loads
- [ ] Login to admin panel
- [ ] Change admin password
- [ ] Upload test project
- [ ] Test contact form
- [ ] Share with customers!

---

## 🎨 Default Categories

1. Doors
2. Bedrooms
3. Kitchens
4. TV Units & Living
5. Halls & Dining
6. Wardrobes
7. Showroom

---

## 🚀 Quick Deploy Steps

1. **Setup Cloudflare R2** (5 min)
   - Create bucket
   - Get credentials
   
2. **Push to GitHub** (1 min)
   ```bash
   ./PUSH_TO_GITHUB.sh
   ```

3. **Deploy Backend** (3 min)
   - Vercel → Import repo
   - Root: `backend`
   - Add Postgres
   - Set env vars
   
4. **Run Migrations** (2 min)
   ```bash
   vercel env pull
   npm run migrate && npm run seed
   ```

5. **Deploy Frontend** (2 min)
   - Vercel → Import same repo
   - Root: `frontend`
   - Set `NEXT_PUBLIC_API_URL`

6. **Done!** 🎉

---

## 📊 Success Metrics

Track these in Vercel Analytics:
- Page views
- Unique visitors
- Top pages
- Inquiry submissions
- Response time

---

**GitHub**: https://github.com/renukavarsani31-png/furniture-showcase  
**Documentation**: [START_HERE.md](./START_HERE.md)  
**Deploy Guide**: [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md)  

**Your furniture showcase is ready to go live! 🚀**
