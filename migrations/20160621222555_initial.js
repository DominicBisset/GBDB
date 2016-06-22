var config = require("../config.js");

exports.up = function (knex, Promise) {
    console.log(Promise);
    return Promise.all([
        knex.schema.createTableIfNotExists(config.tableNames.season, function (table) {
            console.log("creating table: ", config.tableNames.season);
            table.integer("seasonNo").primary();
            table.date("startDate").notNullable();
            table.date("endDate").nullable();
        }),
        knex.schema.createTableIfNotExists(config.tableNames.character, function (table) {
            console.log("creating table: ", config.tableNames.character);
            table.increments("id");
            table.string("name").notNullable();
        }),
        knex.schema.createTableIfNotExists(config.tableNames.team, function (table) {
            console.log("creating table: ", config.tableNames.team);
            table.increments("id");
            table.string("name").notNullable();
            table.integer("seasonIntroducedNo").references("seasonNo").inTable(config.tableNames.season).notNullable();
        })
    ]);
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists(config.tableNames.character),
        knex.schema.dropTableIfExists(config.tableNames.team),
        knex.schema.dropTableIfExists(config.tableNames.season),
    ]);
};
