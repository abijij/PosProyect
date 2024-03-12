/*
Este módulo establece una conexión a una base de datos MySQL y la exporta para su uso en otros archivos.

Para utilizar este módulo, primero debe requerirse en el archivo donde se desea utilizar la conexión:

const db = require('./db');

Luego, la conexión puede ser utilizada llamando a los métodos de la conexión "db":
*/

// Importar el módulo mysql2 para poder conectarse a la base de datos
const mysql = require('mysql2');

// Crear una conexión a la base de datos con los parámetros de configuracion


const db = mysql.createConnection({
    host: 'prueba.c5uk0cqsuzyh.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'shaco1996',
    database: 'prueba',
    waitForConnections: true,
    connectionLimit: 10,
});

// Conectar a la base de datos y manejar cualquier error que se produzca
db.connect(function(err) {
    if (err) throw err;
    console.log('DATABASE CONNECTED!');
});

// Mantener viva la conexión mediante un ping cada 5 minutos (en milisegundos)
setInterval(() => {
    db.ping((err) => {
        if (err) {
            console.error('Error al realizar ping en la conexión:', err);
        } else {
            console.log('Ping realizado correctamente en la conexión.');
        }
    });
}, 300000); // 5 minutos = 300000 milisegundos

// Exportar la conexión para su uso en otros archivos
module.exports = db;
