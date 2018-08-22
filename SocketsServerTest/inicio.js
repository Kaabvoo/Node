const net = require('net');

var client = net.createConnection(8018, "10.16.134.192")
client.on('data', (c)=>{console.log(c.toString('utf8'))})
client.write("WapaJe!");
client.on('error', (c)=>{
    console.log(c.message);
})