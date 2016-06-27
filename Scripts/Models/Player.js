"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var bookshelf_1 = require("../DB/bookshelf");
var config_1 = require("../../config");
var index_1 = require("./index");
console.log("Reading the player model");
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Player.prototype, "tableName", {
        get: function () {
            return config_1.tableNames.player;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Player.prototype.character = function () {
        return this.belongsTo(index_1.Character, "characterId");
    };
    ;
    Player.prototype.playsFor = function () {
        return this.belongsToMany(index_1.Team, config_1.tableNames.playerTeam, "playerId", "teamId");
    };
    Player.prototype.seasonIntroduced = function () {
        return this.belongsTo(index_1.Season, "seasonIntroducedNo");
    };
    ;
    Player.prototype.seasonRetired = function () {
        return this.belongsTo(index_1.Season, "seasonRetiredNo");
    };
    ;
    Player.prototype.icySpongeLevels = function () {
        return this.hasMany(index_1.IcySpongeLevel, "playerId");
    };
    ;
    Player.prototype.abilities = function () {
        return this.belongsToMany(index_1.Ability, config_1.tableNames.playerAbility, "playerId", "abilityId");
    };
    ;
    Player.prototype.playbook = function () {
        return this.hasMany(index_1.PlaybookResult, "playerId");
    };
    ;
    Player.prototype.tags = function () {
        return this.belongsToMany(index_1.Tag, config_1.tableNames.playerTag, "playerId", "tagId");
    };
    ;
    return Player;
}(bookshelf_1.db.Model));
exports.Player = Player;
//# sourceMappingURL=Player.js.map