"use strict";
var path = require("path");
exports.dbFile = path.join(__dirname, "GBDB.db");
console.log("dbfile:", exports.dbFile);
exports.modelsFolder = path.join(__dirname, "Scripts", "Models");
exports.dbConfig = {
    client: 'sqlite3',
    connection: {
        filename: exports.dbFile
    }
};
exports.tableNames = {
    season: "Season",
    team: "Team",
    character: "Character",
    player: "Player",
    characterPlay: "CharacterPlay",
    ability: "Ability",
    playbookResult: "PlaybookResult",
	icySpongeLevel: "IcySpongeLevel",
    tag: "Tag",
    playerTag: "PlayerTag",
	playerAbility: "PlayerAbility",
	playerTeam: "PlayerTeam"

};
exports.port = 3001;
//# sourceMappingURL=config.js.map