x = 'ovo'
y = x.split('')
x=x.split('').reverse()
r = x.every((e,i) => e == y[i])
console.log(r)