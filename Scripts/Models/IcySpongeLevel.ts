import {db} from "../DB/bookshelf";
import {tableNames} from "../../config";

console.log("Reading the icy sponge level model");
export class IcySpongeLevel extends db.Model<IcySpongeLevel>{
    get tableName() {
        return tableNames.icySpongeLevel;
    };
}
