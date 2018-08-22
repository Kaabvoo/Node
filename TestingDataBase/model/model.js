const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DataBase = "Buzon"

var mensaje = new Schema({
    mensaje: String,
    persona: String,
    date: Date
})

module.exports = mongoose.model(DataBase, mensaje);