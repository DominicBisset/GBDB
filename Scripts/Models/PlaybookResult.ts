import {db} from "../DB/bookshelf";
import {tableNames} from "../../config";

console.log("Reading the playbook result model");
export class PlaybookResult extends db.Model<PlaybookResult>{
    get tableName() {
        return tableNames.playbookResult;
    };
    
}
