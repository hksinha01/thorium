const UserModel= require("../models/userModel")
const moment = require('moment');

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    const ip = req.ip
    const route = "/createUser"
    stamp = moment().format("YYYY/MM/DD HH:mm:00")
    res.send({msg: stamp,ip,route})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    const ip = req.ip
    const route = "/getUsersData"
    stamp = moment().format("YYYY/MM/DD HH:mm:00")
    
    res.send({msg: stamp, ip,route})
    
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData