import GBGameModels from 'gb-game-models';
import {Team} from "./Scripts/Models/Team";
import {knex} from "./Scripts/DB/knex";
import {modelsFolder, tableNames, port} from "./config";
let express = require('express');

let app = express();
let router = express.Router();

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