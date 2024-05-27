function soma(n1: number=0, n2: number=0): number {
    return n1 + n2
}

console.log(soma(4))

function novoUSER(user: string, pass: string, nome?:string) {
    console.log(`USER: ${user}\nPass: ${pass}\nNome: ${nome}`)
}

novoUSER('br', '348')