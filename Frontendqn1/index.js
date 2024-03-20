const express = require('express')//1
const cors = require('cors')
const {connectToDb,getDb} = require('./db.connection')//Importing required func from dbConnection.cjs
const app = express('path')//2
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())
// const {ObjectId} =require('mongodb')

connectToDb(function(error){
    if(error){
        console.log("can't establish")
    }else{
        const port = process.env.PORT || 3000
        app.listen(port)
        db = getDb() // Returning from getDb()
        console.log(`listening ${port}..`)
    }
})

// const app = express()
app.use(express.json())
// app.use(cors())

app.post('/add-datas',function(request,response){ 
    db.collection('products').insertOne(request.body).then(function(){// insert entry in body
        response.status(201).json({
            'status':'entry added'
        })
    }).catch(function(){
        response.status(500).json({
            'status':'entry is not added'
        })
    }) 
})
app.get('/get-datas',function(request,response) {
    const entries = [] //empty array
    db.collection('products')
    .find() // frst data is pointer
    .forEach(entry => entries.push(entry)).then(function(){// iterate , and push frst entry into entries etc until all datas are pushed
        response.status(200).json(entries)
    }).catch(function(){ // if error , then it is in server(500), if(400) => client side
        response.status(500).json({
            "status" : "entry is not added"
        })
    })
 } )
 app.post('/add-entry',function(request,response){
    var email = request.body.email;
    var name = request.body.name;
    var clientID = request.body.clientID;
    db.collection('register').findOne({email}).then((result) => {
        console.log(result)
        if(result){
            response.status(500).json({
                'status':'You already registered'
            })
        } else {
            db.collection('register').insertOne(request.body).then(function(){
                response.status(201).json({
                    'status':'data added'

                    
                })
            }).catch(function(){
                response.status(500).json({
                    'status':'data is not added'
                })
            }) 
           
        } 
    })
})
 
// mongoose.connect("mongodb://localhost:27017");
// app.listen(3000 , ()=>{
//     console.log("server is running")
// })