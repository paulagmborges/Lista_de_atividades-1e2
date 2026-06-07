const prompt = require('prompt-sync')()

function pesquisaHabitantes() {
    let totalSalario = 0
    let totalFilhos = 0
    let maiorSalario = 0
    let salarioAte350 = 0
    let totalPessoas = 0

    while (true) {
        let salario = parseFloat(prompt("Digite o salário: "))

        if (salario < 0) {
            break
        }

        let filhos = parseInt(prompt("Digite o número de filhos: "))

        totalSalario = totalSalario + salario
        totalFilhos = totalFilhos + filhos
        totalPessoas = totalPessoas + 1

        if (salario > maiorSalario) {
            maiorSalario = salario
        }

        if (salario <= 350) {
            salarioAte350 = salarioAte350 + 1
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