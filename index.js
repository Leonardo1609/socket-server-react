// Servidor de express
// const express = require('express');
// const app = express();


// Servidor de sockets
// const server = require('http').createServer(app);

// Configuración del socket server
// const io = require('socket.io')(server);

// Desplegar el directorio público
// app.use( express.static('public') );

// io.on('connection', ( socket ) => {
//     // console.log(socket.id)

//     // socket.emit('mensaje-bienvenida', {
//     //     msg: 'Bienvenido al server',
//     //     fecha: new Date()
//     // });

//     socket.on('socket-to-server', ( data ) => {
//         io.emit('mensaje-from-server', data)
//     })
// });

const Server = require('./models/server');
require('dotenv').config();

const server = new Server();

server.execute();