const mongoose = require('mongoose');
const mongoURI ='mongodb://localhost:27017/foodah';

const connectToMongo=()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("Connection Complete")
    })
}
  

module.exports = connectToMongo ;