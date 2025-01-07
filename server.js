require('dotenv').config();//הפעלת הפונקציה בטעינת הגדרות מהקובץ
const http = require('http');
const app = require('http');
const port = 7070;
const svr = http.createServer(app);
svr.listen(port,()=>{console.log("server on")});