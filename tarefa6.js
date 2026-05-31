const prompt = require('prompt-sync')({ sigint: true })

let ladoA = parseFloat(prompt("Digite o valor do lado A: "))
let ladoB = parseFloat(prompt("Digite o valor do lado B: "))
let ladoC = parseFloat(prompt("Digite o valor do lado C: "))

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("O triângulo é equilátero.")
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("O triângulo é isósceles.")
    } else {
        console.log("O triângulo é escaleno.")
    }
} else {
    console.log("Os valores fornecidos não formam um triângulo.")
}