const categoryModel = require("./../models/categories.models");


exports.create = async(req,res)=>{
    try{
        const chkData = await categoryModel.chkCategory(req.body.parentId,req.body.catname);
        if(!chkData)
        {
            let catDetail = {
                "parentId" : req.body.parentId,
                "catname" : req.body.catname,
            };
            var categories =  await categoryModel.addCategory(catDetail);
            return res.status(200).send({ message: "Category added successfully!", data: categories });
        }
        else
        {
            return res.status(400).json({ error: 'Category already exist' });
        }
    }catch(err){
        return res.status(400).send({ error: "Something went wrong!", error: err });
    }
}

exports.getAll = async(req,res) =>{
    try{
        var categories = await categoryModel.allCategory();
        return res.status(200).send({ message: "Success", data: categories });
    }catch(err){
        console.log(err);
        return res.status(400).send({ error: "Something went wrong!", error: err });
    }
}