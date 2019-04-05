import { createConnection } from "net";
import { EILSEQ } from "constants";


console.log(req.body.mobile)

res.end()
app.post("/add", function(req , res)) {

    console.log("received fjson object:"+ JSON.stringify(req.body))
    
    // use connection object to insert JSON to DB

    var sqlquery = " insert into personal (name , location) values(" 
    + req.body.name 
    + " " , " "
    + req.body.location +" ')"

    connection.query(sqlquery, function ( error , success_){

        if(error){
            throw error

        }else
        console.log("database insert success!!!!")
    }
})