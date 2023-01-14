/* dterminante de matriz 4x4 */

mat1 = [[2,3,-1,2],
        [0,4,-3,5],
        [1,2, 1,3],
        [0,4, 1,0]]


matd1 = [[mat1[1][0], mat1[1][1], mat1[1][2]],
         [mat1[2][0], mat1[2][1], mat1[2][2]],
         [mat1[3][0], mat1[3][1], mat1[3][2]]]

matdr1 = [[mat1[1][0], mat1[1][1], mat1[1][2]],
          [mat1[2][0], mat1[2][1], mat1[2][2]],
          [mat1[3][0], mat1[3][1], mat1[3][2]]]



matd2 = [[mat1[0][0], mat1[0][1], mat1[0][2]],
         [mat1[2][0], mat1[2][1], mat1[2][2]],
         [mat1[3][0], mat1[3][1], mat1[3][2]]]

matdr2 = [[mat1[0][0], mat1[0][1], mat1[0][2]],
          [mat1[2][0], mat1[2][1], mat1[2][2]],
          [mat1[3][0], mat1[3][1], mat1[3][2]]]



matd3 = [[mat1[0][0], mat1[0][1], mat1[0][2]],
         [mat1[1][0], mat1[1][1], mat1[1][2]],
         [mat1[3][0], mat1[3][1], mat1[3][2]]]

matdr3 = [[mat1[0][0], mat1[0][1], mat1[0][2]],
          [mat1[1][0], mat1[1][1], mat1[1][2]],
          [mat1[3][0], mat1[3][1], mat1[3][2]]]



matd4 = [[mat1[0][0], mat1[0][1], mat1[0][2]],
         [mat1[1][0], mat1[1][1], mat1[1][2]],
         [mat1[2][0], mat1[2][1], mat1[2][2]]]

matdr4 = [[mat1[0][0], mat1[0][1], mat1[0][2]],
          [mat1[1][0], mat1[1][1], mat1[1][2]],
          [mat1[2][0], mat1[2][1], mat1[2][2]]]



for (i=0; i<=2; i++) {
        for (j=0; j<=1; j++) {
                matdr1[i][j+3] = matd1[i][j]
        }
}

detm1 = ((matdr1[0][0]*matdr1[1][1]*matdr1[2][2]) + (matdr1[0][1]*matdr1[1][2]*matdr1[2][3]) + (matdr1[0][2]*matdr1[1][3]*matdr1[2][4])) - ((matdr1[0][2]*matdr1[1][1]*matdr1[2][0]) + (matdr1[0][3]*matdr1[1][2]*matdr1[2][1]) + (matdr1[0][4]*matdr1[1][3]*matdr1[2][2]))
detm1 *= -1


for (i=0; i<=2; i++) {
    for (j=0; j<=1; j++) {
            matdr2[i][j+3] = matd2[i][j]
    }
}

detm2 = ((matdr2[0][0]*matdr2[1][1]*matdr2[2][2]) + (matdr2[0][1]*matdr2[1][2]*matdr2[2][3]) + (matdr2[0][2]*matdr2[1][3]*matdr2[2][4])) - ((matdr2[0][2]*matdr2[1][1]*matdr2[2][0]) + (matdr2[0][3]*matdr2[1][2]*matdr2[2][1]) + (matdr2[0][4]*matdr2[1][3]*matdr2[2][2]))


for (i=0; i<=2; i++) {
    for (j=0; j<=1; j++) {
            matdr3[i][j+3] = matd3[i][j]
    }
}

detm3 = ((matdr3[0][0]*matdr3[1][1]*matdr3[2][2]) + (matdr3[0][1]*matdr3[1][2]*matdr3[2][3]) + (matdr3[0][2]*matdr3[1][3]*matdr3[2][4])) - ((matdr3[0][2]*matdr3[1][1]*matdr3[2][0]) + (matdr3[0][3]*matdr3[1][2]*matdr3[2][1]) + (matdr3[0][4]*matdr3[1][3]*matdr3[2][2]))
detm3 *= -1


for (i=0; i<=2; i++) {
    for (j=0; j<=1; j++) {
            matdr4[i][j+3] = matd4[i][j]
    }
}

detm4 = ((matdr4[0][0]*matdr4[1][1]*matdr4[2][2]) + (matdr4[0][1]*matdr4[1][2]*matdr4[2][3]) + (matdr4[0][2]*matdr4[1][3]*matdr4[2][4])) - ((matdr4[0][2]*matdr4[1][1]*matdr4[2][0]) + (matdr4[0][3]*matdr4[1][2]*matdr4[2][1]) + (matdr4[0][4]*matdr4[1][3]*matdr4[2][2]))

det = (mat1[0][3]*detm1) + (mat1[1][3]*detm2) + (mat1[2][3]*detm3) + (mat1[3][3]*detm4)

console.log(`o determinante e: ${det}`)