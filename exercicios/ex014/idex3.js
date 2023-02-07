import { text, arquivo } from "./text.js"

// * (opcional) 0 ou n
// + (obrigatorio) 1 ou n
// ? (opcional) 0 ou 1
// \ (caractere de escape)
// . (qualquer caractere)
// {min,max} (procura uma repetição do minimo ao maximo)

// console.log(text)

// const reg = /jo+ão+/gi
// console.log(text.match(reg)) 

// console.log(arquivo)



const tipo = /\.jpe?g/gi

for (let x of arquivo) {

    const val = x.match(tipo)
    if (!val)
    continue
    console.log(x, x.match(tipo))
}

