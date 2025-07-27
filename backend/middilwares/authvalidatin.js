const joi=require('joi');

exports.singupvalidatin=(req,res,next)=>{
const schema = joi.object({
    name:joi.string().required(),
    email:joi.string().email().required(),
    password:joi.string().required(),
});
const {error}=schema.validate(req.body);
if(error){
    return res.status(400).json({message:"bad request",error});
}
next();
}

exports.loginvalidatoin=(req,res,next)=>{
    const schema=joi.object({
        email:joi.string().required(),
        password:joi.string().required()
    });
    const {error}=schema.validate(req.body);
    if(error){
        return res.status(400).json({message:"bad request",error});
    }
    next();
}

