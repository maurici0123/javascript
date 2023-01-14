/* subtraçao de matriz 4x4 */

mat1 = [[1,2,3,4],
        [3,4,5,6],
        [5,6,7,8],
        [9,1,2,3]]

mat2 = [[5,6,7,8],
        [7,8,9,1],
        [1,2,3,4],
        [4,5,6,7]]

mats = [[],
        [],
        [],
        []]

for (i=0; i<=3; i++) {
    for (j=0; j<=3; j++) {
        mats[i][j] = mat1[i][j] - mat2[i][j]
    }
}

console.log(mats)