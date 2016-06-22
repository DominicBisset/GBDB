"use strict";
var config_1 = require("../config");
var knex_1 = require("../Scripts/DB/knex");
var createSeasons = function () {
    var seasons = knex_1.knex(config_1.tableNames.season);
    var s1 = {
        seasonNo: 1,
        startDate: new Date(2015, 3, 6),
        endDate: new Date(2016, 4, 26)
    };
    var s2 = {
        seasonNo: 2,
        startDate: new Date(2016, 4, 26),
        endDate: null
    };
    return seasons.del()
        .then(function () {
        return seasons.insert(s1).then(function () {
            return seasons.insert(s2);
        });
    });
};
var createTeams = function () {
    var seasons = knex_1.knex(config_1.tableNames.season);
    var teams = knex_1.knex(config_1.tableNames.team);
    return seasons.select().then(function (seasonList) {
        seasonList.filter(function (k, v) { return k.seasonNo === 1; })[0];
        var s1 = seasonList.filter(function (k, v) { return k.seasonNo === 1; })[0];
        var s2 = seasonList.filter(function (k, v) { return k.seasonNo === 1; })[0];
        var teamList = [
            {
                name: "Fishermen",
                seasonIntroducedNo: s1.seasonNo
            }, {
                name: "Butchers",
                seasonIntroducedNo: s1.seasonNo
            }, {
                name: "Brewers",
                seasonIntroducedNo: s1.seasonNo
            }, {
                name: "Masons",
                seasonIntroducedNo: s1.seasonNo
            }, {
                name: "Alchemists",
                seasonIntroducedNo: s1.seasonNo
            }, {
                name: "Morticians",
                seasonIntroducedNo: s1.seasonNo
            }, {
                name: "Engineers",
                seasonIntroducedNo: s1.seasonNo
            }, {
                name: "Union",
                seasonIntroducedNo: s1.seasonNo
            }, {
                name: "Hunters",
                seasonIntroducedNo: s2.seasonNo
            }];
        return teams.del()
            .then(function () {
            return teams.insert(teamList);
        });
    });
};
var createCharacters = function (Promise) {
    return;
};
exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return createSeasons()
        .then(createTeams);
    //.then(createCharacters);
};
//# sourceMappingURL=initial.js.map