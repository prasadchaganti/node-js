//all imports

var express = require('express')

var ejs = require('ejs')

var bp = require('body-parser')

var mysql = require('mysql')




var connection = mysql.createConnection({

host:'localhost',

user:'root',

password:'',

database:"frienddatabase"

})







//intializing an express app

var app = express()




//set the view engine for express app

app.set('view engine','ejs')




//set the folder where all views are present

app.set('views',__dirname+'/templates')




//set app to use body-parser to parser to json object comming via POST




app.use(bp.json())




app.get('/',function(req,res){

console.log("received request at")

res.send("</h1>Hello World</h1>")

})

app.get('/about',function(req,res){

console.log("received request at about")

res.render('about')

})

app.get('/',function(req,res){

console.log("received request at home")

res.render('home')

})

//app.get('/contact',function(req,res){

// console.log("received request at contact")

// res.render('contact')

//})




app.post("/contact/:name",function(req,res){

//console.log("Received post request for contact:")

console.log("received post request contactting: " +req.params.name)

console.log(req.body)

res.end()

})




app.post("/contact/:name",function(req,res){

//console.log("Received post request for contact:")

console.log("received post request contactting: " +req.params.name)

console.log(req.body)

res.end()

})




app.post("/add",function(req,res){

console.log("Received JSON Object:" +JSON.stringify(req.body))

var sql = "insert into personal (id,name,location) values ('"

+req.body.id+"','+"

+req.body.name

+"','"+req.body.location +"')"

connection.query(sql,function(err,success){

if(err){

throw err

}else{

console.log("Database insert successfull!!!!")

}

})

})




app.get("/get/:myId",function(req,res){

console.log("Received JSON Object:" +JSON.stringify(req.body))

var myId = req.body.myId;

var sql = "select * from personal where id = 2"

connection.query(sql,function(err,success){

if(err){

throw err

}else{

var result = JSON.parse(JSON.stringify(success))

res.send(result)

console.log("Data retrived successfull!!!!" +result)

res.end()

}

app.post('/update/name/:myid',function(req, res){
    var id=req.params.myid
    var newobject=req.body
    var sqlQuery="update personal set name =' "+ newObject.name+"' where id="+id
connection.query(sqlQuery, function(error , result){
if(error){
 throw error
}else{
 console.log(success)
}

})
})

app.listen(9999)
