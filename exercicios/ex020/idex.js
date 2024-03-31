// IIFE = função auto executavel

const result = (function () {
    const nome = 'fernanda'
    return nome
})()

console.log(result)

//callBack = Funcao que recebe outra funcao como parametro

const somar = (x, y) => x + y

const calcular = (x, y, calculo) => calculo(x, y)

console.log(calcular(2, 3, somar))

// prototype = herança de um objeto

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