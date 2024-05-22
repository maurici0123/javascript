class people {
    nome = null
    idade = null

    constructor(nome: any, idade: any) {
        this.nome = nome
        this.idade = idade
    }
}

let p1 = new people('joão', 56)

console.log(p1.nome)
console.log(p1.idade)