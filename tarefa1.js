/*
A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados
sobre salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até
R$350,00.
*/
const prompt = require('prompt-sync')()
function pesquisaHabitantes() {
    let totalSalario = 0 //inicializacao
    let totalFilhos = 0
    let maiorSalario = 0
    let salarioAte350 = 0
    let totalPessoas = 0
    
    while (true) { //loop infinito 
        let salario = parseFloat(prompt("Digite o salário: "))

        if (salario < 0) { //condicao de parada
            break
        }
        let filhos = parseInt(prompt("Digite o número de filhos: "))

        totalSalario += salario //
        totalFilhos += filhos
        totalPessoas++

        if (salario > maiorSalario) {
            maiorSalario = salario
        }
        if (salario <= 350) {
            salarioAte350++
        }
    }
    if (totalPessoas === 0) {
        return "Nenhuma pessoa foi cadastrada."
    }
    let salario350 = (salarioAte350 / totalPessoas) * 100

    return {
        mediaSalario: totalSalario / totalPessoas,
        mediaFilhos: totalFilhos / totalPessoas,
        maiorSalario: maiorSalario,
        percentualSalario350: salario350
    }

}
console.log(pesquisaHabitantes())