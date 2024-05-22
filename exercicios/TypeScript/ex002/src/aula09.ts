enum dias{
    domingo=1,
    segunda=2,
    terça=3,
    quarta=4,
    quinta=5,
    sexta=6,
    sabado=7,
}
console.log(dias.domingo)
console.log(dias['terça'])
console.log(dias[5])

enum cores{
    red='#f00',
    green='#0f0',
    blue='#00f'
}
console.log(cores.blue)

enum tipoUsuario{
    USER,
    ADMIN,
    SUPER
}
console.log(tipoUsuario.ADMIN)

const role:tipoUsuario=tipoUsuario.SUPER
console.log(role)