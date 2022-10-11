var productModel = require("./../models/products.models");

exports.create = async(req,res) =>{
    try{
        const chkdata = await productModel.chkProduct(req.body.name,req.body.categoryId);
        if(!chkdata)
        {
            let proDetail = {
                "name" : req.body.name,
                "price": req.body.price,
                "categoryId" : req.body.categoryId,
            };
            var products =  await productModel.addProduct(proDetail);
            return res.status(200).send({ message: "Product added successfully!", data: products });
        }
        else
        {
            return res.status(400).json({ error: 'Product already exist in this category' });
        }
    }catch(err){
        return res.status(400).send({ error: "Something went wrong!", error: err });
    }
}

exports.getAll = async(req,res)=>{
    try{
        var products = await productModel.allProduct();
        return res.status(200).send({ message: "Success", data: products });

    } catch(err){
        return res.status(400).send({error: "Failed", error:err});
    }
}

exports.update = async(req,res)=>{
    try{
        const chkdata = await productModel.chkProduct(req.body.name,req.body.categoryId);
        if(!chkdata)
        {
            let proDetail = {       
                "name": req.body.name,
                "price":req.body.price,       
                "categoryId": req.body.categoryId,  
            }  
          var products = await productModel.updateData(req.params.id,proDetail);
          return res.status(200).send({ message: "Product updated successfully", data:products });
       }
       else
       {
        return res.status(400).json({ error: 'Product already exist in this category' });
       }
    }
    catch(err){
        return res.status(400).send({ error: "Something went wrong!", error: err });
    }
 }

 exports.delete = async(req,res)=>{
    try{

       var products = await productModel.deleteData(req.params.id);
       return res.status(200).send({ message: "Product deleted successfully", data: products });
    } catch(err){
       return res.status(400).send({ message: "Could not delete user" });
    }
 }