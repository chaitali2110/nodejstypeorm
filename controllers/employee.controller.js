const EmployeeModel = require("./../models/employee.models");

exports.allData = async (req,res) =>{
    try{
        var emps = await EmployeeModel.getAllData();
        return res.status(200).send({ message: "Success", data: emps });

    } catch(err){
        return res.status(400).send({error: "Failed", error:err});
    }
}

exports.Create = async (req,res) =>{
    try{
        var data = req.body;
        var emps = await EmployeeModel.addData(data);
        return res.status(200).send({ message: "Success", data: emps });

    } catch(err){
        return res.status(400).send({error: "Failed", error:err});
    }
}