module.exports=(req, res, next) => {
    let arrips = ["127.0.0.1", "192.168.1.1","::1"]; // מערך של כתובות IP מורשות
    for(let i=0;i<arrips.length;i++ ){
        if (arrips[i]==req.ip) {
            return next(); // אם ה-IP נמצא ברשימה, ממשיך למידלוואר הבא
        }
    }
    // אם ה-IP אינו מורשה
    return res.status(403).json({Msg: "Access Denied: Unauthorized IP"});
};