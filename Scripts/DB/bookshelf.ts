import {knex} from "./knex";
import * as bookshelf from "bookshelf";
export var db = bookshelf(knex);