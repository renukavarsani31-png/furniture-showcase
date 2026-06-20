/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('categories').del();
  
  // Inserts seed entries
  await knex('categories').insert([
    {
      id: 1,
      name: 'Doors',
      slug: 'doors',
      description: 'Custom wooden and designer doors for homes and offices',
      display_order: 1,
      is_active: true
    },
    {
      id: 2,
      name: 'Bedrooms',
      slug: 'bedrooms',
      description: 'Complete bedroom furniture sets including beds, wardrobes, and side tables',
      display_order: 2,
      is_active: true
    },
    {
      id: 3,
      name: 'Kitchens',
      slug: 'kitchens',
      description: 'Modern modular kitchen designs and cabinets',
      display_order: 3,
      is_active: true
    },
    {
      id: 4,
      name: 'Halls & Living Rooms',
      slug: 'halls',
      description: 'Living room furniture, sofas, TV units, and more',
      display_order: 4,
      is_active: true
    },
    {
      id: 5,
      name: 'TV Units',
      slug: 'tv-units',
      description: 'Designer TV units and entertainment centers',
      display_order: 5,
      is_active: true
    },
    {
      id: 6,
      name: 'Wardrobes',
      slug: 'wardrobes',
      description: 'Custom wardrobes and storage solutions',
      display_order: 6,
      is_active: true
    },
    {
      id: 7,
      name: 'Showroom',
      slug: 'showroom',
      description: 'Our showroom and workshop photos',
      display_order: 7,
      is_active: true
    },
    {
      id: 8,
      name: 'Custom Furniture',
      slug: 'custom-furniture',
      description: 'Bespoke furniture solutions tailored to your needs',
      display_order: 8,
      is_active: true
    }
  ]);
};
