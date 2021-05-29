var creatConnect  = {}; 
var mysql = require('mysql');
 
var pool = mysql.createPool({ 
 connectionLimit : 10, 
 host      : 'localhost', 
 port      :'3306',
 user      : 'root', 
 password    : 'password', 
 database    : '01'
}); 

creatConnect.sql = function(query, callback){ 
  if (!query) { 
    callback(); 
    return; 
  } 
  pool.query(query, function(err, rows, fields) { 
   if (err) { 
    console.log(err); 
    callback(err, null); 
    return; 
   }; 
   callback(null, rows ); 
  }); 
};
creatConnect.sqlParam = function(query,param, callback){ 
  if (!query) { 
    callback(); 
    return; 
  } 
  pool.query(query,param, function(err, rows, fields) { 
   if (err) { 
    console.log(err); 
    callback(err, null); 
    return; 
   }; 
  
   callback(null, rows ); 
  }); 
} 
module.exports = creatConnect;