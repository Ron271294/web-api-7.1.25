const productModel=require('../models/product');
module.exports = {
    getAll: (req, res) => {
        try {
            productModel.find().then((products)=>{
                return res.status(200).json(products);
            });
            
        }
         catch
           {
            return res.status(500).json({ msg: "500 Server Error", error: error.message });
        }
    },
    getById: (req, res) => {
        try {
            productModel.find({pid:req.params.id}).then((product)=>{
                return res.status(200).json(product);
            });
           
        }  
        catch
        {   
           
        }
    },
    AddNew: (req, res) => {
        try {
            productModel.insertMany([req.body]).then((data)=>{
                return res.status(200).json(data);
            });
        }
        catch
      {      
        return res.status(500).json({msg:"500 server Error"});
    }
    },
    Update:(req,res)=>{
        try 
    {
        productModel.updateOne({pid:req.params.id},req.body).then((product)=>{
            return res.status(200).json({product});
         });
    }
    catch
    {
          return res.status(500).json({Msg:"500 Server Error"});
    }
},
Delete:(req,res)=>{
    try 
{
    productModel.DeleteOne({pid:req.params.id}).then((product)=>{
        return res.status(200).json({product});
     });
}
catch
{
      return res.status(500).json({Msg:"500 Server Error"});
}
}
};
