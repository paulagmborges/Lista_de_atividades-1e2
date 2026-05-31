const prompt = require('prompt-sync')({ sigint: true })

let nomes = []  
for (let i = 0; i < 7; i++) {
    nomes[i] = prompt("Digite o nome da pessoa " + (i + 1) + ": ")
}
console.log("Nomes informados na ordem inversa:")
for (let i = 6; i >= 0; i--) {
    console.log(nomes[i])
}
