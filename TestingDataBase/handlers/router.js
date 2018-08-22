const express = require('express');
const urls = express.Router();

const control = require('../controller/controller');

urls.route('/')
    .get(control.controlGet)

urls.route('/NU')
    .post(control.addMessage)
    .get((req, res)=>{res.send("GTFO")});

module.exports = urls;