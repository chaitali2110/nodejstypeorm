var productModel = require("./../models/products.models");

exports.create = async(req,res) =>{
    try{
        const chkdata = await productModel.chkProduct(req.body.name,req.body.categoryId);
        if(!chkdata)
        {
            var file = req.file;
            var image = file.path;
            let proDetail = {
                "name" : req.body.name,
                "price": req.body.price,
                "categoryId" : req.body.categoryId,
                "image":  image,
            };
           
            var products =  productModel.addProduct(proDetail);
            return res.status(200).send({ message: "Product added successfully!", data: products });
        }
        else
        {
            return res.status(400).json({ error: 'Product already exist in this category' });
        }
    }catch(err){
        console.log(err);
        return res.status(400).send({ error: "Something went wrong!", error: err });
    }
}

exports.getAll = async(req,res)=>{
    try{
        var page = req.body.page;
        var take = req.body.take;
        var products = await productModel.allProduct(page,take);
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
            if(!req.file.image) {
                var proDetail = {       
                    "name": req.body.name,
                    "price":req.body.price,       
                    "categoryId": req.body.categoryId
                } 
            }else{
                var proDetail = {       
                    "name": req.body.name,
                    "price":req.body.price,       
                    "categoryId": req.body.categoryId,
                    "image":  req.file.originalname,   
                } 
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
        console.log(err);
        return res.status(400).send({ error: "Something went wrong!", error: err });
    }
 }

 exports.delete = async(req,res)=>{
    try{
        const chkdata = await productModel.chkProduct(req.params.id);
        if(chkdata != null)
        {
            var products = await productModel.deleteData(req.params.id);
            return res.status(200).send({ message: "Product deleted successfully", data: products });
       }
       else
       {
        return res.status(400).json({ error: 'Not Found' });
       }
    } catch(err){
       return res.status(400).send({ message: "Could not delete user" });
    }
 }

 exports.getCatWiseProduct = async(req,res)=>{
    try{
        var products = await productModel.getCatProduct(req.params.id);
        return res.status(200).send({ message: "Success", data: products });

    } catch(err){
        return res.status(400).send({error: "Failed", error:err});
    }
 }