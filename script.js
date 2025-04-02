function irASeccion(seccion) {
    // Oculta todas las secciones
    document.querySelectorAll("section").forEach(sec => {
        sec.style.display = "none";
    });

    // Muestra solo la sección seleccionada
    let seccionMostrar = document.getElementById(seccion);
    if (seccionMostrar) {
        seccionMostrar.style.display = "block";
    }
}

// Mensaje temporal en los enlaces del menú
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Esta función estará disponible pronto.");
    });
});

// Confirmación al enviar comentario
document.getElementById("comentarios-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("¡Gracias por tu comentario! Lo revisaremos pronto.");
    this.reset();
});