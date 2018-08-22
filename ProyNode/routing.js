const ctrl = require('./controller')

const express = require('express')
const urls = express.Router();

urls.route('/')
    .post(ctrl.getLeaves)
    .get(ctrl.getPayments)

module.exports = urls;