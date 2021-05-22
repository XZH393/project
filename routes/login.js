let express = require ('express');
let router = express.Router();

router.get('/',(req,res) => {
    res.render('login')
});
router.post('/login',(req,res) =>{
    let name = req.body.name;
    let pass  =req.body.pass;
    if(req.session.user !=undefined && name == req.session.user.name
        && pass == req.session.user.pass
    ){
        res.send("http://down.chinaz.com/softpic.asp?pid=81480")
    }
    else{
        res.send("登入失败");
    }
})

module.exports = router;
// http://down.chinaz.com/softpic.asp?pid=81480