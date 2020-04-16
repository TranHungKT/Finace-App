const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const db = require('./config/key').MongoURI;


const app = express();


//connect to Mongo

mongoose.connect(db, {useNewUrlParser: true})
    .then(()=> console.log('MongoDB connected'))
    .catch((err) => console.log(err))


app.use(bodyParser.json())

//route
app.use('/users',require('./routes/users'));
app.get('/',);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));