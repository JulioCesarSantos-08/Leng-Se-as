// Lógica del Juego de Memorama
let cartas = [
    { id: 1, imagen: 'memorama/carta1.png', emparejada: false },
    { id: 2, imagen: 'memorama/carta2.png', emparejada: false },
    { id: 3, imagen: 'memorama/carta3.png', emparejada: false },
    { id: 4, imagen: 'memorama/carta4.png', emparejada: false },
    { id: 5, imagen: 'memorama/carta5.png', emparejada: false },
    { id: 6, imagen: 'memorama/carta6.png', emparejada: false },
    { id: 7, imagen: 'memorama/carta7.png', emparejada: false },
    { id: 8, imagen: 'memorama/carta8.png', emparejada: false }
];

// Duplicar cartas para hacer las parejas
cartas = [...cartas, ...cartas];

let cartasAbiertas = [];
let contadorDeIntentos = 0;
let parejasEncontradas = 0;

// Mezclar las cartas de manera aleatoria
function mezclarCartas() {
    cartas.sort(() => Math.random() - 0.5);
}

// Función para mostrar las cartas en el tablero con estructura en cuadrícula
function mostrarCartas() {
    let tablero = document.getElementById('tablero');
    tablero.innerHTML = ''; // Limpiar el tablero

    cartas.forEach((carta, index) => {
        let cartaDiv = document.createElement('div');
        cartaDiv.classList.add('carta');
        cartaDiv.setAttribute('data-id', index);
        cartaDiv.addEventListener('click', () => revelarCarta(cartaDiv));

        let imagen = document.createElement('img');
        imagen.src = 'imagenes/cartmemo.png'; // Imagen del reverso de la carta
        imagen.classList.add('reverso');
        cartaDiv.appendChild(imagen);

        tablero.appendChild(cartaDiv);
    });

    actualizarContador();
}

// Función para revelar la carta
function revelarCarta(cartaDiv) {
    let id = cartaDiv.getAttribute('data-id');
    let carta = cartas[id];

    if (carta.emparejada || cartasAbiertas.length === 2) {
        return; // No hacer nada si ya está emparejada o si ya se abrieron dos cartas
    }

    cartaDiv.querySelector('img').src = carta.imagen; // Mostrar la imagen de la carta
    cartasAbiertas.push({ carta, cartaDiv });

    if (cartasAbiertas.length === 2) {
        contadorDeIntentos++;
        verificarPareja();
    }
}

// Función para verificar si las cartas abiertas son una pareja
function verificarPareja() {
    let [carta1, carta2] = cartasAbiertas;

    if (carta1.carta.id === carta2.carta.id) {
        carta1.carta.emparejada = true;
        carta2.carta.emparejada = true;
        parejasEncontradas++;
        actualizarContador();
        cartasAbiertas = [];
        verificarVictoria();
    } else {
        // Si no es una pareja, ocultamos las cartas después de un corto retraso
        setTimeout(() => {
            carta1.cartaDiv.querySelector('img').src = 'imagenes/cartmemo.png';
            carta2.cartaDiv.querySelector('img').src = 'imagenes/cartmemo.png';
            cartasAbiertas = [];
        }, 1000);
    }
}

// Función para actualizar los contadores de intentos y parejas encontradas
function actualizarContador() {
    let contadorPares = document.getElementById('contador-pares');
    let contadorIntentos = document.getElementById('contador-intentos');

    if (contadorPares) {
        contadorPares.textContent = `Pares encontrados: ${parejasEncontradas}`;
    }
    if (contadorIntentos) {
        contadorIntentos.textContent = `Intentos: ${contadorDeIntentos}`;
    }
}

// Función para verificar si el jugador ha ganado
function verificarVictoria() {
    if (parejasEncontradas === cartas.length / 2) {
        setTimeout(() => {
            alert(`¡Felicidades, has ganado! Número de intentos: ${contadorDeIntentos}`);
            reiniciarJuego();
        }, 500);
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    cartas.forEach(carta => carta.emparejada = false);
    cartasAbiertas = [];
    contadorDeIntentos = 0;
    parejasEncontradas = 0;
    mezclarCartas();
    mostrarCartas();
}

// Llamar a la función para mezclar y mostrar las cartas cuando el juego se inicia
document.addEventListener('DOMContentLoaded', () => {
    mezclarCartas();
    mostrarCartas();
    
    // Agregar evento al botón de reinicio
    document.getElementById('reiniciar').addEventListener('click', reiniciarJuego);
});