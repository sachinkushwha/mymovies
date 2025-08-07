const {Router}=require('express');
const userRouter=Router();
const userControllers=require('../controllers/user');
const {jwtauth}=require('../middilwares/jwtauth')
userRouter.get('/',userControllers.Home);
// userRouter.get('/check',jwtauth,userControllers.Check);
// userRouter.get('/movie/:id',userControllers.Onemovie);
exports.userRouter=userRouter;