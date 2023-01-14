/* subtraçao de matriz 3x3 */

mat1 = [[1,2,3],
        [3,4,5],
        [5,6,7]]

mat2 = [[5,6,7],
        [7,8,9],
        [1,2,3]]

mats = [[],
        [],
        []]

for (i=0; i<=2; i++) {
    for (j=0; j<=2; j++) {
        mats[i][j] = mat1[i][j] - mat2[i][j]
    }
}

console.log(mats)