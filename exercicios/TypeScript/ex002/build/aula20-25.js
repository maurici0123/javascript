"use strict";
console.clear();
class Conta {
    constructor(titular) {
        this.numero = this.gerernumero();
        this.titular = titular;
        this.saldo = 0;
    }
    gerernumero() {
        return Math.ceil(Math.random() * 1000);
    }
    info() {
        console.log(`Titular: ${this.titular}\nNúmero: ${this.numero}\nSaldo: ${this.saldo}`);
    }
    get verSaldo() {
        return `Saldo: ${this.saldo}`;
    }
    set mudarSaldo(valor) {
        this.saldo = valor;
    }
    depositar(valor) {
        return valor < 10000 ? this.saldo += valor : 'Valor inválido';
    }
    saquar(valor) {
        return valor < this.saldo ? this.saldo -= valor : 'Saldo insuficiente';
    }
}
class ContaPF extends Conta {
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    infoPF() {
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log('------------------------');
    }
}
const conta1 = new ContaPF(37512, 'carlos');
conta1.infoPF();
conta1.depositar(1000);
conta1.saquar(450);
console.log(conta1.verSaldo);
conta1.mudarSaldo = 870;
console.log(conta1.verSaldo);
