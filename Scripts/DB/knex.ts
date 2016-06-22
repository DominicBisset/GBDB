

import * as knexLib from "knex";
import {dbConfig} from "../../config"

export var knex = knexLib(dbConfig);
    