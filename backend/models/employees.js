const mongoose=require('mongoose');
const Employee=mongoose.model('Employee',{
    fname:{type: String},
    lname:{type:String},
    address:{type:String},
    phoneno:{type:Number}

});
module.exports=Employee;