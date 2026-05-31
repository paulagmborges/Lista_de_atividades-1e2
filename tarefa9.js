const prompt = require('prompt-sync')({ sigint: true })

let n1 = 0, n2 = 1, proximo = 0

console.log("Sequência de Fibonacci:")
  
for (let i = 1; i <= 10; i++) {
    console.log(n1)
    proximo = n1 + n2
    n1 = n2
    n2 = proximo
}   