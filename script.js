/* =========================================================
   ELEMENTOS DE LA PÁGINA
   ========================================================= */

// Controles
const controlVerde = document.getElementById("controlVerde");
const controlEscudo = document.getElementById("controlEscudo");
const controlRojo = document.getElementById("controlRojo");

// Franjas
const franjaVerde = document.getElementById("franjaVerde");
const franjaRoja = document.getElementById("franjaRoja");

// Escudo
const escudo = document.getElementById("escudo");

// Valores mostrados
const valorVerde = document.getElementById("valorVerde");
const valorEscudo = document.getElementById("valorEscudo");
const valorRojo = document.getElementById("valorRojo");


/* =========================================================
   FUNCIÓN PARA MEZCLAR DOS COLORES
   ========================================================= */

/*
    Esta función permite obtener colores intermedios.

    Por ejemplo:

    0%   → color oscuro
    50%  → color intermedio
    100% → color intenso

    De esta forma el slider puede producir muchos
    tonos diferentes sin tener que escribirlos uno por uno.
*/

function mezclarColores(colorInicial, colorFinal, porcentaje) {

    // Convertimos el porcentaje a un número entre 0 y 1
    const cantidad = porcentaje / 100;

    // Quitamos el símbolo #
    const inicio = colorInicial.replace("#", "");
    const final = colorFinal.replace("#", "");


    // Convertimos el color inicial a RGB

    const r1 = parseInt(inicio.substring(0, 2), 16);
    const g1 = parseInt(inicio.substring(2, 4), 16);
    const b1 = parseInt(inicio.substring(4, 6), 16);


    // Convertimos el color final a RGB

    const r2 = parseInt(final.substring(0, 2), 16);
    const g2 = parseInt(final.substring(2, 4), 16);
    const b2 = parseInt(final.substring(4, 6), 16);


    // Calculamos el color intermedio

    const r = Math.round(
        r1 + (r2 - r1) * cantidad
    );

    const g = Math.round(
        g1 + (g2 - g1) * cantidad
    );

    const b = Math.round(
        b1 + (b2 - b1) * cantidad
    );


    // Convertimos RGB nuevamente a HEX

    const colorHex =
        "#" +
        [r, g, b]
            .map(
                valor =>
                    valor
                        .toString(16)
                        .padStart(2, "0")
            )
            .join("");


    return colorHex.toUpperCase();
}


/* =========================================================
   ACTUALIZAR COLOR VERDE
   ========================================================= */

function actualizarVerde() {

    // Obtenemos el porcentaje del slider
    const porcentaje = Number(
        controlVerde.value
    );


    /*
        Verde inicial:
        Muy oscuro.

        Verde final:
        Mucho más vivo e intenso.
    */

    const color = mezclarColores(
        "#003B2D",
        "#00C878",
        porcentaje
    );


    /*
        IMPORTANTE:

        Solamente modificamos la franja verde.
    */

    franjaVerde.style.backgroundColor = color;


    // Mostramos el código hexadecimal
    valorVerde.textContent = color;
}


/* =========================================================
   ACTUALIZAR TRANSPARENCIA DEL ESCUDO
   ========================================================= */

function actualizarEscudo() {

    // Obtenemos el porcentaje
    const porcentaje = Number(
        controlEscudo.value
    );


    /*
        opacity funciona de esta manera:

        0   = invisible
        0.5 = 50% visible
        1   = completamente visible

        Por eso dividimos entre 100.
    */

    escudo.style.opacity =
        porcentaje / 100;


    // Mostramos el porcentaje
    valorEscudo.textContent =
        porcentaje + "%";
}


/* =========================================================
   ACTUALIZAR COLOR ROJO
   ========================================================= */

function actualizarRojo() {

    // Obtenemos el porcentaje
    const porcentaje = Number(
        controlRojo.value
    );


    /*
        Rojo inicial:
        Muy oscuro.

        Rojo final:
        Rojo muy vivo e intenso.
    */

    const color = mezclarColores(
        "#5A0712",
        "#FF1638",
        porcentaje
    );


    /*
        Solamente modificamos
        la franja roja.
    */

    franjaRoja.style.backgroundColor =
        color;


    // Mostramos el HEX
    valorRojo.textContent =
        color;
}


/* =========================================================
   EVENTOS
   ========================================================= */

/*
    "input" permite que el cambio ocurra
    inmediatamente mientras movemos el slider.
*/

controlVerde.addEventListener(
    "input",
    actualizarVerde
);


controlEscudo.addEventListener(
    "input",
    actualizarEscudo
);


controlRojo.addEventListener(
    "input",
    actualizarRojo
);


/* =========================================================
   VALORES INICIALES
   ========================================================= */

/*
    Ejecutamos las funciones una vez al iniciar
    para mostrar correctamente los valores iniciales.
*/

actualizarVerde();
actualizarEscudo();
actualizarRojo();