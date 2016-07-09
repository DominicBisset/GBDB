import {db} from "../DB/bookshelf";
import {tableNames} from "../../config";

console.log("Reading the result effect model");
export class ResultEffect extends db.Model<ResultEffect>{
    get tableName() {
        return tableNames.resultEffect;
    };

}
