const express=require('express');
const cors=require('cors');
const app=express();
const mongooes=require('mongoose');
const {userRouter}=require('./routes/userRouter');
const {authRouter}=require('./routes/authRouter');
const {authorRouter}=require('./routes/authorRouter');
const bodyparser=require('body-parser');
require('dotenv').config();
app.use(cors());
app.use(bodyparser.json());
app.use(userRouter);
app.use('/auth',authRouter);
app.use(authorRouter);
mongooes.connect(process.env.MONGO_URL).then(()=>{
app.listen(3000,()=>{
    console.log('http://localhost:3000');
})
})
