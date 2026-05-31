const prompt = require('prompt-sync')({ sigint: true })

let soma = 0
let contador = 0
while (true) {
    let numero = parseFloat(prompt("Digite um número decimal (ou 0 para encerrar): "))
    if (numero === 0) {
        break
    }
    soma= soma + numero;
    contador++;
}
if (contador > 0) {
    let media = soma / contador
    console.log("A média aritmética dos números digitados é:", media)
} else {
    console.log("Nenhum número foi digitado.")
}