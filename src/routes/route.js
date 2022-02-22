let obj = require('../logger/logger.js')
const help = require("../util/helper.js")
const format = require("../validator/formatter.js")
const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.welcome("Welcome to my application. I am Harsh Kumar Sinha and a part of FunctionUp Thorium cohort.")

    help.Date()
    help.Month()
    help.info("Thorium ,W3D1,the topic for today is Nodejs module system")

    format.trim("  FunctionUP   ")
    format.lower("FunctionUp")
    format.upper("FunctionUp")

    res.send('hi,this is My first ever api!')
});

module.exports = router;