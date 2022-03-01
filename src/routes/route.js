const express = require('express');
const router = express.Router();
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", bookController.createBook)

router.get("/bookList", bookController.bookList)

router.get("/getBooksInYear", bookController.getBooksInYear)

router.get("/getXINR", bookController.getXINR)

router.get("/getRandomBooks", bookController.getRandomBooks)

module.exports = router;