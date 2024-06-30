x = 'arara'
y = x.split('')
x = x.split('').reverse()
r = x.every((e, i) => e == y[i])
//console.log(r)

const input = ['(', '2', ')', 'Math.cos(', '2', '3', ')']

for (let i = 0; i < input.length; i++) {
    if (input[i] == ')' && input[i + 1].match(/Math\.\w+/)) {
        input.splice(i + 1, 0, '*')
    }
}

console.log(input)