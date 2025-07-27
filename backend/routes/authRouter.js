const {Router}=require('express');
const authRouter=Router();
const {singupvalidatin,loginvalidatoin}=require('../middilwares/authvalidatin');
const authController=require('../controllers/auth');
authRouter.post('/singup',singupvalidatin,authController.Singup);
authRouter.post('/login',loginvalidatoin,authController.Login);
exports.authRouter=authRouter;