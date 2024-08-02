import leia from "readline-sync"

var nomeMaior;
var idadeMaior;
var nomeMenor;
var idadeMenor;
var nome;
var idade;

for (var i = 0; i < 5; i++) {
    nome = leia.question(" DIGITA UM NOME: ")
    idade = leia.questionInt("DIGITA SUA IDADE: ")

    if (!idadeMaior || idade > idadeMaior) {
        nomeMaior = nome
        idadeMaior = idade
    }

    if (!idadeMenor || idade < idadeMenor) {
        nomeMenor = nome
        idadeMenor = idade
    }

}
console.log(nomeMaior + " maior com " + idadeMaior)
console.log(nomeMenor + " menor com " + idadeMenor)
