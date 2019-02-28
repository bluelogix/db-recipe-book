//many to many 
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipeIngredients', function(tbl){

    //id
    tbl.increments();

    tbl.integer('ingredient_id').unsigned()
    tbl.foreign('ingredient_id').references('ingredients.ingredient_id') //becomes a foreign id to use in other tables

    tbl.integer('recipe_id').unsigned()
    tbl.foreign('recipe_id').references('recipes.recipe_id') //foreign key for recipes 
    
    //timestamps
    tbl.timestamps(true, true)

  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipeIngredients')
};
