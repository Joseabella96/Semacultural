const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let decifrar = 0;

function numeros() {
    const adivina = parseInt(document.getElementById("adivina").value);
    decifrar++;

    if (adivina === numeroSecreto) {
        document.getElementById("juego").innerHTML = `¡Adivinaste el número ${numeroSecreto} en ${decifrar} intentos!`;
    } else if (adivina < numeroSecreto) {
        document.getElementById("juego").innerHTML = "El número es mayor. Intenta de nuevo.";
    } else {
        document.getElementById("juego").innerHTML = "El número es menor. Intenta de nuevo.";
    }
}