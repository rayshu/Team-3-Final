var mysql = require('mysql');

// Add the credentials to access your database

var connection = mysql.createConnection({
    host     : '35.222.124.121',
    user     : 'root',
    password : 'abhishek',
    database : 'smarthiringtool'
});

// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err){
       return  console.log(err)
    }
   
        console.log("Connected Successfully to database");
    
});
exports.DbConnect= connection