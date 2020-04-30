const express=require('express');
const router=express.Router();

// importing fom controller
const {addEmployee}=require('../controller/employee');

// post router
router.post('/signup',addEmployee);


// exporting router
module.exports=router;