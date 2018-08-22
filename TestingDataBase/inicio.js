const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const model = require('./model/model');
mongoose.connect('mongodb://localhost:27017/NodeTesting');

const newM = require('./handlers/router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', newM);

    // function abc(){
    //     var items = model.find();
    //     // items.sort({ mensaje: 'desc' })
    //     // items.limit(5)
    //     items.exec(function(err, results) {
    //         console.log(results);
    //     });

    // }

    // // abc();

    // // var msj = 

    // // mongoose.connection.db.collection();
    // // mongoose.disconnect();

console.log("[Finished]");
app.listen(43211, ()=>{
    console.log("Listening on port 43211");
})