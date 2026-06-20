#!/bin/bash

# Furniture Showcase - Setup Script
# This script helps you get started quickly

echo "🪑 Furniture Showcase - Setup Script"
echo "===================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js 18+ from: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "⚠️  PostgreSQL is not installed!"
    echo "Install it from: https://www.postgresql.org/download/"
    echo ""
    read -p "Do you want to continue without PostgreSQL? (y/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "📦 Installing Backend Dependencies..."
cd backend
npm install

if [ $? -ne 0 ]; then
    echo "❌ Backend installation failed!"
    exit 1
fi

echo "✅ Backend dependencies installed!"
echo ""

# Create .env if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating backend .env file..."
    cp .env.example .env
    echo "✅ Created backend/.env"
    echo "⚠️  Please edit backend/.env with your database credentials!"
else
    echo "✅ backend/.env already exists"
fi

echo ""
echo "🎨 Installing Frontend Dependencies..."
cd ../frontend

# Create frontend directory if it doesn't exist
if [ ! -f package.json ]; then
    echo "📦 Initializing Next.js frontend..."
    npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*" --yes
fi

npm install

if [ $? -ne 0 ]; then
    echo "❌ Frontend installation failed!"
    exit 1
fi

echo "✅ Frontend dependencies installed!"
echo ""

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating frontend .env.local file..."
    echo "NEXT_PUBLIC_API_URL=http://localhost:5000/api" > .env.local
    echo "✅ Created frontend/.env.local"
else
    echo "✅ frontend/.env.local already exists"
fi

cd ..

echo ""
echo "=========================================="
echo "✨ Setup Complete!"
echo "=========================================="
echo ""
echo "📚 Next Steps:"
echo ""
echo "1. Setup Database:"
echo "   createdb furniture_showcase"
echo ""
echo "2. Configure Backend:"
echo "   cd backend"
echo "   nano .env  (edit database URL)"
echo ""
echo "3. Run Migrations:"
echo "   npm run migrate"
echo "   npm run seed"
echo ""
echo "4. Start Backend:"
echo "   npm run dev"
echo "   (runs on http://localhost:5000)"
echo ""
echo "5. Start Frontend (new terminal):"
echo "   cd frontend"
echo "   npm run dev"
echo "   (runs on http://localhost:3000)"
echo ""
echo "6. Login to Admin:"
echo "   URL: http://localhost:3000/admin/login"
echo "   Email: admin@localhost.com"
echo "   Password: admin123"
echo ""
echo "📖 Read QUICKSTART.md for detailed instructions!"
echo "🚀 Read DEPLOYMENT.md to deploy for FREE!"
echo ""
