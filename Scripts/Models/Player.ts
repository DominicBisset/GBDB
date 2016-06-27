import * as Bookshelf from "bookshelf";
import {db} from "../DB/bookshelf";
import {tableNames} from "../../config";
import {Season, Team, Character, Ability, IcySpongeLevel, PlaybookResult, Tag} from "./index";

console.log("Reading the player model");
export class Player extends db.Model<Player>{
    get tableName() {
        return tableNames.player;
    };

    character(): Character {
        return this.belongsTo(Character, "characterId");
    };

    playsFor(): Bookshelf.Collection<Team> {
        return this.belongsToMany(Team, tableNames.playerTeam, "playerId", "teamId");
    }

    seasonIntroduced(): Season {
        return this.belongsTo(Season, "seasonIntroducedNo");
    };

    seasonRetired(): Season {
        return this.belongsTo(Season, "seasonRetiredNo");
    };

    icySpongeLevels(): Bookshelf.Collection<IcySpongeLevel> {
        return this.hasMany(IcySpongeLevel, "playerId");
    };

    abilities(): Bookshelf.Collection<Ability> {
        return this.belongsToMany(Ability, tableNames.playerAbility, "playerId", "abilityId");
    };

    playbook(): Bookshelf.Collection<PlaybookResult> {
        return this.hasMany(PlaybookResult, "playerId");
    };

    tags(): Bookshelf.Collection<Tag> {
        return this.belongsToMany(Tag, tableNames.playerTag, "playerId", "tagId");
    };
}
