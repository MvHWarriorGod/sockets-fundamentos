const express = require('express');
const sockeIO = require('socket.io'); //libreria de los sockets
const http = require('http'); //libreria de http que viene incluido con el paquete de nodejs

const path = require('path');


const app = express();
//crear el servidor
let server = http.createServer(app);
//hacemos publica  la carpeta public
const publicPath = path.resolve(__dirname, '../public');
//congiguracion del puerto
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//io=esta es la comunicacion del frontend
module.exports.io = sockeIO(server);
require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});