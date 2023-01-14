/* multiplicaçao de matrz 3x3 */

mat1 = [[2,3,4],
        [5,6,7],
        [8,9,1]]

mat2 = [[6,7,8],
        [9,1,2],
        [3,4,5]]

mats = [[],
        [],
        []]

for (i=0; i<=2; i++) {
    for (j=0; j<=2; j++) {
        mats[i][j] = (mat1[i][0] * mat2[0][j]) + (mat1[i][1] * mat2[1][j]) + (mat1[i][2] * mat2[2][j])  
    }
}

console.log(mats)