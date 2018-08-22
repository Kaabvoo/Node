const net = require('net');
const sha1 = require('crypto-js/sha1')
const base64 = require('crypto-js/enc-base64')

const server = net.createServer((c)=>{
    var x;
    c.on('error', (err)=>{console.log(err.message)})
    c.on('end', ()=>{console.log("Client Disconected")})
    c.on('data', (d)=>{
        console.log(d.toString('utf-8'));
        if(d != "$$$"){
            var key = d.slice(d.lastIndexOf("Key: ") + 5, d.lastIndexOf("==") + 2).toString('utf8');
            var m = base64.stringify(sha1(key + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"));
            c.write('HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ' + m + '\r\n\r\n');
        }
        else{
        }
    })
})

server.listen(8080, "10.16.134.211",()=>{
    console.log("Listening on 8080");
});