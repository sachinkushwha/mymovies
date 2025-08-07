const moviedb=require('../models/movie_db');
exports.Home=async (req,res)=>{
  const movie=await moviedb.find().populate({path:'userId',select:'-password'});
      res.status(200).json(movie);
}



// exports.Onemovie=async(req,res)=>{
//   console.log(req.params.id);
// }
// exports.Check=(req,res)=>{
//   res.status(200).json(req.user);
// }