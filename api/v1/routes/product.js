const express = require('express');
const router = express.Router();
const {getAll,getById,AddNew,Update,Delete}=require('../controlers/product');//יבוא הפונקציות דרך משתנה


router.get('/',getAll);//נקודת קצה עבור כל המוצרים
//router.get('/',getAll);//נקודת קצה עבור כל המוצרים


router.get('/:id',getById);//עבור מוצר לפי קוד מוצר

router.post('/',AddNew);//עבור הוספת מוצר חדש

router.put('/:id',Update);//עבור עדכון מוצר לפי קוד מוצר המוצרים נקודת קצה

router.delete('/:id',Delete);//עבור מחיקת מוצר לפי קוד מוצר נקודת קצה



module.exports=router;