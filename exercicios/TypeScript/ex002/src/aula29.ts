console.clear()

function f_teste<T,U>(v: T, r: U): U {
    return r
}

console.log(f_teste<number,string>(5,'ola'))
console.log(f_teste<string,boolean>('5',true))

class C_teste<T>{
    public valor:T
    constructor(valor:T){
        this.valor = valor
    }
}

const ct1 = new C_teste<string>('contra')
console.log(ct1.valor)