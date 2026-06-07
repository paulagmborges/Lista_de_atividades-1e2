const prompt = require('prompt-sync')()

const animais = [
    { especie: "Cachorro", idade: 5, raca: "Labrador" },
    { especie: "Gato", idade: 3, raca: "Persa" },
    { especie: "Cavalo", idade: 2, raca: "Quarto de Milha" }
]

function menuInterativo(){
    let escolha = prompt("Digite o número que deseja executar (1-3): ")

    switch(escolha){
        case "1":
            console.log(animais[0])
            break
        case "2":
            console.log(animais[1])
            break
        case "3":
            console.log(animais[2])
            break
    }
}
menuInterativo()