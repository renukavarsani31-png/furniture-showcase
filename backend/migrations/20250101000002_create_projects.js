/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id').primary();
    table.string('title', 255).notNullable();
    table.string('slug', 255).notNullable().unique();
    table.text('description');
    table.integer('category_id').unsigned().notNullable();
    table.string('location', 255);
    table.string('client_name', 255);
    table.date('completion_date');
    table.boolean('is_featured').defaultTo(false);
    table.boolean('is_published').defaultTo(true);
    table.integer('view_count').defaultTo(0);
    table.timestamps(true, true);

    // Foreign key
    table.foreign('category_id')
      .references('id')
      .inTable('categories')
      .onDelete('CASCADE');

    // Indexes
    table.index('category_id');
    table.index('is_featured');
    table.index('is_published');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects');
};
