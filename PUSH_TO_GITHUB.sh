#!/bin/bash

# Furniture Showcase - Push to GitHub Script
# This script will push your project to GitHub

echo "🚀 Pushing Furniture Showcase to GitHub..."
echo ""

# Initialize git if not already initialized
if [ ! -d .git ]; then
    echo "📝 Initializing Git repository..."
    git init
else
    echo "✅ Git repository already initialized"
fi

# Add all files
echo "📦 Adding all files..."
git add .

# Commit
echo "💾 Creating commit..."
git commit -m "Initial commit - Furniture Showcase Website

- Complete Node.js backend with Express
- PostgreSQL database with Knex.js
- Cloudflare R2 image storage integration
- JWT authentication
- RESTful API with 15+ endpoints
- Complete documentation
- Vercel deployment ready
- Free hosting setup ($0/month)
"

# Add remote
echo "🔗 Adding GitHub remote..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/renukavarsani31-png/furniture-showcase.git

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git branch -M main
git push -u origin main --force

echo ""
echo "✅ Done! Your code is now on GitHub!"
echo ""
echo "📍 Repository: https://github.com/renukavarsani31-png/furniture-showcase"
echo ""
echo "🚀 Next Steps:"
echo "1. Go to https://vercel.com"
echo "2. Click 'Add New...' → 'Project'"
echo "3. Import: renukavarsani31-png/furniture-showcase"
echo "4. Deploy backend (root: backend)"
echo "5. Deploy frontend (root: frontend)"
echo ""
echo "📖 Full guide: Open VERCEL_DEPLOY.md"
