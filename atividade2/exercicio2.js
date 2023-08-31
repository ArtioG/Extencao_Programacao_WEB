function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log = (matriz[i].join(' '));
    }
}
function calcularTransposta(matriz) {
    const transposta = [];
    const linhas = matriz.length;
    const colunar = matriz[0].length;

    for (let i = 0; i < colunas; i++) {
        transposta[i] = [];
        for (let j = 0; j < array.length; j++) {
            transposta[i][j] = matriz[j][i];
        }
    }
    return transposta;
}

const matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matriz A: ");
imprimirMatriz(matrizA);

const transposta = calcularTransposta(matrizA);
console.log("\nMatriz Transposta");
imprimirMatriz(transposta);