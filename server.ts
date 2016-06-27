import * as Promise from "bluebird";
import GBGameModels from 'gb-game-models';
import {Team} from "./Scripts/Models/Team";
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

    let smokeChar = new Models.Character(sc).save()
    Promise.all([smokeChar, season1, season2]).spread(function (char, s1, s2) {
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
        let smoke = new Models.Player(sp).save().then(function (player) {
            console.log(player);
            res.json(player);
        });
    });
});

app.get('/', function (req, res) {
    return Team.fetchAll().then(function (team) {
        res.json(team);
    });
});

app.get('/:id', function (req, res) {
    return new Team({ id: parseInt(req.params.id) }).fetch({ withRelated: ['seasonIntroduced'] }).then(function (team) {
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