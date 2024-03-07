// const fs = require('fs')
// const http = require('http')

// http.createServer(function(request, response) {
//     response.writeHead(200, {
//         'Content-Type' : 'text/plain'
//     })

//     // Sending a simple response
//     // response.write('welcome')

//     // Serving a HTML file
//     const file = fs.readFileSync('./index.html')
//     response.write(file)

//     response.end()
// }).listen(4000, function() {
//     console.log('Listening on port 4000...')
// })
// const express = require('express')
// const bodyParser = require('body-parser')
// const app= express()
// app.use(bodyParser.json())  
// app.get('/',function(request,response){
//     response.status(200).send('welcome') 
// })
// app.post('/java',function(request,response){  //Java handling
//     response.status(200).json({
//         "about":"java" 
// })
// }) 
// app.post('/validate-user',function(request,response){ 
//     console.log(request.body)
//     response.status(200).json({
//         "status":"request received"
// }) 
// })
// app.listen(8000,function(){
//     console.log('listening  port 4000') 
// })   
const express = require('express')
const mongoose = require('mongoose')
const {Expense} = require('./schema.js') 

const app = express()

async function connectToDb() {
    try {
        await mongoose.connect('mongodb+srv://BhavanikaaSmpathkumar:Pollachi1312@bhavanikaa.lzxavyk.mongodb.net/?retryWrites=true&w=majority&appName=Bhavanikaa')
        console.log('DB connection established ;)')

        const port = 4000
        app.listen(port, function() {
            console.log(`Listening on port ${port}...`)
        })
    } catch(error) {
        console.log(error)
        console.log('Couldn\'t establish connection :(')
    }
}
connectToDb() 