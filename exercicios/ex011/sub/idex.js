/* subtraçao de matriz 2x2 */

mat1 = [[1,2],
        [3,4]]

mat2 = [[5,6],
        [7,8]]

mats = [[],
        []]

for (i=0; i<=1; i++) {
    for (j=0; j<=1; j++) {
        mats[i][j] = mat1[i][j] - mat2[i][j]
    }
}

console.log(mats)