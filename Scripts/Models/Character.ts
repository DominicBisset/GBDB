import {db} from "../DB/bookshelf";
import {tableNames} from "../../config";

console.log("Reading the character model");
export class Character extends db.Model<Character>{
    get tableName() {
        return tableNames.character;
    }
}
