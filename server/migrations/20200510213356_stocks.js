
exports.up = function (knex) {
    knex.schema.createTable("stocks", tableStock => {
        tableStock.increments('id');
        tableStock.string("code");
        tableStock.integer("amount");
    })
};

exports.down = function (knex) {

};
