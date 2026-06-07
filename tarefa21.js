const vendas = [
    { vendedor: "Alice", valor: 100 },
    { vendedor: "Paula", valor: 150 },
    { vendedor: "Alice", valor: 200 },
    { vendedor: "Clara", valor: 300 },
    { vendedor: "Paula", valor: 50 },
]
function sumarizarVendas(vendas) {
    let resultado = {}
    for (let i = 0; i < vendas.length; i++) {
        let venda = vendas[i] 
        if (resultado[venda.vendedor]) { 
            resultado[venda.vendedor] = resultado[venda.vendedor] + venda.valor 
        } else {
            resultado[venda.vendedor] = venda.valor
        }
    }
    return resultado
}
console.log(sumarizarVendas(vendas))
