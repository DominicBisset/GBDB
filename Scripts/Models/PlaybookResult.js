"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var bookshelf_1 = require("../DB/bookshelf");
var config_1 = require("../../config");
console.log("Reading the playbook result model");
var PlaybookResult = (function (_super) {
    __extends(PlaybookResult, _super);
    function PlaybookResult() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(PlaybookResult.prototype, "tableName", {
        get: function () {
            return config_1.tableNames.playbookResult;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return PlaybookResult;
}(bookshelf_1.db.Model));
exports.PlaybookResult = PlaybookResult;
//# sourceMappingURL=PlaybookResult.js.map