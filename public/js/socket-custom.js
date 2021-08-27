 //io=esta es la comunicacion del backend
 var socket = io();
 socket.on('connect', function() {
     console.log('Conectado al seriDor');
 });
 //on para escuchar procesos
 socket.on('disconnect', function() {
     console.log('Perdimod la conexion');
 });
 //emit para enviar informacion
 socket.emit('enviarMensaje', {
     usuario: 'Fernando',
     mensaje: 'Hola Mundo'
 }, function(resp) {
     console.log('respuesta server: ', resp);
 });
 socket.on('enviarMensaje', function(mensaje) {
     console.log('servidor: ', mensaje);
 });