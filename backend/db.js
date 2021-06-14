const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/meanDB',{ useUnifiedTopology: true , useNewUrlParser: true} ,(err)=>{
    if(!err){
        console.log("DB connection successful");
    }else{
        console.log('error in connection'+err);
    }

})
module.exports=mongoose;
