const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const urlRouter = require('./routes/url.routes');
const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL || 'mongodb+srv://ayman:letmein123@cluster0.skwep.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const db = mongoose.connect(DB_URL, {

    useNewUrlParser: true, 
    
    useUnifiedTopology: true 
    
    }
        ).
        then(res => res)
        .catch(err => console.log(err));
const app = express();
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../client/index.html'));
    })
app.use(express.json());
app.use(express.static('public'));
app.use('/url', urlRouter);
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});