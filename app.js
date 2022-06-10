
function start() {

    let matrix1 = [[0, 0, 0],
                   [0, 0, 0],
                   [0, 0, 0]];

    let result = [[0, 0, 0],
                  [0, 0, 0],
                  [0, 0, 0]];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            matrix1[i][j] = Number(prompt(`Enter number for Row : ${i + 1} Value : ${j + 1} For 1st Matrix`));
        }
    }
    //we will add first matrix array to this 2nd matrix array
    let matrix2 = [[0, 0, 0],
                   [0, 0, 0],
                   [0, 0, 0]];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            matrix2[i][j] = Number(prompt(`Enter number for Row : ${i + 1} Value : ${j + 1} For 2nd Matrix`));
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }


    // 1 Matrix 
    document.querySelector("#v1").innerHTML = matrix1[0][0];
    document.querySelector("#v2").innerHTML = matrix1[0][1];
    document.querySelector("#v3").innerHTML = matrix1[0][2];
    document.querySelector("#v4").innerHTML = matrix1[1][0];
    document.querySelector("#v5").innerHTML = matrix1[1][1];
    document.querySelector("#v6").innerHTML = matrix1[1][2];
    document.querySelector("#v7").innerHTML = matrix1[2][0];
    document.querySelector("#v8").innerHTML = matrix1[2][1];
    document.querySelector("#v9").innerHTML = matrix1[2][2];

    // 2 Matrix

    document.querySelector("#v10").innerHTML = matrix2[0][0];
    document.querySelector("#v11").innerHTML = matrix2[0][1];
    document.querySelector("#v12").innerHTML = matrix2[0][2];
    document.querySelector("#v13").innerHTML = matrix2[1][0];
    document.querySelector("#v14").innerHTML = matrix2[1][1];
    document.querySelector("#v15").innerHTML = matrix2[1][2];
    document.querySelector("#v16").innerHTML = matrix2[2][0];
    document.querySelector("#v17").innerHTML = matrix2[2][1];
    document.querySelector("#v18").innerHTML = matrix2[2][2];

    // Sum of  1st Matrix & 2nd Matrix

    document.querySelector("#v19").innerHTML = result[0][0];
    document.querySelector("#v20").innerHTML = result[0][1];
    document.querySelector("#v21").innerHTML = result[0][2];
    document.querySelector("#v22").innerHTML = result[1][0];
    document.querySelector("#v23").innerHTML = result[1][1];
    document.querySelector("#v24").innerHTML = result[1][2];
    document.querySelector("#v25").innerHTML = result[2][0];
    document.querySelector("#v26").innerHTML = result[2][1];
    document.querySelector("#v27").innerHTML = result[2][2];

}