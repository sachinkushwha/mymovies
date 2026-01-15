const moviedb=require('../models/movie_db');
exports.Home=async (req,res)=>{
  const page=req.query.page;
  const limit=req.query.limit;
  const skip=(page-1)*limit;
  const movie=await moviedb.find().skip(skip).limit(limit).populate({path:'userId',select:'-password'});
      res.status(200).json(movie);
}



// exports.Onemovie=async(req,res)=>{
//   console.log(req.params.id);
// }
// exports.Check=(req,res)=>{
//   res.status(200).json(req.user);
// }