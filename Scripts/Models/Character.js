"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var bookshelf_1 = require("../DB/bookshelf");
var config_1 = require("../../config");
var index_1 = require("./index");
console.log("Reading the character model");
var Character = (function (_super) {
    __extends(Character, _super);
    function Character() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Character.prototype, "tableName", {
        get: function () {
            return config_1.tableNames.character;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Character.prototype.variants = function () {
        return this.hasMany(index_1.Player, "characterId");
    };
    ;
    return Character;
}(bookshelf_1.db.Model));
exports.Character = Character;
//# sourceMappingURL=Character.js.map