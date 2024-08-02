import leia from "readline-sync"

var vezes = 0;

var soma;
var maior;
var menor;
var total;


while (valor !== 0) {
    var valor = leia.questionInt("DIGITE UM NUMERO: ")

    if (!soma) {
        soma = valor
        maior = valor
        menor = valor
        vezes++
    }
    if (valor !== 0) {
        soma = soma + valor
        vezes++
    }
    if (valor > maior) {
        maior = valor
    }
    if (valor < menor && valor!==0) {
        menor = valor
    }
}
    
        total = soma / vezes
    

console.log("NUMERO MAIOR É: " + maior)
console.log("NUMERO MENOR É: " + menor)
console.log("MEDIA: " + total)

