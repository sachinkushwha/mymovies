const mongooes=require('mongoose');

const movieSchema=new mongooes.Schema({
    moviename:{type:String,required:true},
    Thumbnail:{type:String,require:true},
    movielink:{type:String,required:true},
    userId:{
        type:mongooes.Schema.Types.ObjectId,
        ref:'users',
        required:true,
        unique:true
    }
});

module.exports=mongooes.model('movies',movieSchema);
