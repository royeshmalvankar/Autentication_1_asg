const jwt = require("jsonwebtoken")

const auth_token = (req,res,next)=>{

    const token = req.headers.authorization?.split(" ")[1]
    if(token){
        try {
            const decoded = jwt.verify(token,"masai")
            if (decoded) {
                req.body.user = decoded
                next()
            }
            else{
                res.send({msg:"token not valid"})
            }
            
        } catch (error) {
            res.send({msg:"authentication error",error})
        }
    }
    else{
        res.send({msg:"Please login first"})
    }
}

    
    


module.exports = auth_token