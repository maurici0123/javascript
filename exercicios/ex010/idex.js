
function perfil(name, seg, ter, qua) {
    this.nome= name,
    this.idade = seg,
    this.olho = ter,
    this.emprego = qua
}

pessoa1 = new perfil('daniel', 25, 'azul', 'engenheiro')

pessoa2 = new perfil('gabriela', 36, 'castanho', 'adm')

people = {
    nome : 'andre',
    idade : 45,
    olho : 'verde',
    emprego : 'medico', 
    nomeCompleto() {
        return `${people.nome} machado`
    }
}

//concatenando uma propiedade//
pessoa1.emprego = `${pessoa1.emprego} civil`

//criando um metodo//
pessoa2.nomeCompleto = function() {
    return this.nome + ' silva' 
}

//criando uma propiedade//
pessoa1.altura = 1.8
delete pessoa1.altura

//criando uma propiedade no construtor//
perfil.prototype.lingua = 'portugues'

//transformando objeto em array//
pes2 = Object.values(pessoa2)

console.log(pessoa1)
console.table(pessoa1)
console.log(pessoa1.lingua)
console.log(pessoa2)
console.log(pessoa2.nomeCompleto())
console.log(people.nomeCompleto())
console.log(people)
console.log(pes2)
console.log(pes2[2])