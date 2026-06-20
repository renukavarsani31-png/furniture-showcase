const bcrypt = require('bcryptjs');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  
  // Hash the default admin password
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 10);
  
  // Inserts seed entries
  await knex('users').insert([
    {
      id: 1,
      email: process.env.ADMIN_EMAIL || 'admin@hirasales.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
      is_active: true
    }
  ]);
};
