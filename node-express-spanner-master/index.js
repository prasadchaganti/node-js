//import google cloud spanner client library
var {Spanner} = require('@google-cloud/spanner')
var express = require('express')
var bp = require('body-parser')


const myProjectId = 'nodespanner-236509'
const myInstanceId = 'nodespannerinstance'
const myDatabaseId = 'databasefriends'

const spanner = new Spanner({projectId:myProjectId})
const instance = spanner.instance(myInstanceId)
const database = instance.database(myDatabaseId)
const personaldetailTable = database.table('reviews')

const myquery = {
    sql:'select * from personaldetail'
}

const myqueryinsert = {
    sql:"insert personaldetail (name, location, id) values ('Adi', 'Chennai', 3)"
}


var app = express()
app.use(bp.json())

app.get("/spanner/all", async function(req, res){
    try {
            await database.run(myquery).then((results)=>{
                  console.log("Results Object:" )
                  console.log(results[0])
                  const rows = results[0]
                  res.send(rows)
                  res.end()
                }).catch(error =>{
                    console.error("Error Then: ", error)
                })
    } catch (error) {
        console.error("Error Try/Catch:", error)
    }

})

app.post("/spanner/add", async (req, res)=>{
    try {
        await personaldetailTable.insert([
            {id:'5', name:'OWIOH', location:'Ahmedabad'}
        ])
        res.send("insert success")
        console.log("insert success")

    } catch (error) {
        console.error("Error try/catch: ", error)
    }
    res.end()
   
})

app.post("/spanner/added", async (req, res)=>{
    try {
        await personaldetailTable.insert([
            {id:'555', reviewTitle:'Facebook', reviewDescription:'freiendly use interface', username:'prasad',likes:'2'}
        ])
        res.send("insert success")
        console.log("insert success")

    } catch (error) {
        console.error("Error try/catch: ", error)
    }
    res.end()
   
})

app.post("/spanner/updated", async (req, res)=>{
    try {
        await reviews.update([
            {id:'66', reviewTitle:'instragaram', reviewDescription:'nice to use', username:'sai', likes:'11'}
        ])
        res.send("update success")
        console.log("update success")

    } catch (error) {
        console.error("Error try/catch: ", error)
    }
    res.end()
   
})


app.post("/spanner/update", async (req, res)=>{
    try {
        await personaldetailTable.update([
            {id:'5', name:'OWIOH', location:'Bengaluru'}
        ])
        res.send("update success")
        console.log("update success")

    } catch (error) {
        console.error("Error try/catch: ", error)
    }
    res.end()
   
})

app.listen(1111)