x = 'arara'
y = x.split('')
x=x.split('').reverse()
r = x.every((e,i) => e == y[i])
console.log(r)

const a=60
const d=0.1

console.log(a-(a*d))