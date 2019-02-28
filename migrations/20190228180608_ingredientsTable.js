
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(tbl){

    //id 
    tbl.increments()
    
    //name
    tbl.string('name', 60)
    .notNullable()

    //timestamps
    tbl.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients')
};
