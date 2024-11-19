// scripts.js
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
