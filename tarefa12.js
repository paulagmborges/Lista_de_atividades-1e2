const prompt = require('prompt-sync')();
function calcularPesoIdeal(alt, sexo) {
    if (sexo === "m") {
        return (72.7 * alt) - 58
    } else  (sexo === "f") 
        return (62.1 * alt) - 44.7
    } 

let altura = parseFloat(prompt("Digite a altura em metros:"))
let sexo = prompt("Digite o sexo (m/f):")
let pesoIdeal = calcularPesoIdeal(altura, sexo)
console.log("O peso ideal para uma pessoa do sexo " + sexo + " com altura de " + altura + " metros é: " + pesoIdeal.toFixed(2) + " kg")