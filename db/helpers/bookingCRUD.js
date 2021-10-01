const bookingModel = require('../models/bookingSchema');
const uuid = require('uuid');

const bookingOperation = 
{
    addItem(bookingObject,res)
    {
        // console.log(bookingObject);
        //         res.json({"status":"bagh"});
        bookingObject.id = uuid.v4();
        // console.log("this is final",bookingObject);
        console.log("Mayank mera beta");
        bookingModel.create(bookingObject,(err)=>{
            if(err)
            {
                console.log("error in adding data",err);
                res.json({"status":"bagh"});
            }
            else
            {
                console.log("data created");
                res.send(bookingObject);
            }
        })
    },
    getDetail(res)
    {
        bookingModel.find({},(err,doc)=>{
            if(doc)
            {
                res.send(doc);
            }
            else
            {
                console.log(err);
                res.json({"status":"not ok"});
            }
        }); 
    },
    deleteItem(userObject,res)
    {
        console.log(userObject);
      bookingModel.deleteOne(userObject,(err,doc)=>{
          if(doc)
          {
              res.send(doc);
          }
          else
          {
              console.log(err);
              res.json({"status":"not ok"});
          }
      });
    },
    updateItem(userObject,res)
    {
        console.log(userObject);
        bookingModel.findOneAndUpdate({title:userObject.title},{$set:{completed:userObject.completed}},(err,doc)=>{
            if(doc)
            {
                res.send(doc);
            }
            else
            {
                console.log(err);
                res.json({"status":"not ok"});
            }
        });
    }
}
module.exports = bookingOperation;
