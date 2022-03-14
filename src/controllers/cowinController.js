let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}

let getDistrictsid = async function (req, res) {
    try {
        let id = req.query.districts_id
        let date=req.query.date
        console.log(`query params are: ${id} ${date}`)
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const weather = async function(req,res)
{ try{
    let location = req.query.location
    let appid = req.query.appid

    let options = {
        method :"get",
        url : `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appid}`

    }
    let result = await axios(options)
    console.log(result.data)
    res.status(200).send({msg : result.data.main.temp,status : true})
}
  catch(error){
      console.log(error)
   res.status(500).send(error.message)
  }
}

const getsortedCities=async function(req,res)
{try{
    let cities = ["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"]
    let citiObj = []

    for(let i = 0 ; i < cities.length;i++){
        let obj = {city : cities[i]}

        let result =await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=d29a7e14d06e3c6d3a7d53cc47f162bb`)
        obj.temp = result.data.main.temp
        citiObj.push(obj)
    }
    let sortedArr = citiObj.sort(function(a,b) {return a.temp - b.temp})
    console.log(sortedArr)
    res.status(200).send({status : true, msg : sortedArr})
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send(error.message)
    }
}

const memes = async function(req,res)
{
    try{
        let id = req.query.template_id
        let txt0 =req.query.text0
        let txt1 = req.query.text1
        let name = req.query.username
        let pass=req.query.password

        let options = {
            method : "post",
            url : `https://api.imgflip.com/caption_image?template_id=${id}&text0=${txt0}&text1=${txt1}&username=${name}&password=${pass}`
        }
        let result = await axios(options)
        res.status(200).send({status : true,data : result.data})
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send(error.message)
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDistrictsid =getDistrictsid
module.exports.weather = weather
module.exports.getsortedCities=getsortedCities
module.exports.memes=memes