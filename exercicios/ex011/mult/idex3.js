/* multiplicaçao de matriz 4x4 */

mat1 = [[3,4,5,6],
        [7,8,9,1],
        [2,3,4,5],
        [6,7,8,9]]

mat2 = [[7,8,9,1],
        [2,3,4,5],
        [6,7,8,9],
        [1,2,3,4]]

mats = [[],
        [],
        [],
        []]

for (i=0; i<=3; i++) {
    for (j=0; j<=3; j++) {
        mats[i][j] = (mat1[i][0] * mat2[0][j]) + (mat1[i][1] * mat2[1][j]) + (mat1[i][2] * mat2[2][j]) + (mat1[i][3] * mat2[3][j])  
    }
}

console.log(mats)