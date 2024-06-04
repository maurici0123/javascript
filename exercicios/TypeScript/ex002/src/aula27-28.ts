console.clear()

interface curso {
    titulo: string,
    des: string;
    aula: number;
    maxAlunos?: number
}

interface cursoPro extends curso {

}

let curso1: cursoPro
let curso2: curso

curso1 = {
    titulo: 'typescript',
    des: 'curso de typescript',
    aula: 36,
    maxAlunos: 45,
}
curso2 = {
    titulo: 'pthon',
    des: 'curso de python',
    aula: 56,
}

console.log(curso1)
console.log(curso2)