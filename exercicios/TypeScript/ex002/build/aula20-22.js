"use strict";
class Conta {
    constructor(titular) {
        this.numero = this.gerernumero();
        this.titular = titular;
    }
    gerernumero() {
        return Math.ceil(Math.random() * 1000);
    }
}
class ContaPF extends Conta {
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF criada para: ${titular}, número: ${this.numero}`);
    }
}
const conta1 = new ContaPF(37512, 'carlos');
console.log(conta1);
