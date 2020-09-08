const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/project',(err) => {
    if(!err){
        console.log('MongooseDB connection successful !');
    }else{
        console.log('Error in DB: '+ JSON.stringify(err,undefined,2));
    }
});

module.exports = mongoose;