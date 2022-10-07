const con = require("../database/db");
const Users = require("./../entities/User");

// exports.getAllData = con.getRepository(Users);

// exports.getDataById = con.getRepository(Users);

// exports.addData = con.getRepository(Users);

var userData = con.datasource.getRepository(Users);

var User = function(user)
{
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
    this.verify_token = user.verify_token;
}
User.getAllData =  async() =>
{
    const us = await userData.find();
    return us;
}

User.getDataById = async(id) =>{
    const us = await userData.findOne({where: { id: id}});
    return us;
}

User.addData = async(data) =>{
    const us = await userData.save(data);
    return us;
}

User.deleteData = async(id)=>{
    const us = await userData.delete({id});
    return us;
}

User.updateData = async(id,data)=>{
    const user = await userData.findOne({where: { id: id}});
    userData.merge(user, data);
    const result = await userData.save(userData.merge(user, data));
    return result;
}

User.checkemail = async(email,username)=>{
      const user = await userData.findOne({where: { email: email,username: username}});
      return user;
}

User.loginData = async(email,password)=>{
    const user = await userData.findOne({where: { email: email}});
    return user;
}

User.getData = async(verify_token)=>{
    const user = await userData.findOne({where:{verify_token:verify_token}});
    return user;
}

module.exports = User;