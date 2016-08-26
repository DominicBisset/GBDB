import * as Promise from "bluebird";
import GBGameModels from 'gb-game-models';
import {knex} from "./Scripts/DB/knex";
import * as Models from "./Scripts/Models/index";
import {modelsFolder, tableNames, port} from "./config";
let express = require('express');

let app = express();
let router = express.Router();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/player', function (req, res) {
    return new Models.Player().fetchAll({
        withRelated: [
            'seasonIntroduced',
            'seasonRetired',
            'character',
            'icySpongeLevels',
            'playsFor',
            'playbook',
            'playbook.effects',
            'abilities'
        ]
    }).then(function (players) {
        res.json(players)
    });
});

app.get('/player/:id', function (req, res) {
    return new Models
        .Player({ id: parseInt(req.params.id) })
        .fetch({
            withRelated: [
                'seasonIntroduced',
                'seasonRetired',
                'character',
                'icySpongeLevels',
                'playsFor',
                'playbook',
                'playbook.effects',
                'abilities'
            ]
        }).then(function (player) {
            res.json(player);
        });
});

app.get('/team', function (req, res) {
    return Models.Team.fetchAll().then(function (team) {
        res.json(team);
    });
});

app.get('/team/:id', function (req, res) {
    return new Models.Team({ id: parseInt(req.params.id) }).fetch({ withRelated: ['seasonIntroduced'] }).then(function (team) {
        res.json(team);
    });

});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, function () {
    console.log('GBDB listening on port', port, '!');
});