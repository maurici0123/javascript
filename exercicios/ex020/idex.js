// IIFE = função auto executavel

const result = (function () {
    const nome = 'fernanda'
    return nome
})()

console.log(result)

//callBack = Funcao que recebe outra funcao como parametro
console.log()

const somar = (x, y) => x + y

const calcular = (x, y, calculo) => calculo(x, y)

console.log(calcular(2, 3, somar))

// prototype = herança de um objeto
console.log()

const animal = {
    tipo: 'animal',
    som: 'som de um animal',
    emitirSom: function(){
        console.log(this.som)
    }
}

const gato = {
    som: 'miau',
    tipo: 'gato'
}

Object.setPrototypeOf(gato, animal)
gato.emitirSom()

const gatoRaivoso = {
    tipo: 'gato',
    miarForte: function() {
        console.log(this.som.toUpperCase())
    }
}

Object.setPrototypeOf(gatoRaivoso, gato)
gatoRaivoso.miarForte()

// promise = representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante
console.log()

// const umaPromise = new Promise((resolve, reject) => {
//     let soma = 1 + 2
//     if(soma == 2) {
//         resolve('tudo certo')
//     } else {
//         reject('deu ruim')
//     }
// })

// console.log('esperando uma promise...')

// umaPromise
// .then(res => {
//     console.log(`valor do then: ${res}`)
// })
// .catch(erro => {
//     console.log(`valor do catch: ${erro}`)
// })
// .finally(() => {
//     console.log('sempre serei mostrado')
// })

//////////////////////////////////////////////////////////

// promise1 = new Promise(resolve => {
//     setTimeout(() =>resolve('promise 1 resolvida'), 1000)
// })
// promise2 = new Promise(resolve => {
//     setTimeout(() =>resolve('promise 2 resolvida'), 500)
// })
// promise3 = new Promise(resolve => {
//     setTimeout(() =>resolve('promise 3 resolvida'), 100)
// })

// Promise.all([promise1, promise2, promise3]).then(messages => {
//     console.log(messages)
// })

// Promise.race([promise1, promise2, promise3]).then(message => {
//     console.log(message)
// })

// await e async = faz com que a função espere a requisição

function primeiraFuncao() {
    return new Promise(resolve =>{
        setTimeout(() => resolve(console.log('esperou isso aqui')), 1000)
    })
}

async function segundaFuncao() {
    console.log('iniciou')

    await primeiraFuncao()

    console.log('terminou')
}
segundaFuncao()