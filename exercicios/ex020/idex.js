// IIFE = função auto executavel
console.log('\n-------------- IIFE --------------\n')

const result = (function () {
    const nome = 'fernanda'
    return nome
})()

console.log(result)

//callBack = Funcao que recebe outra funcao como parametro
console.log('\n-------------- Callback --------------\n')

const somar = (x, y) => x + y

const calcular = (x, y, calculo) => calculo(x, y)

console.log(calcular(2, 3, somar))

// prototype = herança de um objeto
console.log('\n-------------- Prototype --------------\n')

const animal = {
    tipo: 'animal',
    som: 'som de um animal',
    emitirSom: function () {
        console.log(this.som)
    }
}

animal.emitirSom()

const gato = {
    som: 'miau',
    tipo: 'gato'
}

Object.setPrototypeOf(gato, animal)
gato.emitirSom()

const gatoRaivoso = {
    tipo: 'gato',
    miarForte: function () {
        console.log(this.som.toUpperCase())
    }
}

Object.setPrototypeOf(gatoRaivoso, gato)
gatoRaivoso.miarForte()

// promise = representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante
console.log('\n---------------- Promise ----------------\n')

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
console.log('\n-------------- await e async --------------\n')

function primeiraFuncao() {
    return new Promise(resolve => {
        setTimeout(() => resolve(console.log('esperou isso aqui')), 1000)
    })
}

async function segundaFuncao() {
    console.log('iniciou')

    await primeiraFuncao()

    console.log('terminou')
}
//segundaFuncao()

// try e catch =  para tratar erros
console.log('\n-------------- try e catch --------------\n')

const main = () => {
    try {
        variavel
        console.log("o código funcionou!")
    } catch (err) {
        console.error(`o erro do código foi: ${err}`)
    } finally {
        console.log('FIM da função')
    }
}
main()

//////////////////////////////////////////////////////////

const funcao1 = () => {
    console.log('sou a função 1')

    try {
        'opa', cod
    } catch (err) {
        console.error(`erro: ${err}`)
        throw err
    }
}

const funcao2 = () => {
    console.log('sou a função 2')

    valor = true
    try {
        if (valor) {
            throw new Error('ERRO na função 2')
        }
    } catch (err) {
        console.error(`erro: ${err}`)
        throw err
    }
}

const main2 = () => {
    try {
        funcao1()
        funcao2()
        console.log('fim do código!')
    } catch (err) {
        console.error(`erro: ${err}`)
    }
}
main2()

//////////////////////////////////////////////////////////

const main3 = () => {

    try {
        try {
            try {
                throw new Error('erro no try 3')
            } catch (err) {
                console.log(`erro t3: ${err}`)
                throw err
            }
        } catch (err) {
            console.log(`erro t2: ${err}`)
            throw err
        }
    } catch (err) {
        console.log(`erro t1: ${err}`)
    }
}

main3()

// arguments =  é um objeto semelhante a um array acessível dentro de funções
console.log('\n-------------- arguments --------------\n')

function argumentsFunction() {
    console.log(arguments)

    let args = Array.from(arguments)
    console.log(args.reduce((total, current) => total + current))
}

argumentsFunction(2, 6, 9, 2, 1)

// rest parameter = permite que uma função aceite um número indefinido de argumentos como um array
console.log('\n-------------- rest parameter --------------\n')

function parameterFunction(mult, ...parm) {

    console.log(parm.map(element => mult * element))
}

parameterFunction(3, 6, 9, 2, 1)

// spread operator = nos permite copiar rapidamente todo ou parte de um array ou objeto existente para outro array ou objeto
console.log('\n-------------- spread operator --------------\n')

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

const objCopy = { ...obj1, ...obj2 }
console.log(objCopy)

//////////////////////////////////////////////////////////

const somaDeTres = (n1, n2, n3, n4) => {
    console.log(n1 + n2 + n3)
}

list = [4, 7, 2]
somaDeTres(...list)

// Destructuring = extrair valores de arrays ou objetos em variáveis
console.log('\n-------------- destructuring --------------\n')

let arr = ['Ana', 'Bia', 'Carla']
let [primeiroAluno, segundoAluno, terceiroAluno] = arr
console.log(`O primeiro aluno é ${primeiroAluno}, o segundo é ${segundoAluno} e o terceiro é ${terceiroAluno}`)

//////////////////////////////////////////////////////////

const [a, ...b] = [1, 2, 3]
console.log(a, b)

//////////////////////////////////////////////////////////

const o1 = { n: 'mau', i: 23 }
const { n, i } = o1
console.log(n, i)

//////////////////////////////////////////////////////////

const o2 = { p: 24, q: true }
const o3 = { p: foo, q: baar } = o2
console.log(o3)

//////////////////////////////////////////////////////////

const { l1 = 3, l2 = 8 } = { l1: 1 }
console.log(l1, l2)

//////////////////////////////////////////////////////////

const student = {
    name: 'John',
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

const { name: person, marks: { science: grade } } = student
console.log(person, grade)

//////////////////////////////////////////////////////////

function userIdDisplayName({ id, displayName }) {
    console.log(`id: ${id}, displayName: ${displayName}`)
}

function whois({ displayName: displayName, fullName: { firstName: name } }) {
    console.log(displayName + " is " + name)
}

var user = {
    id: 42,
    displayName: "jdoe",
    fullName: {
        firstName: "John",
        lastName: "Doe",
    },
}

userIdDisplayName(user)
whois(user)

//////////////////////////////////////////////////////////

let key = 'z'
let { [key]: aux } = { z: "bar" }

console.log(aux)

// parâmetro predefinido = são valores que você pode atribuir a um parâmetro de uma função no momento da sua criação
console.log('\n-------------- parâmetro predefinido --------------\n')

multiplicar = (v1 = 2, v2 = 3) => {
    return v1 * v2
}
console.log(multiplicar())
console.log(multiplicar(undefined, 6))
console.log(multiplicar(null, 3))

//////////////////////////////////////////////////////////

somaArrayObject = ([n1, n2] = [2, 3], { n3: n3 } = { n3: 4 }) => {
    return n1 + n2 + n3
}
console.log(somaArrayObject())
console.log(somaArrayObject([6, 4], { n3: 5 }))

// recursão =  função que chama a si mesma durante o processamento
console.log('\n-------------- recursão --------------\n')

function fatorial(n) {
    if (n === 0) {
        return 1
    }
    return n * fatorial(n - 1)
}

console.log(fatorial(5))

// Closures = é uma função que tem acesso ao seu próprio escopo, bem como ao escopo de sua função pai, mesmo depois que a função pai tenha retornado
console.log('\n-------------- Closures --------------\n')

function criarContador() {
    let c = 0
    return () => {
        console.log(c++)
    }
}

contador = criarContador()
contador()
contador()
contador()

//////////////////////////////////////////////////////////

function adição(XX) {
    return (YY) => {
        if (!YY) {
            return XX
        }
        return adição(XX + YY)
    }
}
console.log(adição(2)(5)(9)())

// Currying = currying é o processo de transformar uma função que espera vários argumentos em uma função que espera um único argumento e retorna outra função
console.log('\n-------------- Currying --------------\n')

function ehMaiorCurrying(a) {
    let comparação = false

    return function ehMaiorCurrying2(b) {
        if (!b) {
            console.log(comparação)
            return
        }
        comparação = a > b
        console.log(comparação)

        return ehMaiorCurrying2
    }
}

resultado = ehMaiorCurrying(8)
resultado(4)
resultado(8)
resultado(9)
resultado()

// objetos imutáveis =  dados que não podem ser alterados após sua criação, como strings ou números (mas pode mudar um objeto dentro desse objeto imutável)
console.log('\n-------------- objetos imutáveis --------------\n')

// Object.preventExtensions() = previne novas propriedades de serem adicionadas ao Objeto
const object1 = {
    koo: 234
}
Object.preventExtensions(object1)

object1.koo = 90 // true
delete object1.koo // true
object1.haa = 665 // false

console.log(object1)


// Object.seal() = previne novas propriedades de serem adicionadas e a dletação delas
const object2 = {
    koo: 234
}
Object.seal(object2)

object2.koo = 90 // true
delete object2.koo // false
object2.haa = 665 // false

console.log(object2)


// Object.freeze() = previne novas propriedades de serem adicionadas, a dletação e a alteração delas
const object3 = {
    koo: 234,
}
Object.freeze(object3)

object3.koo = 90 // false
delete object3.koo // false
object3.haa = 665 // false

console.log(object3)

// checagem de objetos imutáveis = checar se um objeto é imutável
console.log('\n-------------- checagem de objetos imutáveis --------------\n')

const hybridObject = {
    someProp: 'string'
}

console.log(Object.isExtensible(hybridObject))
console.log(Object.isSealed(hybridObject))
console.log(Object.isFrozen(hybridObject))

Object.preventExtensions(hybridObject)
Object.seal(hybridObject)
Object.freeze(hybridObject)
console.log()

console.log(Object.isExtensible(hybridObject))
console.log(Object.isSealed(hybridObject))
console.log(Object.isFrozen(hybridObject))

