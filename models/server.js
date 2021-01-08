const express  = require('express');
const path     = require('path');
const http     = require('http');
const socketio = require('socket.io');
const Sockets  = require('./sockets');
const cors     = require('cors');

class Server{
    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        this.server = http.createServer( this.app );

        this.io = socketio( this.server, {
            cors: {
              origin: "*",
              methods: ["GET", "POST"]
            }
        } ); // configuraciones
    }

    middlewares(){
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );
        this.app.use( cors() );
    }

    configurarSockets(){
        new Sockets( this.io );
    }

    
    execute(){
        // inicializar middlewares
        this.middlewares();

        // inicializar sockets
        this.configurarSockets();

        // inicializar Server
        this.server.listen( this.port, () => {
            console.log('Connected to server ' + this.port);
        } );
    }
}

module.exports = Server;