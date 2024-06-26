let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let numeroMaximo = 5;

function asignarTexto (elemento, texto) {
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return;  
} 

function verificarIntento () {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto === numeroUsuario) {
        asignarTexto('p', `Has acertado el número en ${intentos} ${(intentos == 1) ? 'inteno': 'intentos'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto > numeroUsuario) {
            asignarTexto('p', 'El número es más grande');
        } else {
            asignarTexto('p', 'El número es más pequeño');
        }
        intentos++; 
        limpiarInput();
    }
    return; 
}

function limpiarInput () {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() { 
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumeros.length == numeroMaximo) {
        asignarTexto('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (listaNumeros.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }  
}

function condicionesInciales () {
    asignarTexto('h1', 'Juego del número secreto');
    asignarTexto('p', `Selecciona un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto)
    intentos = 1; 
}

function reiniciarJuego () {
    limpiarInput();
    condicionesInciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesInciales ();

