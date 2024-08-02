const TENTATIVAS = 1000
var index = 0;
var copas = 0;
var paus = 0;
var ouros = 0;
var espadas = 0;



while (index < TENTATIVAS) {
    var valorSorteado = parseInt(Math.random() * 52);


    if (valorSorteado === 1 || valorSorteado === 5 || valorSorteado === 9 || valorSorteado === 13 ||
        valorSorteado === 17 || valorSorteado === 21 || valorSorteado === 25 || valorSorteado === 29 ||
        valorSorteado === 33 || valorSorteado === 37 || valorSorteado === 41 || valorSorteado === 45 ||
        valorSorteado === 49) {
        copas++;
    } else if (valorSorteado === 2 || valorSorteado === 6 || valorSorteado === 10 || valorSorteado === 14 ||
        valorSorteado === 18 || valorSorteado === 22 || valorSorteado === 26 || valorSorteado === 30 ||
        valorSorteado === 34 || valorSorteado === 38 || valorSorteado === 42 || valorSorteado === 46 ||
        valorSorteado === 50) {
        paus++;
    } else if (valorSorteado === 3 || valorSorteado === 7 || valorSorteado === 11 || valorSorteado === 15 ||
        valorSorteado === 19 || valorSorteado === 23 || valorSorteado === 27 || valorSorteado === 31 ||
        valorSorteado === 35 || valorSorteado === 39 || valorSorteado === 43 || valorSorteado === 47 ||
        valorSorteado === 51) {
        ouros++;
    } else {
        espadas++;
    }
    index++;

}
var copasPorcent = (copas / TENTATIVAS) * 100
var pausPorcent = (paus / TENTATIVAS) * 100
var ourosPorcent = (ouros / TENTATIVAS) * 100
var espadasPorcent = (espadas / TENTATIVAS) * 100


console.log("COPAS - QTD: " + copas + "  PORCENTAGEM: " + copasPorcent.toFixed(1) + " %")
console.log("PAUS - QTD: " + paus + "  PORCENTAGEM: " + pausPorcent.toFixed(1) + " %")
console.log("OUROS - QTD: " + ouros + "  PORCENTAGEM: " + ourosPorcent.toFixed(1) + " %")
console.log("ESPADAS - QTD: " + espadas + "  PORCENTAGEM: " + espadasPorcent.toFixed(1) + " %")



if (copasPorcent > 30 ||
    pausPorcent > 30 ||
    ourosPorcent > 30 ||
    espadasPorcent > 30) {
    console.log(" PODE ESTAR VICIADO !!")
} else {
    console.log(" NÃO ESTA VICIADO !!")
}
