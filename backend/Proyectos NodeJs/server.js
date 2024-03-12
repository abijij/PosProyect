const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const logger = require('morgan');
const cors = require('cors');
const multer = require('multer');

const vehiculosSocket = require('./sockets/vehiculoSockets');

const vehiculosRoutes = require('./routes/VehiculosRoutes');

const port = process.env.PORT || 443;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('x-powered-by');

app.set('port', port);

const upload = multer({ storage: multer.memoryStorage() });



vehiculosRoutes(app, upload);

const privateKeyPath = './cert/server.key';
const certificatePath = './cert/server.cer';

const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
const certificate = fs.readFileSync(certificatePath, 'utf8');

const credentials = { key: privateKey, cert: certificate };

const server = https.createServer(credentials, app);

const io = require('socket.io')(server, {
    cors: {
      origin: ['https://prueba-tecnica-khaki.vercel.app','http://localhost:5173'],
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

vehiculosSocket(io);

server.listen(port, '172.26.6.212', function () {
    console.log('Listening on port ' + port + ' with HTTPS');
});


app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

app.get('/', (req, res) => {
    res.send('Root route of the backend');
});

module.exports = {
    app: app,
    server: server
};
