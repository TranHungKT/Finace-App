const db = require('./key'.MongoURI);
const mongoose = require('mongoose');
//connect to Mongo

mongoose.connect(db, {useNewUrlParser: true})
    .then(()=> console.log('MongoDB connected'))
    .catch((err) => console.log(err))


module.exports = db;