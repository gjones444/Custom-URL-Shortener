const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const urlRouter = require('./routes/url.routes');
const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL
mongoose.connect(DB_URL,{

    user: process.env.DB_USER, 
    
    pass: process.env.DB_PASS,

    useNewUrlParser: true, 
    
    useUnifiedTopology: true 
    
    }
        ).
        then(res => res)
        .catch(err => console.log(err));
const app = express();
app.use(express.json());
app.use(express.static('../public'));
app.use('/url', urlRouter);
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});