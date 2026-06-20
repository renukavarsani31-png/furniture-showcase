/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('inquiries', (table) => {
    table.increments('id').primary();
    table.string('name', 255).notNullable();
    table.string('email', 255).notNullable();
    table.string('phone', 50).notNullable();
    table.string('subject', 255);
    table.text('message').notNullable();
    table.integer('project_id').unsigned();
    table.enum('status', ['new', 'read', 'replied', 'closed']).defaultTo('new');
    table.string('ip_address', 45);
    table.text('admin_notes');
    table.timestamps(true, true);

    // Foreign key (optional)
    table.foreign('project_id')
      .references('id')
      .inTable('projects')
      .onDelete('SET NULL');

    // Indexes
    table.index('status');
    table.index('created_at');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('inquiries');
};
