function getComputerChoice() {
    const choices = ["piedra", "papel", "tijera"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    let respuesta = prompt("Introduce tu jugada (piedra, papel o tijera):");
    return respuesta.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Empate...");
    } 
    else if (
        (humanChoice === "tijera" && computerChoice === "papel") ||
        (humanChoice === "papel" && computerChoice === "piedra") ||
        (humanChoice === "piedra" && computerChoice === "tijera")
    ) {
        marcadorPersona++;
        marcador_persona.textContent = marcadorPersona;
        console.log("Ganas la ronda");
    } 
    else {
        marcadorOrdenador++;
        marcador_ordenador.textContent = marcadorOrdenador;
        console.log("Pierdes la ronda");
    }
    if(marcadorPersona === 5){
        alert("Ganaste");
        marcadorPersona = 0;
        marcadorOrdenador = 0;
        marcador_ordenador.textContent = marcadorOrdenador;
        marcador_persona.textContent = marcadorPersona;

    }else if(marcadorOrdenador === 5){
        alert("Perdiste");
        marcadorPersona = 0;
        marcadorOrdenador = 0;
        marcador_ordenador.textContent = marcadorOrdenador;
        marcador_persona.textContent = marcadorPersona;
    }
}

let marcador_ordenador = document.querySelector("#computer-score");
let marcador_persona = document.querySelector("#player-score");
let marcadorPersona = 0;
let marcadorOrdenador = 0;
const boton_piedra = document.querySelector("#piedra");
const boton_papel = document.querySelector("#papel");
const boton_tijera = document.querySelector("#tijera");


marcador_ordenador.textContent = 0
marcador_persona.textContent = 0

boton_piedra.addEventListener("click", () => {
    playRound("piedra", getComputerChoice());
});

boton_papel.addEventListener("click", () => {
    playRound("papel", getComputerChoice());
});

boton_tijera.addEventListener("click", () => {
    playRound("tijera", getComputerChoice());
});


