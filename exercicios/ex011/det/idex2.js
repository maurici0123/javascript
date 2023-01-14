/* determinante de matriz 3x3 */

mat1 = [[1,2,3],
        [4,5,6],
        [7,8,9]]

matr =[[1,2,3],
       [4,5,6],
       [7,8,9]]

for (i=0; i<=2; i++) {
        for (j=0; j<=1; j++) {
                matr[i][j+3] = mat1[i][j]
        }
}

det = ((matr[0][0]*matr[1][1]*matr[2][2]) + (matr[0][1]*matr[1][2]*matr[2][3]) + (matr[0][2]*matr[1][3]*matr[2][4])) - ((matr[0][2]*matr[1][1]*matr[2][0]) + (matr[0][3]*matr[1][2]*matr[2][1]) + (matr[0][4]*matr[1][3]*matr[2][2]))

console.log(det)