const express = require('express');
const router = express.Router();
const app = express();
const wx = require('../config/openweather')
const db = require('../mongo/mongo')
const capitalize = require('capitalize');

db.connect((err) => {
console.log('db err: ',err)})

router.post('/new', function (req, res, next) {
    const request = require("request");

    const mongo = db.getDB();

    req.body.name = capitalize(req.body.name);

    mongo.collection('weather').findOne({name: req.body.name}, function (err, docs) { //already cached
        if (docs) {
            docs.cached = true;
            res.render('weather', {
                message: docs.cached,
                city_name: req.body.name,
                weather: docs.weather[0].main
            });
        }
        else {
            let docs = {
                cached: false
            }

            const options = {
                method: 'GET',
                url: wx.URL,
                qs: {APPID: wx.APPID, q: req.body.name /*'Boston'*/},
                headers:
                    {
                        'cache-control': 'no-cache',
                        Connection: 'keep-alive',
                        'Accept-Encoding': 'gzip, deflate',
                        Host: wx.Host,
                        //'Postman-Token': 'c29ec64d-654e-42d1-8f4e-998e3f436c10,f009b60a-312b-42dd-bc88-bfa20660b3a0',
                        'Cache-Control': 'no-cache',
                        Accept: '*/*',
                        'User-Agent': 'PostmanRuntime/7.16.3'
                    }
            };

            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                console.log(JSON.parse(body));

                mongo.collection('weather').insertOne(JSON.parse(body), function (err, r) {
                });


                res.render('weather', {
                    message: docs.cached,
                    city_name: req.body.name,
                    weather: JSON.parse(body).weather[0].main
                });
            });

        };
    });
});

module.exports = router;

