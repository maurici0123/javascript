class Conta {
    numero: number;
    titular: string

    constructor(titular: string) {
        this.numero = this.gerernumero();
        this.titular = titular;
    }

    gerernumero(): number {
        return Math.ceil(Math.random()*1000)
    }
}

class ContaPF extends Conta {
    cpf: number

    constructor(cpf: number, titular: string) {
        super(titular);
        this.cpf = cpf;
    }
}

const conta1 = new ContaPF(37512, 'carlos')
console.log(conta1)