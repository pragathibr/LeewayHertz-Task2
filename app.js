const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express()

app.use(cors());
app.use(bodyParser.json());

//Import routes
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("DB CONNECTED!!!");
})
.catch(()=>{
    console.log("DB NOT CONNECTED!!!")
});


app.get('/',(req,res) => {
res.send("WE ARE ON HOME")
});


app.listen(3000);