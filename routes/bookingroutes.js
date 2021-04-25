const app = require('express').Router();
const bookingOperation = require('../db/helpers/bookingCRUD');
app.post("/save",(req,res)=>{
    console.log(req.body);
    bookingOperation.addItem(req.body,res);
    // console.log(req.body,res);
   
});
app.get("/getDetail",(req,res)=>{
    console.log("hit");
    bookingOperation.getDetail(res);
    // console.log(req.body,res);
   
});

app.delete("/delete",(req,res)=>{

    bookingOperation.deleteItem(req.body,res);
});

app.put("/taskDone",(req,res)=>{

    bookingOperation.updateItem(req.body,res);
});

module.exports = app;