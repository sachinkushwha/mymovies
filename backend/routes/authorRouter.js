const {Router} = require('express');
const authorRouter=Router();
const {jwtauth}=require('../middilwares/jwtauth');
const authorController=require('../controllers/author');
authorRouter.post('/movies',jwtauth,authorController.Movies);
authorRouter.get('/profile',jwtauth,authorController.Profile);
exports.authorRouter=authorRouter;