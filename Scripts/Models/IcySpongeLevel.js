"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var bookshelf_1 = require("../DB/bookshelf");
var config_1 = require("../../config");
console.log("Reading the icy sponge level model");
var IcySpongeLevel = (function (_super) {
    __extends(IcySpongeLevel, _super);
    function IcySpongeLevel() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(IcySpongeLevel.prototype, "tableName", {
        get: function () {
            return config_1.tableNames.icySpongeLevel;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return IcySpongeLevel;
}(bookshelf_1.db.Model));
exports.IcySpongeLevel = IcySpongeLevel;
//# sourceMappingURL=IcySpongeLevel.js.map