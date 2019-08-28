const express = require('express')
//const cors=require('cors')
const app = express();
// var mysql=require('./mysql.js');
var bodyParser=require("body-parser");
const apiRouter = require('./routes');
//app.use(cors);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var connection;

app.use('/api',apiRouter);


app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
