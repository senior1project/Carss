
////jwt////
function authentication(req,res,next){
   const token=req.header('Authorization')
   if(!token){
      return res.status(401)}
   jwt.verify(token,secretKey,(err,user)=>{
      if(err){
        return res.status(403)}
      req.user = user
      next()
    })
  }

  module.exports ={authentication}