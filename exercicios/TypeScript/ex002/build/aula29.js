"use strict";
console.clear();
function f_teste(v, r) {
    return r;
}
console.log(f_teste(5, 'ola'));
console.log(f_teste('5', true));
class C_teste {
    constructor(valor) {
        this.valor = valor;
    }
}
const ct1 = new C_teste('contra');
console.log(ct1.valor);
