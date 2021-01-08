class Sockets {

    constructor( io ){
        this.io = io;

        this.socketEvents();
    }

    socketEvents(){
        // On Connection
        this.io.on('connection', ( socket ) => {
            socket.on('socket-to-server', ( data ) => {
                console.log( data );
                this.io.emit('mensaje-from-server', data)
            })
        });
    }
}

module.exports = Sockets;