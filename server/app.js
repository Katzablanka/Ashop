const express = require('express');
const app = express();
const {body, validationResult} = require('express-validator/check');
const bodyParcer = require('body-parser');
const {userValidator} = require('./services/validators');
const UserController = require('./controllers/users-controller');


app.use(express.json());
 
app.get('/helo',(req,res,next)=>{
    res.send('helo');
})

app.post('/card',userValidator,UserController.create)

app.listen(4000,()=>{
    console.log('server started on port 4000')
})