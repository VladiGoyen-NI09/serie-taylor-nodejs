
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function taylor(x, n) {
    let suma = 1;
    let termino = 1;

    console.log("\nSERIE DE TAYLOR DE e^x");
    console.log("-------------------------");

    for (let i = 1; i < n; i++) {
        termino = termino * x / i;
        suma += termino;

        console.log(
            "Termino " + i + ": " + termino
        );
    }

    return suma;
}

rl.question("Ingrese el valor de x: ", (valorX) => {
    rl.question("Ingrese numero de terminos: ", (valorN) => {

        let x = Number(valorX);
        let n = Number(valorN);

        if (!Number.isFinite(x) ||
            !Number.isInteger(n) || n < 1) {
            console.log("Valores no validos");
            rl.close();
            return;
        }

        let resultado = taylor(x, n);

        console.log("\nRESULTADOS");
        console.log("Aproximacion: " + resultado);
        console.log("Valor real: " + Math.exp(x));
        console.log("Error: " +
            Math.abs(Math.exp(x) - resultado));

        rl.close();
    });
});
