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
    try{
        const us = await userData.find();
        return us;
    }catch(err){
        return err;
    }
  
}

User.getDataById = async(id) =>{
    try{
        const us = await userData.findOne({where: { id: id}});
        return us;
    }catch(err){
        return err;
    }
}

User.addData = async(data) =>{
    try{
        const us = await userData.save(data);
        return us;
    }catch(err){
        return err;
    }
}

User.deleteData = async(id)=>{
    try{
        const us = await userData.delete({id});
        return us;
    }catch(err){
        err;
    }
}

User.updateData = async(id,data)=>{
    try{
        const user = await userData.findOne({where: { id: id}});
        userData.merge(user, data);
        const result = await userData.save(userData.merge(user, data));
        return result;
    }catch(err){
        return err;
    }
}

User.checkemail = async(email,username)=>{
    try{
        const user = await userData.findOne({where: { email: email,username: username}});
        return user;
    }catch(err){
        return err;
    }     
}

User.loginData = async(email,password)=>{
    try{
        const user = await userData.findOne({where: { email: email}});
        return user;
    }catch(err){
        return err;
    }
}

User.getData = async(verify_token)=>{
    try{
        const user = await userData.findOne({where:{verify_token:verify_token}});
        return user;
    }catch(err){
        return err;
    }
}

module.exports = User;