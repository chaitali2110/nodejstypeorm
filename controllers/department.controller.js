const DepartmentModel = require("./../models/department.models");


exports.allData = async (req,res)=>{
    try{
        var dept = await DepartmentModel.getAllData();
        return res.status(200).send({ message: "Success", data: dept }); 
    }catch(err){
        return res.status(400).send({ error: "Failed", error: err });
    }
}

exports.Create = async (req,res)=>{
    try{
        var data = req.body;
        var dept = await DepartmentModel.addData(data);
        return res.status(200).send({ message: "Success", data:dept});
    } catch(err){
        return res.status(400).send({error: "Failed",error: err});
    }
}