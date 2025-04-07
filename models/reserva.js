const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    hora: { type: String, required: true },
    fecha: { type: Date, default: Date.now }
});

const Reserva = mongoose.model('Reserva', reservaSchema);
module.exports = Reserva;
