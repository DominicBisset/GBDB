

import {tableNames} from "../config";
import {knex} from "../Scripts/DB/knex";
import  GBGameModels from "gb-game-models";

var createSeasons = function () {
    let seasons = knex(tableNames.season);

    let s1: GBGameModels.Season = {
        seasonNo: 1,
        startDate: new Date(2015, 3, 6),
        endDate: new Date(2016, 4, 26)
    };
    let s2: GBGameModels.Season = {
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
    let seasons = knex(tableNames.season);
    let teams = knex(tableNames.team);
    return seasons.select().then(function (seasonList : Array<GBGameModels.Season>) {
        seasonList.filter(function (k, v) { return k.seasonNo === 1; })[0];
        let s1 = seasonList.filter(function (k, v) { return k.seasonNo === 1; })[0];
        let s2 = seasonList.filter(function (k, v) { return k.seasonNo === 1; })[0];
        let teamList: Array<GBGameModels.Team> = [
            {
                name: "Fishermen",
                seasonIntroducedNo: s1.seasonNo,
                logoImageUri: ""
            }, {
                name: "Butchers",
                seasonIntroducedNo: s1.seasonNo,
                logoImageUri: ""
            }, {
                name: "Brewers",
                seasonIntroducedNo: s1.seasonNo,
                logoImageUri: ""
            }, {
                name: "Masons",
                seasonIntroducedNo: s1.seasonNo,
                logoImageUri: ""
            }, {
                name: "Alchemists",
                seasonIntroducedNo: s1.seasonNo,
                logoImageUri: ""
            }, {
                name: "Morticians",
                seasonIntroducedNo: s1.seasonNo,
                logoImageUri: ""
            }, {
                name: "Engineers",
                seasonIntroducedNo: s1.seasonNo,
                logoImageUri: ""
            }, {
                name: "Union",
                seasonIntroducedNo: s1.seasonNo,
                logoImageUri: ""
            }, {
                name: "Hunters",
                seasonIntroducedNo: s2.seasonNo,
                logoImageUri: ""
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
