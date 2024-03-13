
const mysql = require('mysql2');
require('dotenv').config()

//console.log(process.env) 

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_DATABASE

const db = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    waitForConnections: true,
    connectionLimit: 10,
});


db.connect(function(err) {
    if (err) throw err;
    console.log('DATABASE CONNECTED!');
});


setInterval(() => {
    db.ping((err) => {
        if (err) {
            console.error('Error al realizar ping en la conexión:', err);
        } else {
            console.log('Ping realizado correctamente en la conexión.');
        }
    });
}, 300000); 


module.exports = db;
