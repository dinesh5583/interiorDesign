const express=require('express');
const cors=require('cors');
const mongoose=require('./db.js');
const routes=require('./routes/routes.js')
const port=process.env.port || 3000;


const app=express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));
app.use(cors({origin:'http://localhost:4200'}));
app.listen(port,()=>console.log('server started at port 3000'));
app.use('/employees',routes)
