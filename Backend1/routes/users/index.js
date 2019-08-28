const router = require('express').Router();
const connection=require('../../db').DbConnect;

router.get('/',(req,res)=>{
    res.send({message:"Hello"});
    res.end();
});

router.post('/login',function(req,res){
    var user_name=req.body.user;
    var password=req.body.password;
    // console.log("User name = "+user_name+", password is "+password);
     query="SELECT * from users where racfid_pk='"+user_name+"' and password='"+password+"'";
     console.log(query);
    connection.query(query,function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            return;
        }
       
        message1={
            'message':'Not Authenticated'
        }
        if(rows.length) {
            console.log(345);
            mymessage={
                'message':'Authenticated',
                'role':rows[0].DESIGNATION
            }
            console.log(mymessage);
            res.send(mymessage);
        }
        else{
            res.send(message1);
        }
        
       
     });
    // connection.end(function(){
    //     console.log("Connection closed");
    // });
  });  


  router.post('/signup',function(req,res){
    var signData = req.body;
    // connection=mysql.DbConnect();
    // console.log("data is: ", formData);
    query="INSERT INTO `users`(`RACFID_PK`, `EMAIL`, `DESIGNATION`, `PASSWORD`, `SECURITY_KEY`) VALUES ('"+signData.racfId+"','"+signData.email+"','"+signData.designation+"','"+signData.password+"','"+signData.verifierEmail+"')";
    console.log(query);
    connection.query(query,function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            return;
        }
        message={
            'message':'Authenticated'
        }
        // message1={
        //     'message':'Not Authenticated'
        // }
    //     if(rows.length) 
    //     res.send(message);
    //     else
    connection.commit(function(err) {
        if (err) {
         return db.rollback(function() {
             throw err;
          });
      }
        res.send(message);
         console.log('success!');
     });
        
    });
    // connection.end(function(){
    //     console.log("Connection closed");
    // });
  });  

  router.post('/forgot',function(req,res){
     var racf=req.body;
    // connection=mysql.DbConnect();
    // console.log("data is: ", formData);
    query="SELECT * from users where racfid_pk='"+racf.racfId+"'";
    console.log(query);
    connection.query(query,function(err, rows, fields) {
        if(err){
            console.log(err);
            return;
        }
        message={
            'message':rows[0].PASSWORD
        }
        // message1={
        //     'message':'Not Authenticated'
        // }
    //     if(rows.length) 
    //     res.send(message);
    //     else
    connection.commit(function(err) {
        if (err) {
         return db.rollback(function() {
             throw err;
          });
      }
      console.log(rows[0].PASSWORD);

        res.send(message);
         console.log('success!');
     });
    
    });
    // connection.end(function(){
    //     console.log("Connection closed");
    // });
  });  

module.exports = router;