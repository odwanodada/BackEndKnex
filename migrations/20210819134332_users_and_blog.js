
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').unique();
        table.string('name');
        table.string('username').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
    })
    .createTable('blogs', table => {
        table.increments('id').unique();
        table.string('title').notNullable();
        table.string('author').notNullable();
        table.string('content', 300).notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('users').dropTable('blogs');
  
};
