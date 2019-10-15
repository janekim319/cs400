const express = require('express');
const router = express.Router();
const app = express();

router.route('/ps3')
    .get(function (req, res, next){
        res.render('index', {string: 'This is ps3'});
    })

    .post(function (req, res, next){
        res.render('index', {string: req.body.string, string_length: req.body.string.length});

});

module.exports=router;