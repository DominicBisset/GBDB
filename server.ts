import * as Promise from "bluebird";
import GBGameModels from 'gb-game-models';
import {knex} from "./Scripts/DB/knex";
import * as Models from "./Scripts/Models/index";
import {modelsFolder, tableNames, port} from "./config";
let express = require('express');

let app = express();
let router = express.Router();

app.get('/test', function (req, res) {

    let sc: GBGameModels.Character = {
        name: "Smoke",
    };

    let season1 = new Models.Season({ seasonNo : 1 }).fetch();
    let season2 = new Models.Season({ seasonNo: 2 }).fetch();
    let alchPromise = new Models.Team({ name: "Alchemists" }).fetch();

    let smokeChar = new Models.Character(sc).save()
    return Promise.all([smokeChar, season1, season2, alchPromise]).spread(function (char: GBGameModels.Character, s1: GBGameModels.Season, s2: GBGameModels.Season, alchs: GBGameModels.Team) {
        let sp = {

            title: "Smoke",
            seasonIntroducedNo: 2,
            characterId: char.id,
            movJog: 4,
            movRun: 6,
            TAC: 4,
            kickDice: 4,
            kickDistance: 6,
            def: 4,
            arm: 1,
            infGenerated: 4,
            infMax: 6,
            health: 16,
            baseSize: 30,
            meleeZone: 1,
        };
        let smokeSavePromise = new Models.Player(sp).save().then(function (smoke) {
            smoke.icySpongeLevels().add([{ icySpongeLevel: 6 }, { icySpongeLevel: 12 }]);
            smoke.playsFor().add([alchs]);
            return smoke.save().then(function (smokeAgain) {
                res.json(smoke);
            });
        });
        return smokeSavePromise;
    });
});


app.get('/player/:id', function (req, res) {
    return new Models.Player({ id: parseInt(req.params.id) }).fetch({ withRelated: ['seasonIntroduced', 'seasonRetired', 'character', 'icySpongeLevels', 'playsFor', 'playbook', 'abilities'] }).then(function (player) {
        res.json(player);
    });
});

app.get('/', function (req, res) {
    return Models.Team.fetchAll().then(function (team) {
        res.json(team);
    });
});

app.get('/:id', function (req, res) {
    return new Models.Team({ id: parseInt(req.params.id) }).fetch({ withRelated: ['seasonIntroduced'] }).then(function (team) {
        res.json(team);
    });

});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use(function (req, res, next) {
    console.log('Time:', Date.now(), 'Req:', req);
    next();
});

app.listen(port, function () {
    console.log('Example app listening on port', port, '!');
});