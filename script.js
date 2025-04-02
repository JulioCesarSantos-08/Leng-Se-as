// Función para navegar entre secciones con desplazamiento suave
function irASeccion(seccion) {
    if (seccion === 'menu') {
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
    } else if (seccion === 'inicio') {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('inicio').style.display = 'block';
    }
}

// Variables para el juego de preguntas
let preguntas = [
    { imagen: 'minicuestionario/letraA.png', opciones: ['P', 'A', 'M'], respuestaCorrecta: 'A' },
    { imagen: 'minicuestionario/letraK.png', opciones: ['M', 'Y', 'K'], respuestaCorrecta: 'K' },
    { imagen: 'minicuestionario/W.png', opciones: ['W', 'Ñ', 'M'], respuestaCorrecta: 'W' },
    { imagen: 'minicuestionario/letraC.png', opciones: ['O', 'C', 'P'], respuestaCorrecta: 'C' },
    { imagen: 'minicuestionario/letraT.png', opciones: ['Y', 'T', 'X'], respuestaCorrecta: 'T' },
    { imagen: 'minicuestionario/letraR.png', opciones: ['P', 'R', 'S'], respuestaCorrecta: 'R' },
    { imagen: 'minicuestionario/letraE.png', opciones: ['L', 'E', 'F'], respuestaCorrecta: 'E' },
    { imagen: 'minicuestionario/letraU.png', opciones: ['S', 'O', 'U'], respuestaCorrecta: 'U' },
    { imagen: 'minicuestionario/letraM.png', opciones: ['N', 'W', 'M'], respuestaCorrecta: 'M' },
    { imagen: 'minicuestionario/letraY.png', opciones: ['Y', 'T', 'R'], respuestaCorrecta: 'Y' }
];

let preguntaActual = 0;
let puntuacion = 0;
let respuestasIncorrectas = [];

// Mostrar una pregunta
function mostrarPregunta() {
    if (preguntaActual < preguntas.length) {
        let pregunta = preguntas[preguntaActual];
        document.getElementById('pregunta').innerHTML = `<img src="${pregunta.imagen}" alt="Seña">`;

        let opcionesHTML = '';
        pregunta.opciones.forEach(opcion => {
            opcionesHTML += `<button class="opcion" onclick="verificarRespuesta(this, '${opcion}')">${opcion}</button>`;
        });

        document.getElementById('opciones').innerHTML = opcionesHTML;
    } else {
        mostrarResultado();
    }
}

// Verificar la respuesta seleccionada
function verificarRespuesta(boton, respuesta) {
    let pregunta = preguntas[preguntaActual];

    // Deshabilitar todos los botones para evitar respuestas múltiples
    document.querySelectorAll('.opcion').forEach(btn => btn.disabled = true);

    if (respuesta === pregunta.respuestaCorrecta) {
        puntuacion++;
        boton.style.backgroundColor = 'green';
    } else {
        boton.style.backgroundColor = 'red';
        
        // Mostrar la respuesta correcta en verde
        document.querySelectorAll('.opcion').forEach(btn => {
            if (btn.textContent === pregunta.respuestaCorrecta) {
                btn.style.backgroundColor = 'green';
            }
        });

        // Guardar la pregunta en la lista de respuestas incorrectas
        respuestasIncorrectas.push({
            imagen: pregunta.imagen,
            respuestaUsuario: respuesta,
            respuestaCorrecta: pregunta.respuestaCorrecta
        });
    }

    // Esperar un segundo antes de pasar a la siguiente pregunta
    setTimeout(() => {
        preguntaActual++;
        mostrarPregunta();
    }, 1500);
}

// Mostrar el resultado final
function mostrarResultado() {
    document.getElementById('puntuacion').textContent = `${puntuacion}/10`;
    document.getElementById('opciones').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';

    let erroresHTML = '<h3>Preguntas incorrectas:</h3>';
    if (respuestasIncorrectas.length > 0) {
        respuestasIncorrectas.forEach(error => {
            erroresHTML += `
                <div class="error">
                    <img src="${error.imagen}" alt="Seña incorrecta">
                    <p>Tu respuesta: <span style="color: red;">${error.respuestaUsuario}</span></p>
                    <p>Respuesta correcta: <span style="color: green;">${error.respuestaCorrecta}</span></p>
                </div>
            `;
        });
    } else {
        erroresHTML += "<p>¡Felicidades! No cometiste errores.</p>";
    }

    document.getElementById('errores').innerHTML = erroresHTML;
}

// Reiniciar el juego
function reintentar() {
    preguntaActual = 0;
    puntuacion = 0;
    respuestasIncorrectas = [];

    // Restaurar el color y habilitar los botones de opciones
    document.querySelectorAll('.opcion').forEach(btn => {
        btn.style.backgroundColor = ''; // Reiniciar el color
        btn.disabled = false; // Habilitar los botones nuevamente
    });

    document.getElementById('resultado').style.display = 'none';
    document.getElementById('opciones').style.display = 'block';
    document.getElementById('errores').innerHTML = '';

    mostrarPregunta();
}

// Volver al menú
function salir() {
    window.location.href = 'index.html'; // Regresar al menú principal
}

// Mostrar la primera pregunta cuando se inicie el juego
mostrarPregunta();

// Función para navegar entre secciones con desplazamiento suave
function irASeccion(seccion) {
    if (seccion === 'menu') {
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
    } else if (seccion === 'inicio') {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('inicio').style.display = 'block';
    }
}

// Mostrar la sección de minijuegos
function mostrarMinijuegos() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('minijuegos').style.display = 'block';
}

// Volver al menú principal desde los minijuegos
function volverMenu() {
    document.getElementById('minijuegos').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}