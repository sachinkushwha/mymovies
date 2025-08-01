const movieDb = require('../models/movie_db');
exports.Movies = async (req, res) => {
    try {
        const userId = req.user._id;
        const { moviename, Thumbnail, movielink } = req.body;
        const moviedata = new movieDb({ moviename, Thumbnail, movielink, userId });
        await moviedata.save();
        res.status(200).json('movie add successfuly');
    }catch(err){
        res.status(500).json('your session is expire login agin');
    }
    
}
exports.Profile = async (req, res) => {
    const userId = req.user._id;
    const profileData = await movieDb.find({ userId }).populate({ path: 'userId', select: "-password" });
    res.status(200).json(profileData);
}