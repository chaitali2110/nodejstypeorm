const userModel = require("./../models/users.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.register = async (req,res)=>{
    try{
        const chkdata = await userModel.checkemail(req.body.email,req.body.username);
        if(!chkdata)
        {
           const encryptedPassword = await bcrypt.hash(req.body.password, saltRounds);
           let jwtSecretKey = process.env.JWT_SECRET_KEY;
           let data = {
              time: Date(),
              userId: 12,
           }
           const token = jwt.sign(data, jwtSecretKey);
           let usersdetail = {       
            "name": req.body.name,
            "username":req.body.username,       
            "email": req.body.email,       
            "password": encryptedPassword,
            "token":token,
           }  
           var users = await userModel.signup(usersdetail);
           return res.status(200).send({ message: "User created successfully!", data: users });
        }
        else
        {
           return res.status(400).json({ error: 'Email and/or Username already used' });
        }
     } catch(err){
        return res.status(400).send({ error: "Something went wrong!", error: err });
     }
}

exports.login = async (req,res)=>{
    try{
       
       const encryptedPassword = await bcrypt.hash(req.body.password, saltRounds);
 
       const user = await userModel.signin(req.body.email,encryptedPassword);
       const isPasswordMatched = await bcrypt.compare(req.body.password,user.password);
 
      
       if(isPasswordMatched)
       {
          const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
             expiresIn: process.env.JWT_EXPIRE,
         });
       
         const users = {
            "name" : user.name,
            "username" : user.username,
            "email" : user.email,
            "token" : token
         }
         const update = await userModel.updateData(user.id,users);
         return res.status(200).send({ message: "User Login successfully",data :update });
       }
       else
       {
          return res.status(400).json({ error: 'Invalid Email and Password' });
       }
 
      
    } catch(err){
       return res.status(400).send({ message: "Login Invalid" });
    }
 }

 exports.update = async(req,res)=>{
    try{
       const chkdata = await userModel.checkemail(req.body.email,req.body.username);
       if(!chkdata)
       {
          const encryptedPassword = await bcrypt.hash(req.body.password, saltRounds);
          let jwtSecretKey = process.env.JWT_SECRET_KEY;
          let data = {
             time: Date(),
             userId: 12,
          }
          const token = jwt.sign(data, jwtSecretKey);
          let usersdetail = {       
          "name": req.body.name,
          "username":req.body.username,       
          "email": req.body.email,       
          "password": encryptedPassword,
          "token":token,
          }  
          var users = await userModel.updateData(req.params.id,usersdetail);
          return res.status(200).send({ message: "User updated successfully", users });
       }
       else
       {
          return res.status(400).json({ error: 'Email and/or Username already used' });
       }
    }
    catch(err){
       return res.status(400).send({ message: "Could not update user" });
    }
 }

 exports.userDataa = async (req,res)=>{
   try{
      var users = await userModel.getData(req.headers['auth-token']);
      const userss = {
         "name":users.name,
         "username":users.username,
         "email":users.email
      }
      return res.status(200).send({ message: "Success", data: userss});

   } catch (err) {
      return res.status(400).send({ error: "Failed", error: err });
   }
   
}

exports.CatByProduct = async(req,res)=>{
   try{

   }catch(err){
      
   }
}