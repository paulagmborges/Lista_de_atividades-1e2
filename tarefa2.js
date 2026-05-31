const prompt = require('prompt-sync')({ sigint: true });
let idade= Number(prompt("Qual a sua idade?"))

if(idade <= 12 ){
    console.log ("Você é criança!")
}
else if(idade > 12 && idade < 18){
    console.log ("Você é adolescente!")
}
else if(idade >= 18 && idade < 65 ){
    console.log ("Você é adulto.")
}else {
    console.log("Você é idoso") 
}
