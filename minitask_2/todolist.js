var express = require('express')

var ejs = require('ejs')

var fileUpload = require('express-fileupload');

var bp = require('body-parser')

var http = require('http')

var https = require('https')

var mysql = require('mysql')

var connection = mysql.createConnection
({ host:'localhost', user:'root', password:'', database:"sampledatabase" })

var app = express()

app.use(bp.json())

app.post("/add",function(req,res){

    console.log("Received JSON Object:" +JSON.stringify(req.body))
    
    var sql = "insert into personal (task) values ('"+req.body.task+"','+"
    
    connection.query(sql, function(err,success){
    
    if(err)
     {
         throw error;
     }
    else
     {
    console.log("Database insert successfull!!!!")
     }
    })
})

app.post('/upload', function(req, res) 
     {
        if (Object.keys(req.files).length == 0) {
            
            return res.status(400).send('No files were uploaded.');
          }

        var sql = "insert into uploads (image) values ('"+req.body.image+"','+"
        
        connection.query(sql, function(err,success)
        {
            if(err)
            {
                throw error;
            }
            else
            {
            console.log("iamge inserted successfully!!!!")
            }
    
    })  
    })
    app.listen(2222)