import * as Bookshelf from "bookshelf";
import {db} from "../DB/bookshelf";
import {tableNames} from "../../config";
import {ResultEffect} from "./ResultEffect";

console.log("Reading the playbook result model");
export class PlaybookResult extends db.Model<PlaybookResult>{
    get tableName() {
        return tableNames.playbookResult;
    };

    effects(): Bookshelf.Collection<ResultEffect> {
        return this.hasMany(ResultEffect, "resultId");
    };
}
