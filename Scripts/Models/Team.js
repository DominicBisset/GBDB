"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var bookshelf_1 = require("../DB/bookshelf");
var config_1 = require("../../config");
var Season_1 = require("./Season");
console.log("Reading the team model");
var Team = (function (_super) {
    __extends(Team, _super);
    function Team() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Team.prototype, "tableName", {
        get: function () {
            return config_1.tableNames.team;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Team.prototype.seasonIntroduced = function () {
        return this.belongsTo(Season_1.Season, "seasonIntroducedNo");
    };
    return Team;
}(bookshelf_1.db.Model));
exports.Team = Team;
//# sourceMappingURL=Team.js.map