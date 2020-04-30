// schema init
var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

const crypto = require('crypto');
const uuidv1=require('uuid/v1');



/// creating schema
  var employeeSchema=new Schema({
      name:{
          type:String,
          required:true,
          trim:true
      },
      experience:{
          type:Number,
          required:true,
          trim:true,

      },
      domain:{
          type:String,
          required:true,

      },
      encry_password:{
          type:String,
          required:true

      },salt:String, // this salt used to create  secret 
     
  },{timestamps:true});


  employeeSchema.virtual("password")     // virtual used to make store encrypted passeord
    .set(function(password){
        this._password=password;
        this.salt=uuidv1();
        this.encry_password= this.securePassword(password);
    })
    .get(function(){
        return this._password;
    })
  
  employeeSchema.methods={  // methods for schema

   securePassword: function(plainpassword){
       if(!plainpassword) return "";
       try{
           return crypto.createHmac('sha256', this.salt)  // crypto method to make hash value
           .update(plainpassword)
           .digest('hex');
       }
       catch(err){
          return "";
       }
   }
}



  // exporting model
  module.exports=mongoose.model('EmployeeSchema',employeeSchema);