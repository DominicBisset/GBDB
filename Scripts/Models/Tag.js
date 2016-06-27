"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var bookshelf_1 = require("../DB/bookshelf");
var config_1 = require("../../config");
console.log("Reading the tag model");
var Tag = (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Tag.prototype, "tableName", {
        get: function () {
            return config_1.tableNames.tag;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Tag;
}(bookshelf_1.db.Model));
exports.Tag = Tag;
//# sourceMappingURL=Tag.js.map