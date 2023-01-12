/* mutiplicação de matriz */

mat1 = [[1,2],
        [3,4]]

mat2 = [[3,4],
        [5,6]]       

mats = [[],
        []]


for (i=0; i<=1; i++) {
    for (j=0; j<=1; j++) {
        mats[i][j] = (mat1[i][0] * mat2[0][j]) + (mat1[i][1] * mat2[1][j])  
    }
}
for (i=0; i<=1; i++) {
    for (j=0; j<=1; j++) {
        console.log(mats[i][j])
    }
}
