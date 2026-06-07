const obj1 = {
    nome: "Alice",
    idade: 28,
    cidade: "São Paulo"
}
const obj2 = {
    idade: 40,
    profissao: "Engenheira",
    cidade: "Rio de Janeiro"
}
function combinarObjetos(obj1, obj2) {
 let resultado = {} 
 resultado.nome = obj1.nome 
 resultado.idade = obj1.idade
 resultado.cidade = obj1.cidade
 resultado.profissao = obj1.profissao
 resultado.idade = obj2.idade 
 resultado.profissao = obj2.profissao
 resultado.cidade = obj2.cidade
 return resultado
}
console.log(combinarObjetos(obj1, obj2))