class pessoa {
    constructor(nomeDaPessoa, idadeDaPessoa, alturaDAPessoa){
        this.nome = nomeDaPessoa
        this.idade = idadeDaPessoa
        this.altura = alturaDAPessoa
    }

    apresentacao(){
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

gustavo = new pessoa('Gustavo', 23 ,1.80)
amanda = new pessoa ('Amanda' , 35 , 1.70)
rodrigo = new  pessoa('Rodrigo' , 45 , 1.85)

console.log(gustavo)
gustavo.apresentacao()

console.log()


class filho extends pessoa{
    constructor(nomeDoFilho, idadeDoFilho, alturaDoFilho,  nomeDoPai, nomeDaMae){
        super(nomeDoFilho, idadeDoFilho,  alturaDoFilho) 
        this.pai = nomeDoPai
        this.mae = nomeDaMae        
    }
    
    apresentacao(){
       console.log(`Eu sou o ${this.nome}, filho do ${this.pai}`)
    }
}

filipe = new filho('Filipe', 19,  1.75, 'rodrigo', 'Amanda')

console.log(filipe)
filipe.apresentacao()