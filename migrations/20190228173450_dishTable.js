//DISH TABLE 

exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl) {

      //id for dish
      tbl.increments();

      //name for dish
      tbl.string('name', 128)
      .unique() //not to have more than one dish name 
      .notNullable()

      //timestamps
      tbl.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
