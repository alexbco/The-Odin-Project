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
        humanScore += 1;
        console.log("Ganas la ronda");
    } 
    else {
        computerScore += 1;
        console.log("Pierdes la ronda");
    }
}

let computerScore = 0;
let humanScore = 0;

for (let i = 1; i <= 5; i++) {
    console.log("Jugada: " + i);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log("Ordenador eligió: " + computerSelection);
    playRound(humanSelection, computerSelection);
}

console.log("Marcador humano: " + humanScore);
console.log("Marcador ordenador: " + computerScore);