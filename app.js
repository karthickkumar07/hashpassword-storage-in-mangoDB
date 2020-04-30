const express=require('express');
const app=express();

// Middleware requirements
const bodyParser=require('body-parser');

// Db connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/practice', 
{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("DB connected");
})

// middleware part
app.use(bodyParser.json());


const employeeRoutes=require('./route/employee');


//My routes
app.use('/',employeeRoutes);


// server running
app.listen(4000,()=>{
    console.log("app is running at 7000")
})