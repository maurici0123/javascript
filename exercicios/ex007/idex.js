/*
    num.push(6) == coloca o numero 6 na ultima posição 
    num.length == comprimento do vetor
    num.sort() == deixa o vetor em ordem crescente
    num = [5, 6, 1, 9, 3, 7]
    num[5] == posição 0
    num.indexOF(9) == 3
    num.indexOF(2) == -1
*/

num = [8, 6, 9, 2, 5, 1, 4, 7]
console.log(num.length)
console.log(`${num[1]}`)

/*
    for (c = 0; c < num.length; c++) {
        console.log(`passo ${num[c]}`)
    }
*/    

num.sort()
for (c in num) {
    console.log(`a variavel num tem o valor ${num[c]} na posição ${c}`)
}
