// Función para navegar entre secciones con desplazamiento suave
function irASeccion(seccion) {
    // Ocultar la sección de inicio y mostrar el menú
    if (seccion === 'menu') {
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
    } else if (seccion === 'inicio') {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('inicio').style.display = 'block';
    }
}

let preguntas = [
    {
        imagen: 'minicuestionario/letraA.png', // Cambia esto por la ruta de tu imagen 
        opciones: ['P', 'A', 'M'],
        respuestaCorrecta: 'A'
    },
    {
        imagen: 'minicuestionario/letraK.png',
        opciones: ['M', 'Y', 'K'],
        respuestaCorrecta: 'K'
    },
    {
        imagen: 'minicuestionario/letraW.png',
        opciones: ['W', 'Ñ', 'M'],
        respuestaCorrecta: 'W'
    },
    {
        imagen: 'minicuestionario/letraC.png',
        opciones: ['O', 'C', 'P'],
        respuestaCorrecta: 'C'
    },
    {
        imagen: 'minicuestionario/letraT.png',
        opciones: ['Y', 'T', 'X'],
        respuestaCorrecta: 'T'
    },
    {
        imagen: 'minicuestionario/letraR.png',
        opciones: ['P', 'R', 'S'],
        respuestaCorrecta: 'R'
    },
    {
        imagen: 'minicuestionario/letraE.png',
        opciones: ['L', 'E', 'F'],
        respuestaCorrecta: 'E'
    },
    {
        imagen: 'minicuestionario/letraU.png',
        opciones: ['S', 'O', 'U'],
        respuestaCorrecta: 'U'
    },
    {
        imagen: 'minicuestionario/letraM.png',
        opciones: ['N', 'W', 'M'],
        respuestaCorrecta: 'M'
    },
    {
        imagen: 'minicuestionario/letraY.png',
        opciones: ['Y', 'T', 'R'],
        respuestaCorrecta: 'Y'
    },
    
    // Agrega más preguntas hasta 10
];

let preguntaActual = 0;
let puntuacion = 0;

function mostrarPregunta() {
    if (preguntaActual < preguntas.length) {
        let pregunta = preguntas[preguntaActual];
        document.getElementById('pregunta').innerHTML = `<img src="${pregunta.imagen}" alt="Seña">`;
        let opcionesHTML = '';
        pregunta.opciones.forEach(opcion => {
            opcionesHTML += `<button onclick="verificarRespuesta('${opcion}')">${opcion}</button>`;
        });
        document.getElementById('opciones').innerHTML = opcionesHTML;
    } else {
        mostrarResultado();
    }
}

function verificarRespuesta(respuesta) {
    if (respuesta === preguntas[preguntaActual].respuestaCorrecta) {
        puntuacion++;
    }
    preguntaActual++;
    mostrarPregunta();
}

function mostrarResultado() {
    document.getElementById('puntuacion').textContent = puntuacion;
    document.getElementById('opciones').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
}

function reintentar() {
    preguntaActual = 0;
    puntuacion = 0;
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('opciones').style.display = 'block';
    mostrarPregunta();
}

function salir() {
    window.location.href = 'index.html'; // Cambia esto para redirigir al menú principal
}

// Mostrar la primera pregunta
mostrarPregunta();