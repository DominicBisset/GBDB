"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var bookshelf_1 = require("../DB/bookshelf");
var config_1 = require("../../config");
console.log("Reading the season model");
var Season = (function (_super) {
    __extends(Season, _super);
    function Season() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Season.prototype, "tableName", {
        get: function () {
            return config_1.tableNames.season;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Season.prototype, "idAttribute", {
        get: function () {
            return "seasonNo";
        },
        enumerable: true,
        configurable: true
    });
    return Season;
}(bookshelf_1.db.Model));
exports.Season = Season;
//# sourceMappingURL=Season.js.map