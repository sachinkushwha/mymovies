const jwt=require('jsonwebtoken');
exports.jwtauth=(req,res,next)=>{
    const auth=req.headers['authorization'];
    if(!auth){
        return res.status(401).json({
            message:"unauthorize , jwt is reuired"
        })
    }
    try{
        const decoded=jwt.verify(auth,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }catch(err){
        return res.status(401).json({
            message:"unauthorize , jwt is worng & expire"
        })
    }
}