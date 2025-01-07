const express=require('express');
const app=express();
const morgan=require('morgan');


console.log(process.env.GOOGLE_USER);
app.use(morgan('dev'));////הוספת השכבה של מורגן - middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));//הוספת שכבה שמטפלת בבקשות שנשלחו


const secure=require(`./api/v1/middlewares/secure`);
app.use(secure);
app.use('/product',productRauter);//שילוב הראוטר כחלק מהפליקציה

module.exports=app;//app