let valor1 =[ "Paula", "André", "Maria", "Lucas", "Danielle", "Claudio", "Luiza", "Rafael", "Sérgio"]
let valor2 = [40, 13, 25, 15, 30, 2, 22, 18, 14]

for(let i=0; i<valor1.length; i++){
    if(valor2[i] < 18){
        console.log("Nome: " + valor1[i] + " - Idade: " + valor2[i])
    }
}
