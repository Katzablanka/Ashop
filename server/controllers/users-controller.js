const{User} = require('../models')
const {validationResult} = require('express-validator/check');

function create(req,res,next){
  const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors:errors.array()})
    }
    //res.send(req.body);
    
    User.findOne({where: {name: req.body.name}}).then(user=>{
        if(user){
             return Promise.reject({statusCode:422, message:'this email is already used'});
        }else{
            const {name,email,phone,rooms,price}=req.body;
            return User.create({name, email, phone,rooms, price});
        }
    })
    .then(user=>{
        res.json(user);
    })
    .catch(error =>{
            res.status(error.statusCode || 400).json({errors: error.message});
    })
}

module.exports={
    create
}