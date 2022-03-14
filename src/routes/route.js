const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

router.get("/cowin/getDistrictsid", CowinController.getDistrictsid)

router.get("/weather",CowinController.weather)

router.get("/getsortedCities",CowinController.getsortedCities)




module.exports = router;






