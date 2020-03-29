
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.increments();
        
        table.string('title').primary();
        table.string('descrition').notNullable();
        table.string('value').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
      });
};

exports.down = function(knex) {
//   return knex.schema.dropTable('incidents');
};
