const mongooes=require('mongoose');

const movieSchema=new mongooes.Schema({
    moviename:{type:String,required:true},
    Thumbnail:{type:String,require:true},
    movielink:{type:String,required:true}
});

module.exports=mongooes.model('movies',movieSchema);
