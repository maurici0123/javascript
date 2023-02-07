import { text } from "./text.js"

// g (todas as ocorrencias)
// i (letra maiuscula ou minuscula)
// (()()) (grupos)
// | (ou)
// {min, max} (minimo de caractere e maximo)

const reg = /(adultos|criaças)( atualmente)/gi

// console.log(reg.test(text))
const found = (reg.exec(text))

console.log(found[0])
console.log(found[1])
console.log(found[2])
console.log(found.index)
console.log(found.input)
