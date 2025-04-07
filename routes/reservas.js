const express = require('express');
const Reserva = require('../models/reserva');
const router = express.Router();

// Ruta para crear una nueva reserva
router.post('/', async (req, res) => {
    try {
        const { nombre, hora } = req.body;
        const nuevaReserva = new Reserva({ nombre, hora });
        await nuevaReserva.save();
        res.status(201).send('Reserva realizada con éxito');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al guardar la reserva');
    }
});

// Ruta para obtener todas las reservas
router.get('/', async (req, res) => {
    try {
        const reservas = await Reserva.find();
        res.status(200).json(reservas);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener las reservas');
    }
});

module.exports = router;
