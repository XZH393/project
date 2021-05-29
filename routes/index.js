var express = require('express');
var router = express.Router();
var db =require('./db/db');

router.get('/', function(req, res, next) {
  db.sql("select * from goods order by id desc",(err,rows) =>{
    res.render('index',{data:rows});
})
});


router.get('/add',(req,res) =>{
  if(req.query.id !=undefined){
    db.sqlParam("select *from goods where id = ?",[req.query.id],(err,row) =>{
      res.render('add',{row:row[0]});
    })
  }else{
      res.render('add')
  }
});

router.post('/add',(req,res) =>{
  db.sqlParam("insert into goods(id ,name, num) value(?,?,?)",[
    req.body.id,
    req.body.name,
    req.body.num
  ],(err,row) =>{
    res.redirect("/")
  })
})
module.exports = router;

module.exports = router;
