const jwt = require("jsonwebtoken")
const mid = function(req, req, next) {
    //check the token in request header
    //validate this token
    try{
        let token = req.headers["x-auth-token"]
        if(!token)
        return res.status(401).send({status: false, msg:"Token not present"})
    
        let decodedToken = jwt.verify(token,"functionup-thorium")
        if(!decodedToken)
        return res.status(401).send({status:false,msg:"Token is invalid"})
    
        let userId = req.params.userId
        let userLoggedIn = decodedToken.userId
    
        if(userId !== userLoggedIn ){
            res.status(403).send({status : false, msg : "User is not Allowed to modify the request"})
        } next()
    }
        catch(error)
        {
            res.status(500).send({msg : "eRROR",error : error.message})
        }

    
}

module.exports.mid=mid
