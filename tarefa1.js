const prompt = require('prompt-sync')({ sigint: true })

let numero = Number(prompt("Digite um número inteiro: "))

if (numero % 2 === 0) {
    console.log(`O número ${numero} é PAR.`)
} else {
    console.log(`O número ${numero} é ÍMPAR.`)
}