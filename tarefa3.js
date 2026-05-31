const prompt = require('prompt-sync')({ sigint: true });
let nota = parseFloat(prompt("Qual foi a sua nota?"))

if(nota < 5){
    console.log("Você está reprovado")
}
else if(nota >=5 && nota <7){
    console.log("Você está em recuperação!")
}
else{
    console.log (" Você esta aprovado!")
}