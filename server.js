const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();
const app = express();

// Connecting DB 
mongoose.connect('mongodb+srv://Nay:yer@langue-api.4h2nrh9.mongodb.net/?retryWrites=true&w=majority', {
}).then(() => {
    console.log("DB CONNECTED")
}).catch(err => {
    console.log("DB NOT CONNECTED " + err)
});

// cors
app.use(cors());

// Listening
app.listen(process.env.PORT || '8000',()=>{
    console.log("Server is running on port 8000");
})

app.get('/', (req, res) => {
    res.send("Salut")
})