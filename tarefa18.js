const dados = {
    nome: "Paula",
    idade: 25,
    hobbies: ["leitura", "filmes", "culinária"],
    amigos: ["Jessica", "Carolina", "Fernanda"],
    profissao: "Engenheira"
}
function filtraArrays(dados) {
    let resultado = {} 
    for (let campo in dados) { 
        if (Array.isArray(dados[campo])) { 
            resultado[campo] = dados[campo]
        }
    }
    return resultado
}
console.log(filtraArrays(dados))



