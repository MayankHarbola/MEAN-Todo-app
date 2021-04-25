const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin@shopdb.ykzx1.mongodb.net/MEANtodo?retryWrites=true&w=majority");
mongoose.connection.on('open',()=>{
    console.log('connected to Database :-)')
});

module.exports = mongoose;