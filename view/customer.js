const express = require('express')
const Router = express.Router()
const usersSchema = require('../model/customer')
const {signup,login ,getusers} = require('../controller/customer')
const jwt = require('jsonwebtoken')

Router.post('/signup', signup )
Router.post( '/login' , login )

Router.get("/", (req, res) => {
res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
 });



Router.get('/getUsers', (req,res,next)=>{
   let token = (req.headers.authorization)
   if(!token){
    res.json({Message :" Token is required"})
   }
  
   try{ let result = jwt.verify( token, "shh")
    console.log(result)
    if(result.Role == 1 ){
    next(); 
    } else{
    return res.json({
        message : " You are not a Admin ,only admins can access"
    })
    }
   
     } catch(err){
    res.json(err);
   }
 
    return console.log("testing")
} , getusers )

module.exports= Router
