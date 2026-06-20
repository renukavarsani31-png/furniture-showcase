const bcrypt = require('bcryptjs');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Delete existing data
  await knex('images').del();
  await knex('inquiries').del();
  await knex('projects').del();
  await knex('categories').del();
  await knex('users').del();

  // Insert categories
  await knex('categories').insert([
    {
      id: 1,
      name: 'Doors',
      slug: 'doors',
      description: 'Custom wooden doors, main doors, room doors',
      display_order: 1,
      is_active: true,
    },
    {
      id: 2,
      name: 'Bedrooms',
      slug: 'bedrooms',
      description: 'Complete bedroom furniture sets, beds, wardrobes',
      display_order: 2,
      is_active: true,
    },
    {
      id: 3,
      name: 'Kitchens',
      slug: 'kitchens',
      description: 'Modular kitchens, cabinets, kitchen furniture',
      display_order: 3,
      is_active: true,
    },
    {
      id: 4,
      name: 'TV Units & Living',
      slug: 'tv-units-living',
      description: 'TV units, living room furniture, entertainment centers',
      display_order: 4,
      is_active: true,
    },
    {
      id: 5,
      name: 'Halls & Dining',
      slug: 'halls-dining',
      description: 'Hall furniture, dining tables, chairs',
      display_order: 5,
      is_active: true,
    },
    {
      id: 6,
      name: 'Wardrobes',
      slug: 'wardrobes',
      description: 'Custom wardrobes, sliding wardrobes, closets',
      display_order: 6,
      is_active: true,
    },
    {
      id: 7,
      name: 'Showroom',
      slug: 'showroom',
      description: 'Our showroom and display',
      display_order: 7,
      is_active: true,
    },
  ]);

  // Insert default admin user
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 10);
  
  await knex('users').insert([
    {
      id: 1,
      email: process.env.ADMIN_EMAIL || 'admin@hirasales.com',
      password: hashedPassword,
      name: 'Admin',
      role: 'admin',
      is_active: true,
    },
  ]);

  console.log('✅ Seed data inserted successfully');
  console.log('📧 Admin Email:', process.env.ADMIN_EMAIL || 'admin@hirasales.com');
  console.log('🔑 Admin Password:', process.env.ADMIN_PASSWORD || 'admin123');
  console.log('⚠️  Please change the admin password after first login!');
};
