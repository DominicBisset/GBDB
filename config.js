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
    ability: "Ability",
    tag: "Tag",
    playbookResult: "PlaybookResult",
    playerAbility: "PlayerAbility",
    playerTag: "PlayerTag",
    playerTeam: "PlayerTeam",
    icySpongeLevel: "IcySpongeLevel",
    resultEffect: "ResultEffect"
};
exports.port = 3001;
//# sourceMappingURL=config.js.map