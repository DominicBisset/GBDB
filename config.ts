
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
    characterPlay: "CharacterPlay",
    play: "Play",
    playbookResult: "PlaybookResult",
    tag: "Tag",
}

export let port = 3001;