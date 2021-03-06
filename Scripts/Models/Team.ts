﻿import {db} from "../DB/bookshelf";
import {tableNames} from "../../config";
import {Season} from "./index";

console.log("Reading the team model");
export class Team extends db.Model<Team>{
    get tableName() {
        return tableNames.team;
    };

    seasonIntroduced() : Season {
        return this.belongsTo(Season, "seasonIntroducedNo");
    }
}
