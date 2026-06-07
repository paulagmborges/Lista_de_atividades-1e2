const prompt = require('prompt-sync')();

function calcularSalarioLiquido(salarioBruto) {
    const descontoINSS = salarioBruto * 0.12;
    const salarioLiquido = salarioBruto - descontoINSS;
    return { descontoINSS, salarioLiquido };
}
let funcionarios = [];
for (let i = 0; i < 3; i++) {
    let matricula = prompt("Digite a matrícula do funcionário:");
    let nome = prompt("Digite o nome do funcionário:");
    let salarioBruto = parseFloat(prompt("Digite o salário bruto do funcionário :"));
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
    const funcionario = funcionarios.find(funcionario => funcionario.matricula === matriculaBusca); 

    if (funcionario) {
       console.log(`Nome: ${funcionario.nome}, Líquido: R$ ${funcionario.salarioLiquido.toFixed(2)}`);
    } else {
        console.log("Funcionário não encontrado.");
    }
}
let matriculaConsulta = prompt("Digite a matrícula do funcionário que deseja consultar:");
emitirContrachequePorMatricula(matriculaConsulta);

