const moviedb=require('../models/movie_db');
exports.Home=async (req,res)=>{
  const movie=await moviedb.find().populate({path:'userId',select:'-password'});
      res.status(200).json(movie);
}

exports.Search=async (req,res)=>{
  try{
  const query=req.query.q.replace(/[- ]/g,'');
  const data=await moviedb.find({moviename:{$regex:query,$options:"i"},}).populate({path:'userId',select:'-password'});
  res.status(200).json(data);
  }catch(err){
    res.status(500).json({message:"search faild",err})
  }
}

// exports.Onemovie=async(req,res)=>{
//   console.log(req.params.id);
// }
// exports.Check=(req,res)=>{
//   res.status(200).json(req.user);
// }