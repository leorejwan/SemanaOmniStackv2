
exports.up = function(knex) { //parece com Entity framework //
    return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary(); //ver se funcionou no banco de dados
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
    });
  };
  
  exports.down = function(knex) { //apagar
    // return knex.schema.dropTable('ongs');
    //ver aqui que tenque preencher algo aqui
  };
  