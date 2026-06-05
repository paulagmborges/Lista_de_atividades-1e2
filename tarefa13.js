const prompt = require('prompt-sync')();

function calcularSalarioLiquido(salarioBruto) {
    const descontoINSS = salarioBruto * 0.12;
    const salarioLiquido = salarioBruto - descontoINSS;
    return { descontoINSS, salarioLiquido };
}

let funcionarios = [];

for (let i = 0; i < 3; i++) {
    let matricula = prompt("Digite a matrícula do funcionário " + (i + 1) + ":");
    let nome = prompt("Digite o nome do funcionário " + (i + 1) + ":");
    let salarioBruto = parseFloat(prompt("Digite o salário bruto do funcionário " + (i + 1) + ":"));
    let { descontoINSS, salarioLiquido } = calcularSalarioLiquido(salarioBruto);

    funcionarios.push({
        matricula,
        nome,
        salarioBruto,
        descontoINSS,
        salarioLiquido
    });
}
function emitirContrachequePorMatricula(matriculaBusca) {
    const funcionario = funcionarios.find(f => f.matricula === matriculaBusca);

    if (funcionario) {
        console.log("\n--- Contracheque ---");
        console.log(`Matrícula: ${funcionario.matricula}`);
        console.log(`Nome: ${funcionario.nome}`);
        console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
        console.log(`Dedução INSS: R$ ${funcionario.descontoINSS.toFixed(2)}`);
        console.log(`Salário líquido: R$ ${funcionario.salarioLiquido.toFixed(2)}`);
        console.log("--------------------");
    } else {
        console.log("Funcionário não encontrado.");
    }
}

let matriculaConsulta = prompt("Digite a matrícula do funcionário que deseja consultar:");
emitirContrachequePorMatricula(matriculaConsulta);

