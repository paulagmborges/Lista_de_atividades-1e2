
function contarNegativos() {
    let M = [
        [1, -2, 3, -4, 5, -6, 7, -8],
        [-1, 2, -3, 4, -5, 6, -7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [-1, -2, -3, -4, -5, -6, -7, -8],
        [1, -2, 3, -4, 5, -6, 7, -8],
        [-1, 2, -3, 4, -5, 6, -7, 8]
    ]
    let C = []
    for (let i = 0; i < M.length; i++) {
        let count = 0
        for (let j = 0; j < M[i].length; j++) {
            if (M[i][j] < 0) {
                count++
            }
        }
        C[i] = count
    }
    return C
}
console.log(contarNegativos())