const express = require('express');
const router = express.Router();
const app = express();

router.post('/new', function (req, res, next){
    var request = require("request");

    var options = { method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather',
        qs: { APPID: 'aa96d216a339c190c5329877bc0e81e2', q: req.body.name /*'Boston'*/ },
        headers:
            { 'cache-control': 'no-cache',
                Connection: 'keep-alive',
                'Accept-Encoding': 'gzip, deflate',
                Host: 'api.openweathermap.org',
                'Postman-Token': 'c29ec64d-654e-42d1-8f4e-998e3f436c10,f009b60a-312b-42dd-bc88-bfa20660b3a0',
                'Cache-Control': 'no-cache',
                Accept: '*/*',
                'User-Agent': 'PostmanRuntime/7.16.3' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(JSON.parse(body));
    //app.use(bodyParser.json()); -> app.js
        res.render('weather', {city_name: req.body.name, weather: JSON.parse(body).weather[0].main});
    });




    /*
            var http = require("https");

            var options = {
                "method": "GET",
                "hostname": "community-open-weather-map.p.rapidapi.com",
                "port": null,
    //            "path": "/weather?callback=test&id=2172797&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html&q=Boston",
                "path": "/weather?callback=test&id=2172797&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html&q="+req.body.name,
                "headers": {
                    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                    "x-rapidapi-key": "aa96d216a339c190c5329877bc0e81e2"
                }
            };

            var req = http.request(options, function (res) {
                var chunks = [];

                res.on("data", function (chunk) {
                    chunks.push(chunk);
                });

                res.on("end", function () {
                    var body = Buffer.concat(chunks);
                    console.log(body.toString());
                });
            });

            req.end();
    */

    //    res.render('weather', {title: body.toString(), city: });


    })

module.exports = router;
