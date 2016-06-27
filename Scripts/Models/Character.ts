import * as Bookshelf from "bookshelf";
import {db} from "../DB/bookshelf";
import {tableNames} from "../../config";
import {Player} from "./index";

console.log("Reading the character model");
export class Character extends db.Model<Character>{
    get tableName() {
        return tableNames.character;
    };

    variants(): Bookshelf.Collection<Player>{
        return this.hasMany(Player, "characterId");
    };
}
