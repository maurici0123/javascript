c = 1
while (c <= 10) {
    console.log(`passo ${c}`)
    c++
}

do {
    console.log(`ate ${c}`)
    c++
} while (c <= 20)

for (c = c;c <= 30;c++) {
    console.log(`number ${c}`)
}

num = [5, 6, 1, 9, 3, 7]

for (c in num) {
    console.log(`a variavel num tem o valor ${num[c]} na posição ${c}`)
}

for (c of num) {
    console.log(`o array tem o valor: ${c}`)
}