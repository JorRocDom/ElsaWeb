// Lógica para mostrar el calendario con FullCalendar
document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Vista de mes
        selectable: true,  // Habilitar selección de fechas
        select: function(info) {
            const selectedDate = info.startStr; // Obtén la fecha seleccionada
            document.getElementById('hora').value = ''; // Limpiar la hora
            alert(`Has seleccionado el día: ${selectedDate}. Ahora puedes seleccionar una hora.`);
        }
    });

    calendar.render();
});
