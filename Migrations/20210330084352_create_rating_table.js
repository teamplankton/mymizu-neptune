exports.up = function (knex) {
  return knex.schema.createTable("ratings", function (table) {
    table.increments();
    table.integer("tap_id").notNullable();
    table.integer("star").notNullable();
    table.string("comment");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ratings");
};
