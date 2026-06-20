/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('images', (table) => {
    table.increments('id').primary();
    table.integer('project_id').unsigned().notNullable();
    table.string('filename', 255).notNullable();
    table.string('original_name', 255).notNullable();
    table.string('r2_key', 500).notNullable();
    table.string('r2_url', 500).notNullable();
    table.integer('width');
    table.integer('height');
    table.integer('size'); // in bytes
    table.string('mime_type', 100);
    table.integer('display_order').defaultTo(0);
    table.boolean('is_primary').defaultTo(false);
    table.timestamps(true, true);

    // Foreign key
    table.foreign('project_id')
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE');

    // Indexes
    table.index('project_id');
    table.index('is_primary');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('images');
};
