"use strict";
class computador {
    constructor(nome, ram, ligado) {
        this.ligado = false;
        this.nome = nome;
        this.ram = ram;
        this.ligado = this.ligado;
    }
}
const c1 = new computador('inspiron 15', 16, false);
const c2 = new computador('book 3', 8, true);
console.log(c1);
console.log(c2);
