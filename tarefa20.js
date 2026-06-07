const frutas = ["maçã", "banana", "maçã", "laranja", "banana", "maçã","pera","laranja","banana","uva"]
function contarfrutas(frutas) {
    let resultado = {}
    for (let i = 0; i < frutas.length; i++) {
        let fruta = frutas[i]
        if (resultado[fruta]) { 
            resultado[fruta]++ 
        } else {
            resultado[fruta] = 1 
        }
    }
    return resultado
}
console.log(contarfrutas(frutas))


