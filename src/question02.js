import leia from "readline-sync"

var cons = 0;
var digitado = leia.question("INFORME UMA PALAVRA OU UM TESTO: ")

for (var i = 0; i < digitado.length; i++) {
    if (digitado[i] === "b" ||
        digitado[i] === "c" ||
        digitado[i] === "d "||
        digitado[i] === "f" ||
        digitado[i] === "g" ||
        digitado[i] === "h" ||
        digitado[i] === "j" ||
        digitado[i] === "k" ||
        digitado[i] === "l" ||
        digitado[i] === "m" ||
        digitado[i] === "n" ||
        digitado[i] === "p" ||
        digitado[i] === "q" ||
        digitado[i] === "r" ||
        digitado[i] === "s" ||
        digitado[i] === "t" ||
        digitado[i] === "v" ||
        digitado[i] === "x" ||
        digitado[i] === "z" ||
        digitado[i] === "w" ||
        digitado[i] === "y") {
        cons++
    }

}
console.log(" tem " +  cons + " consoantes digitado")