const { io } = require('../server');
io.on('connection', (cliente) => {
    console.log('Uusario conectado');

    cliente.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });
    //on para escuchar procesos
    cliente.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    //escuchar el cliente
    cliente.on('enviarMensaje', (data, callback) => {
        console.log(data);
        cliente.broadcast.emit('enviarMensaje', data);
        /* if (mensaje.usuario) {
             callback({
                 resp: 'todo salio bien '
             });
         } else {
             callback({
                 resp: 'todo salio bien '
             });
         }*/

    })
});