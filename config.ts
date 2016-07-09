let path = require("path");
export let dbFile = path.join(__dirname, "GBDB.db");
console.log("dbfile:", dbFile);
export let modelsFolder = path.join(__dirname, "Scripts","Models");
export let dbConfig = {
    client: 'sqlite3',
    connection: {
        filename: dbFile
    }
};
export let tableNames = {
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
}

export let port = 3002;