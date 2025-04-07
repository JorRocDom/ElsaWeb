const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/elsaWEB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ Conectado a MongoDB'))
    .catch(err => console.log('❌ Error al conectar a MongoDB', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Rutas
const reservasRoutes = require('./routes/reservas');
app.use('/reservas', reservasRoutes);

// Arrancar el servidor
app.listen(3000, () => {
    console.log('🚀 Servidor escuchando en http://localhost:3000');
});
