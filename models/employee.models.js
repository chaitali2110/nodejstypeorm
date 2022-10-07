const con = require("./../database/db");
const Employees = require("./../entities/Employee");

const empData = con.datasource.getRepository(Employees);

var Employee = function(employee)
{
    this.name = employee.name;
    this.email = employee.email;
    this.departmentId = employee.departmentId;
}

Employee.addData = async(data)=>{
   const emp = await empData.save(data);
   return emp;
}

Employee.getAllData = async() =>{
    try{
        const emp = await empData.find({relations: ['departmentinfo']});
        return emp;
    }catch(err){
        console.log(err);
    }
    
}

module.exports = Employee;