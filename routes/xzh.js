let express = require('express');
let  router = express.Router();
let User =require('./bean/User');

router.get('/',(req,res) =>{
    res.render('xzh');
})

router.post('/',(req,res) =>{
   let user= new User( req.body.name, req.body.pass);
   console.log(user);
   req.session.user =user;
   res.send("注册成功");
})

module.exports = router;
