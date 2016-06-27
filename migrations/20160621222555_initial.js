var config = require("../config.js");

exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTableIfNotExists(config.tableNames.season, function (table) {
            console.log("creating table:", config.tableNames.season);
            table.integer("seasonNo").primary();
            table.date("startDate").notNullable();
            table.date("endDate").nullable();
        }),
        knex.schema.createTableIfNotExists(config.tableNames.character, function (table) {
            console.log("creating table:", config.tableNames.character);
            table.increments("id");
            table.string("name").notNullable();
        }),
        knex.schema.createTableIfNotExists(config.tableNames.team, function (table) {
            console.log("creating table:", config.tableNames.team);
            table.increments("id");
            table.string("name").notNullable();
            table.integer("seasonIntroducedNo").references("seasonNo").inTable(config.tableNames.season).notNullable();
        }),
        knex.schema.createTableIfNotExists(config.tableNames.ability, function (table) {
            console.log("creating table:", config.tableNames.ability);
            table.increments("id");
            table.string("name").notNullable();
            table.text("abilityText").notNullable();
			table.integer("abilityType").notNullable
			table.boolean("hasParameter").nullable();

            //Additional Fields for character plays
            table.integer("infCost").nullable();
            table.integer("gbCost").nullable();
            table.integer("rng").nullable(); //TODO: handle range S, P
            table.integer("zone").nullable();
            table.integer("zoneSize").nullable();
            table.boolean("sustain").nullable();
        }),
        knex.schema.createTableIfNotExists(config.tableNames.tag, function (table) {
            console.log("creating table:", config.tableNames.tag);
            table.increments("id");
            table.string("name").notNullable();
            table.integer("type").notNullable();
        }),
        knex.schema.createTableIfNotExists(config.tableNames.player, function (table){
            console.log("creating table:", config.tableNames.player);
			table.increments("id");
			table.string("title").nullable();
			table.integer("characterId").references("id").inTable(config.tableNames.character).notNullable();
			table.integer("seasonIntroducedNo").references("seasonNo").inTable(config.tableNames.season).notNullable();
			table.integer("seasonRetiredNo").references("seasonNo").inTable(config.tableNames.season).nullable();

            table.integer("movJog").notNullable();
            table.integer("movRun").notNullable();
            table.integer("TAC").notNullable();
            table.integer("kickDice").notNullable();
            table.integer("kickDistance").notNullable();
            table.integer("def").notNullable();
            table.integer("arm").notNullable();
            table.integer("infGenerated").notNullable();
            table.integer("infMax").notNullable();
            table.integer("health").notNullable();
            table.integer("baseSize").notNullable();
            table.integer("meleeZone").notNullable();
        }),
		knex.schema.createTableIfNotExists(config.tableNames.icySpongeLevel, function (table) {
			console.log("creating table:", config.tableNames.icySpongeLevel);
			table.increments("id");
			table.integer("playerId").references("id").inTable(config.tableNames.player).notNullable();
			table.integer("icySpongeLevel").notNullable();
		}),
        knex.schema.createTableIfNotExists(config.tableNames.playbookResult, function (table) {
            console.log("creating table:", config.tableNames.playbookResult);
            table.increments("id");
            table.integer("playerId").references("id").inTable(config.tableNames.player).notNullable();
            table.integer("row").notNullable();
            table.integer("col").notNullable();
            table.integer("resultType").notNullable();
            table.integer("magnitude").notNullable();
        }),
        knex.schema.createTableIfNotExists(config.tableNames.playerTag, function (table){
            console.log("creating table:", config.tableNames.playerTag);
            table.increments("id");
            table.integer("playerId").references("id").inTable(config.tableNames.player).notNullable();
            table.integer("tagId").references("id").inTable(config.tableNames.tag).notNullable();
        }),
        knex.schema.createTableIfNotExists(config.tableNames.playerAbility, function (table) {
            console.log("creating table:", config.tableNames.playerAbility);
            table.increments("id");
            table.integer("playerId").references("id").inTable(config.tableNames.player).notNullable();
			table.integer("abilityId").references("id").inTable(config.tableNames.ability).notNullable();
			table.string("parameterValue").nullable();
		}),
		knex.schema.createTableIfNotExists(config.tableNames.playerTeam, function (table) {
			console.log("creating table:", config.tableNames.playerTeam);
			table.increments("id");
			table.integer("playerId").references("id").inTable(config.tableNames.player).notNullable();
			table.integer("teamId").references("id").inTable(config.tableNames.team).notNullable();
		}),

    ]);
};

exports.down = function (knex, Promise) {
	
	return Promise.all([
		knex.schema.dropTableIfExists(config.tableNames.playerTeam),
		knex.schema.dropTableIfExists(config.tableNames.playerAbility),
		knex.schema.dropTableIfExists(config.tableNames.playerTag),
		knex.schema.dropTableIfExists(config.tableNames.playbookResult),
		knex.schema.dropTableIfExists(config.tableNames.icySpongeLevel),
	]).then(function () {
		return Promise.all([
			knex.schema.dropTableIfExists(config.tableNames.player),
			knex.schema.dropTableIfExists(config.tableNames.tag),
			knex.schema.dropTableIfExists(config.tableNames.ability),
			knex.schema.dropTableIfExists(config.tableNames.team),
		]);
	}).then(function () {
		return Promise.all([
			knex.schema.dropTableIfExists(config.tableNames.character),
			knex.schema.dropTableIfExists(config.tableNames.season),
		]);
	});
};
