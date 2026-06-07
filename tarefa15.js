function matrizIdentidade() {
    let MI = []
    for (let i = 0; i < 7; i++) {
        MI[i] = []
        for (let j = 0; j < 7; j++) {
            if (i === j) {
                MI[i][j] = 1
            } else {
                MI[i][j] = 0
            }
        }
    }
    return MI
}
console.log(matrizIdentidade())