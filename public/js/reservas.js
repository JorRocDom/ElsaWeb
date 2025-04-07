// Obtener el formulario y la lista de reservas
const form = document.getElementById('reservaForm');
const reservasList = document.getElementById('reservasList');

// Función para enviar una nueva reserva
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const hora = document.getElementById('hora').value;

    if (!nombre || !hora) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const response = await fetch('http://localhost:3000/reservas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, hora }),
    });

    if (response.ok) {
        alert('Reserva realizada con éxito');
        obtenerReservas();  // Actualizar la lista de reservas
    } else {
        alert('Hubo un error al realizar la reserva');
    }
});

// Función para obtener las reservas
async function obtenerReservas() {
    const response = await fetch('http://localhost:3000/reservas');
    const reservas = await response.json();

    reservasList.innerHTML = '';  // Limpiar la lista

    reservas.forEach((reserva) => {
        const li = document.createElement('li');
        li.textContent = `${reserva.nombre} - ${reserva.hora}`;
        reservasList.appendChild(li);
    });
}

// Obtener las reservas al cargar la página
obtenerReservas();
