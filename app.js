const express=require('express');
const app=express();
const morgan=require('morgan');
const mongoose = require('mongoose');
const productRouter=require('./api/v1/routes/product');
const mongoConnstr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.zdldv.mongodb.net/WebApi2025`;

mongoose.connect(mongoConnstr).then(()=>{
    console.log('connected to mongo');
})


console.log(process.env.GOOGLE_USER);
app.use(morgan('dev'));////הוספת השכבה של מורגן - middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));//הוספת שכבה שמטפלת בבקשות שנשלחו



// const secure=require(`./api/v1/middlewares/secure`);
// app.use(secure);
app.use('/product',productRouter);//שילוב הראוטר כחלק מהפליקציה
app.all('*', (req, res) => {
    return res.status(404).json({ msg: "not found" });
});

module.exports=app;//app