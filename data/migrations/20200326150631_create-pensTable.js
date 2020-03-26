exports.up = function(knex) {
  return knex.schema.createTable("pens", table => {
    table.increments();
    table
      .string("name", 128)
      .notNullable()
      .unique();
    table.float("model");
    table.string("year").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("pens");
};
