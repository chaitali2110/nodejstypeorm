const con = require("../database/db");
const Departments = require("./../entities/Department");

var deptData = con.datasource.getRepository(Departments);

var Department = function(department)
{
    this.name = department.name;
}

Department.getAllData = async () =>{
    const dept = await deptData.find();
    return dept;
}

Department.addData = async(data) =>{
    const dept = await deptData.save(data);
    return dept;
}

module.exports = Department;