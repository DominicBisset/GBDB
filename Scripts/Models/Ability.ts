import {db} from "../DB/bookshelf";
import {tableNames} from "../../config";

console.log("Reading the tag model");
export class Ability extends db.Model<Ability>{
    get tableName() {
        return tableNames.ability;
    };
}
