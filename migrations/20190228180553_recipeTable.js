
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl){
      //id for recipes
      tbl.increments();
    
      //name of recipes
      tbl.string('name',128)
      .notNullable()

      //grabbing id from dishes 
      tbl.integer('dish_id')
      .unsigned()
      .references('id')
      .inTable('dishes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

      //timestamps
      tbl.timestamps(true, true);

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
};
