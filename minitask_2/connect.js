var mysqlserver= require('mysql')

var connection = mysqlserver.createConnection({ host:'localhost',
 user:'root', password:'' ,
 database:'sampledatabase'})
connection.connect(function(error){
    if(error)
    {
        throw error
    } else
    {
        console.log("connected to mysql serer !!!")
    }

   // var sql ="insert into personal(name, location) values ('prafull', 'chennai')"
     //connection.query(sql, function(error,success)
    //{
      //  if(error)
        //{
          //  throw error
        //} else
        //{
          //  console.log("connected to mysql serer !!!")
        //}
   // })
})