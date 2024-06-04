"use strict";
console.clear();
class Conta {
    constructor(titular, saldo) {
        this.numero = this.gerernumero();
        this.titular = titular;
        this.saldo = saldo;
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
    calcularJuros(porcentagem) {
        this.saldo += this.saldo * porcentagem;
    }
    constructor(cpf, titular, saldo) {
        super(titular, saldo);
        this.cpf = cpf;
    }
    infoPF() {
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log('------------------------');
    }
}
const conta1 = new ContaPF(37512, 'carlos', 0);
conta1.infoPF();
conta1.depositar(1000);
conta1.saquar(450);
console.log(conta1.verSaldo);
conta1.mudarSaldo = 800;
console.log(conta1.verSaldo);
conta1.calcularJuros(.05);
console.log(conta1.verSaldo);
