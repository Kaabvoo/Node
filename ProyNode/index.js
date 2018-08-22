const rout = require('./routing')

const express = require('express');
const app = express();
const bp = require('body-parser');
var cors = require('cors');

app.use(cors());
app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

app.use('/getLeaves', rout)
// app.post('/', ()=>{console.log("Hello!")})

app.listen(8080, ()=>{
    console.log("Escuchando en 8080")
})