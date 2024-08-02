import leia from "readline-sync"


var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&'
var senha =""
var vezes = leia.questionInt("DIGITE A QUANTIDADE DE NUMERO DA SENHA: ")

for (var i = 0; i < vezes; i++) {
   var n = parseInt(Math.random() * 68)
    senha = senha + char[n] 
}

console.log(senha)