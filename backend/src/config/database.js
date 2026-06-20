const knex = require('knex');
const knexConfig = require('../../knexfile');

const environment = process.env.NODE_ENV || 'development';
const config = knexConfig[environment];

// Use POSTGRES_URL for Vercel, DATABASE_URL for others
if (process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
  config.connection = process.env.POSTGRES_URL;
}

const db = knex(config);

// Test connection
db.raw('SELECT 1')
  .then(() => {
    console.log('✅ Database connected successfully');
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err.message);
    // Don't exit in serverless
    if (process.env.NODE_ENV !== 'production') {
      process.exit(1);
    }
  });

module.exports = db;
