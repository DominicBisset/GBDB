import {db} from "../DB/bookshelf";
import {tableNames} from "../../config";

console.log("Reading the season model");
export class Season extends db.Model<Season>{
    get tableName() {
        return tableNames.season;
    }

    get idAttribute() {
        return "seasonNo";
    }
}
