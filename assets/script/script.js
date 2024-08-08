let userScore = 0;
let cpuScore = 0;

function play(userChoice) {
    const choices = ["piedra", "papel", "tijera"];
    const cpuChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("userChoice").src = `assets/img/${userChoice}user.png`;
    document.getElementById("cpuChoiceImg").src = `assets/img/${cpuChoice}cpu.png`;

    if (userChoice === cpuChoice) {
        alert("Es un empate!");
    } else if (
        (userChoice === "piedra" && cpuChoice === "tijera") ||
        (userChoice === "papel" && cpuChoice === "piedra") ||
        (userChoice === "tijera" && cpuChoice === "papel")
    ) {
        alert("¡Ganaste!");
        userScore++;
    } else {
        alert("Perdiste!");
        cpuScore++;
    }

    document.getElementById("userScore").innerText = userScore;
    document.getElementById("cpuScore").innerText = cpuScore;
}

function resetGame() {
    userScore = 0;
    cpuScore = 0;
    document.getElementById("userScore").innerText = userScore;
    document.getElementById("cpuScore").innerText = cpuScore;
}