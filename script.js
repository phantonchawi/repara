// scripts.js
<script src="script.js"></script>

// Simula la obtención de datos de visitas
const visits = {
    weekly: 150,  // Cambia esto por datos reales más adelante
    monthly: 620
};

// Función para actualizar las visitas en la página
function updateVisits() {
    document.getElementById('weekly-visits').textContent = visits.weekly;
    document.getElementById('monthly-visits').textContent = visits.monthly;
}

// Llama a la función cuando se cargue la página
window.onload = updateVisits;

document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        alert(`Gracias, ${nombre}, por tu mensaje. Nos pondremos en contacto contigo.`);
        
    } else {
        alert('Por favor, rellena todos los campos.');
    }
});
