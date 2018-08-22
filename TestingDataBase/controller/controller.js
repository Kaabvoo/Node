var model = require('../model/model');

var controller = {
    controlGet(req, res){
        console.log("Request from IP:", req.ip,"protocol:", req.protocol);
        res.status(200).send('<h1>Wellcome!</h1>');
    },

    addMessage(req, res){
        var mo = new model({
            persona: req.body.persona,
            mensaje: req.body.mensaje,
            date: Date.now()
        })
        mo.save();
        // console.log(req.body);
        res.status(200).send("OK");
    }
}
module.exports = controller;