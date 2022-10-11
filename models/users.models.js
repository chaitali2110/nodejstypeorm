const db = require("./../database/db");
const Users = require("./../entities/Users");

var userData = db.dataSource.getRepository(Users);

var User = function(user)
{
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.token = user.token;
}

User.signup = async(data)=>{
    const users = await userData.save(data);
    return users;
}

User.signin = async(email,password)=>{
    const users = await userData.findOne({where: { email: email}});
    return users;
}
User.checkemail = async(email,username)=>{
    const users = await userData.findOne({where: { email: email,username: username}});
    return users;
}

User.updateData = async(id,data)=>{
    const user = await userData.findOne({where: { id: id}});
    userData.merge(user, data);
    const result = await userData.save(userData.merge(user, data));
    return result;
}
User.getData = async(token)=>{
    const user = await userData.findOne({where:{token:token}});
    return user;
}
module.exports = User;