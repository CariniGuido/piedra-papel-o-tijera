let usuarioE = 0;
let usuarioFrida = 0;
const puntosDeUsuario_span = document.getElementById("puntos-usuario");
const puntosDeFrida_span = document.getElementById("puntos-frida");
const marcador_div = document.querySelector(".marcador");
const resultado_p = document.querySelector(".resultado >p");
const piedra_div = document.getElementById("pi");
const papel_div = document.getElementById("pa");
const tijera_div = document.getElementById("ti");


function getEleccionFrida() {

    const elegidas = ['pi', 'pa', 'ti'];
    const randomNumber = Math.floor(Math.random() * 3);
    return elegidas[randomNumber];




}

function convertirPalabra(carta) {

    if (carta === "pi") return "Piedra"
    if (carta === "pa") return "Papel"
    if (carta === "ti") return "tijera"
}

function ganar(eleccionDeUsuario, eleccionDeFrida) {
    
    const eleccionDeUsuario_div= document.getElementById (eleccionDeUsuario);
    
    usuarioE++;

    puntosDeUsuario_span.innerHTML = usuarioE;

    puntosDeFrida_span.innerHTML = usuarioFrida;
    resultado_p.innerHTML = `${convertirPalabra(eleccionDeUsuario)} Gana  ${convertirPalabra(eleccionDeFrida)}. you win! 👍`;
    eleccionDeUsuario_div.classList.add('brillo-verde') ;

    setTimeout(function() {eleccionDeUsuario_div.classList.remove('brillo-verde') },1000);
}

function perder(eleccionDeUsuario, eleccionDeFrida) {
    const eleccionDeUsuario_div= document.getElementById (eleccionDeUsuario);
    usuarioFrida++;

    puntosDeUsuario_span.innerHTML = usuarioE;
    puntosDeFrida_span.innerHTML = usuarioFrida;
    resultado_p.innerHTML = `${convertirPalabra(eleccionDeUsuario)} pierde con ${convertirPalabra(eleccionDeFrida)}. you lost! 😢`;
    eleccionDeUsuario_div.classList.add('brillo-rojo') ;

    setTimeout(function() {eleccionDeUsuario_div.classList.remove('brillo-rojo') },1000);
}

function empatar(eleccionDeUsuario, eleccionDeFrida) {
    const eleccionDeUsuario_div= document.getElementById (eleccionDeUsuario)
    resultado_p.innerHTML = `${convertirPalabra(eleccionDeUsuario)} = ${convertirPalabra(eleccionDeFrida)}. Empate! 🤷‍♂️`;
    eleccionDeUsuario_div.classList.add('brillo-gris') ;

    setTimeout(function() {eleccionDeUsuario_div.classList.remove('brillo-gris') },1000);
}




function game(eleccionDeUsuario) {
    const eleccionDeFrida = getEleccionFrida();
    switch (eleccionDeUsuario + eleccionDeFrida) {
        case "piti":
        case "papi":
        case "tipa":
            ganar(eleccionDeUsuario, eleccionDeFrida);
            break;

        case "tipi":
        case "pati":
        case "pipa":

            perder(eleccionDeUsuario, eleccionDeFrida);
            break;


        case "pipi":
        case "papa":
        case "titi":

            empatar(eleccionDeUsuario, eleccionDeFrida);
            break;
    }


}

function main() {
    piedra_div.addEventListener('click', function () {

        game("pi");
    })
    papel_div.addEventListener('click', function () {

        game("pa");
    })

    tijera_div.addEventListener('click', function () {

        game("ti");
    })

}

main();