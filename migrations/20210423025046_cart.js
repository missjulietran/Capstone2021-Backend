exports.up = function (knex) {
  return knex.schema.createTable("cart", (table) => {
    table.increments("id");
    table.integer("buyer_id").unsigned();
    table.foreign("buyer_id").references("users.id");
    table.varchar("inventory_id").unsigned();
    table.foreign("inventory_id").references("inventory.sku");
    table.integer("quantity");
    table.boolean("bought");
    table.varchar("currency");
    table.integer("amount");
    table.boolean("confirm");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cart");
};
