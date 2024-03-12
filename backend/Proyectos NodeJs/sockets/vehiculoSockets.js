module.exports = (io) => {

    const namespace = io.of('/vehiculo/loc');

    namespace.on('connection', (socket) => {
        console.log('Conexion establecida a socket IO  -> /vehiculo/loc');

        socket.on('position', (data)  => {
            console.log('El Vehiculo emitio :' , data);
            namespace.emit(`position/${data.id}`, {id: data.id, lat: data.lat, lng: data.lng, ubicacion: data.ubicacion });

        });

        socket.on('disconnect', (data) => {
            console.log('Desconexion realizada a socket IO ');
        })
    });
}