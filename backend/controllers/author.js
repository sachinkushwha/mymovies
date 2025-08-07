const movieDb = require('../models/movie_db');
exports.Movies = async (req, res) => {
    try {
        const userId = req.user._id;
        const { moviename, Thumbnail, movielink } = req.body;
        const moviedata = new movieDb({ moviename:moviename.replace(/[- ]/g,''), Thumbnail, movielink, userId });
        await moviedata.save();
        res.status(200).json('movie add successfuly');
    } catch (err) {
        res.status(500).json('your session is expire login agin');
    }

}
exports.Profile = async (req, res) => {
    const userId = req.user._id;
    const profileData = await movieDb.find({ userId }).populate({ path: 'userId', select: "-password" });
    res.status(200).json(profileData);
}

exports.Delete = async (req, res) => {
    try {
        console.log(req.params.id);
        const result = await movieDb.findByIdAndDelete(req.params.id);
        if (result) {
            res.status(200).json('item delete successfuly');
        } else {
            res.status(404).json('item not found');
        }
    } catch (err) {
        res.status(500).json('server error');
    }


}
exports.Update = async (req, res) => {
    try {
        const id = req.params.id;
        const {name,thumbnail,link} = req.body;
        const result = await movieDb.findByIdAndUpdate(id, {moviename:name.replace(/[- ]/g,''),Thumbnail:thumbnail,movielink:link}, { new: true });
        console.log(result);
        res.status(200).json(result);
    }catch(err){
        res.status(500).json('server error');
        console.log('error in update',err);
    }
    
}