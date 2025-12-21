const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser'); //Reads JSON/form data from requests
const dotenv= require('dotenv');
const cors = require('cors');  //This backend allows requests from that frontend.  Cross-Origin Resource Sharing
require("dotenv").config();

const app= express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());   

const URL = process.env.MONGODB_URL;

const connection = mongoose.connection; // create connection

//make connection has only ones.
mongoose.connect(URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

//mongo db load in port
app.listen(PORT , ()=>{
    console.log(`Server is runnong in ${PORT}`);
});

    

    
    
    
