const userModel=require('../models/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
exports.Singup= async (req,res)=>{
    try{
    const {name,email,password}=req.body;
    const user=await userModel.findOne({email});
    if(user){
        return res.status(409).json({message:"user is already exist",success:false});
    }
    const usermodel=new userModel({name,email,password});
    usermodel.password=await bcrypt.hash(password,10);
    await usermodel.save();
    res.status(201).json({massage:"singup successful",success:true});
}catch(err){
    console.log(err);
    res.status(500).json({
        massage:"internal server error",
        success:false
    })
}
}

exports.Login= async (req,res)=>{
    try{
    const {email,password}=req.body;
    const user=await userModel.findOne({email});
    if(!user){
        return res.status(403).json({
            message:"user not found singup first",
            success:false
        })
    }
    const ispassequal=await bcrypt.compare(password,user.password);
    if(!ispassequal){
        return res.status(403).json({
            message:"auth faild",
            success:false
        })
    }
    const jwtToken=jwt.sign(
        {email:user.email,_id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:'24h'}
    )

    res.status(200).json({
        message:"login success",
        success:true,
        jwtToken,
        email,
        name:user.name
    })
}catch(err){
    res.status(500).json({
        massage:"inter server error",
        success:false
    })
}
}