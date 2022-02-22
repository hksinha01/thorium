let obj = require('../logger/logger.js')
const help = require("../util/helper.js")
const format = require("../validator/formatter.js")
const express = require('express');
const lodash = require('lodash')

const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.welcome("Welcome to my application. I am Harsh Kumar Sinha and a part of FunctionUp Thorium cohort.")

    help.Date()
    help.Month()
    help.info("Thorium ,W3D1,the topic for today is Nodejs module system")

    format.trim("  FunctionUP   ")
    format.lower("FunctionUp")
    format.upper("FunctionUp")

    let months =['Jan','Feb','March','April','May','June','July','August','September','October','November','December']
    let subarrays = lodash.chunk(months,3)
    console.log("chunks of months : ", subarrays)

    let odd = [1,3,5,7,9,11,13,15,17,19]
    let last = lodash.tail(odd)
    console.log(last)

    let arr1 = [1,2,3]
    let arr2 = [2,3,4]
    let arr3 = [3,4,5]
    let arr4 = [4,5,6]
    let arr5 = [5,6,7]
    let uni = lodash.union(arr1,arr2,arr3,arr4,arr5)  
    console.log(uni)  

    let m1 = ['horror','The Shining']
    let m2 = ['drama','Titanic']
    let m3 = ['thriller','Shutter Island']
    let m4 = ['fantasy','Pans Labyrinth']
    let movie = lodash.fromPairs([m1,m2,m3,m4])
    console.log("Movie object :",movie)    

    res.send('hi,this is My first ever api!')
});

module.exports = router;