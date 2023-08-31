function multiplicacaoMatrizes(matrizA, matrizB) {
    const linhasA = matrizA.length;
    const colunasA = matrizA[0].length;
    const linhasB = matrizB.length;
    const colunasB = matrizB[0].length;

    if (colunasA !== linhasB) {
        console.log("Nao e possivel calcular a multiplicao das matrizes");
        return null;
    }
    const resultado = new Array(linhasA);

    for (let i = 0; i < linhasA; i++) {
        resultado[i] = new Array(colunasB);
        for (let j = 0; j < colunasB; j++) {
            resultado[i][j] = 0;
            for (let k = 0; k < colunasA; k++) {
                resultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }
    return resultado;
}

const matrizA = [
    [1, 2, 3],
    [4, 5, 6]
];

const matrizB = [
    [7, 8],
    [9, 10],
    [11, 12]
];

const resultado = multiplicacaoMatrizes(matrizA, matrizB);

if (resultado != null) {
    console.log("Matriz resultante: ");
    for (let i = 0; i < resultado.length; i++) {
        console.log(resultado[i].join(' '));
    }
}