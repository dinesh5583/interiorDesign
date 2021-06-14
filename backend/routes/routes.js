const express=require('express');
const router=express.Router();
const ObjectId=require('mongoose').Types.ObjectId;
const Employee=require('../models/employees.js');

//Post Api
router.post('/',(req,res)=>{
    let emp=new Employee({
        fname:req.body.fname,
        lname:req.body.lname,
        address:req.body.address,
        phoneno:req.body.phoneno
    });
    emp.save( (err,doc)=>{
        if(err){
            console.log('Error in post APi'+err);

        }else{
            res.send(doc);
        }
    })
});
router.get('/',(req,res)=>{
    Employee.find((err,doc)=>{
        if(err){
            console.log('Error in get Api'+err);
        }else{
            res.send(doc);
        }
    })
});
router.get('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        Employee.findById(req.params.id,(err,doc)=>{
            if(err){
                console.log('Error in get Employee by id'+err);
                

            }else{
                    res.send(doc);
            }
        })

    }else{
        return res.status(404).send('no record found with id'+req.params.id);

    }
});
router.delete('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
            if(err){
                console.log('Error in delete Employee by id'+err);

            }else{
                    res.send(doc);
            }
        })

    }else{
        return res.status(404).send('no record found with id'+req.params.id);

    }
});
router.put('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        let emp={
            fname:req.body.fname,
            lname:req.body.lname,
            address:req.body.address,
            phoneno:req.body.phoneno
    
        };
        Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
            if(err){
                console.log('Error in put Employee by id'+err);

            }else{
                    res.send(doc);
            }
        })

    }else{
        return res.status(404).send('no record found with id'+req.params.id);

    }
});


module.exports=router;