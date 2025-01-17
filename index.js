
const express =require ('express')
const { connected } = require('process')
const { Socket } = require('socket.io')
const app = express()
const port = process.env.PORT || 8080
const http = require ('http').createServer(app)
const io = require("socket.io")(http)
const mongoose = require('mongoose')
const router =require('./view/message')
const Router =require('./view/customer')
const productRouter =require('./view/product')
const cors =require('cors')
app.use(express.json())
app.use(router)
app.use(Router)
app.use(productRouter)
// app.use(cors())
app.use(cors({
  origin: 'https://amazon-frontend-f1lt.onrender.com',
  allowedHeaders: ['Content-Type'] // Add Content-Type to allowed headers
}));

// mongoose.connect('mongodb://localhost:27017')
  mongoose.connect('mongodb+srv://shivasanthoshqt:Raavan143@cluster0.b4z0d.mongodb.net/amazon-clone-app')  
.then(()=>{
    console.log("mongodb is connected")
})

http.listen(port,()=>{
    console.log(`server is running with port ${port}`)
})

