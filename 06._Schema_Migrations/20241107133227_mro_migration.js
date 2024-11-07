/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema    
        .createTable('users', (table) => {
           table.integer('id').notNullable().primary();
           table.string('first_name').notNullable();
           table.string('last_name').notNullable();

        })    
        .createTable('products', (table) => {
           table.integer('id').notNullable().primary();
           table.specificType('price', 'numeric').notNullable();
           table.string('name').notNullable();

        })        
};

exports.down = function(knex) {
    return knex.schema
           .dropTable('products')
           .dropTable('users');
};
