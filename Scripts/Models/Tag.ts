import {db} from "../DB/bookshelf";
import {tableNames} from "../../config";

console.log("Reading the tag model");
export class Tag extends db.Model<Tag>{
    get tableName() {
        return tableNames.tag;
    };
}
