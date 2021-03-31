exports.up = function (knex) {
  return knex.schema.createTable("ratings", function (table) {
    table.increments();
    table.integer("tap_id");
    table.integer("star");
    table.string("comment");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.hasTable("ratings").then(function (exists) {
    if (exists) {
      knex.schema.dropTable("ratings");
    }
  });
};
