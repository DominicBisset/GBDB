"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var bookshelf_1 = require("../DB/bookshelf");
var config_1 = require("../../config");
console.log("Reading the tag model");
var Ability = (function (_super) {
    __extends(Ability, _super);
    function Ability() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Ability.prototype, "tableName", {
        get: function () {
            return config_1.tableNames.ability;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Ability;
}(bookshelf_1.db.Model));
exports.Ability = Ability;
//# sourceMappingURL=Ability.js.map