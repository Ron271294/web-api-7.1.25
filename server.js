require('dotenv').config();//הפעלת הפונקציה בטעינת הגדרות מהקובץ
const http = require('http');
const app = require('./app');
const port = process.env.PORT|| 7070;
const svr = http.createServer(app);
svr.listen(port,()=>{console.log("server on")});