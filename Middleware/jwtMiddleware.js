const jwt=require('jsonwebtoken')

const jwtMiddleware=(req,res,next)=>{
    console.log("inside jwt middleware");

    try{
        const token=req.headers['authorization'].split(' ')[1]
        console.log(token);
        if(token){
            const jwtresponse=jwt.verify(token,process.env.secret)
            console.log(jwtresponse);
            req.payload=jwtresponse.userId
            next()
        }else{
            res.status(401).json("provide token")
        }
    }
   catch(err){
    console.log(err);
    res.status(403).json("Login ")
   }
}

module.exports=jwtMiddleware



