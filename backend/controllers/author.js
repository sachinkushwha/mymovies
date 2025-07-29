const movieDb=require('../models/movie_db');
exports.Movies=async (req,res)=>{
    const userId=req.user._id;
    const {moviename,Thumbnail,movielink}=req.body;
    const moviedata=new movieDb({moviename,Thumbnail,movielink,userId});
    await moviedata.save(); 
    res.status(200).json('movie add successfuly');
}