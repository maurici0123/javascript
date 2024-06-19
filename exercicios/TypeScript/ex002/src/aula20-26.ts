console.clear()

abstract class Conta {
    protected readonly numero: number
    protected titular: string   
    protected saldo: number

    constructor(titular: string, saldo: number) {
        this.numero = this.gerernumero()
        this.titular = titular
        this.saldo = saldo
    }

    private gerernumero(): number {
        return Math.ceil(Math.random() * 1000)
    }
    protected info() {
        console.log(`Titular: ${this.titular}\nNúmero: ${this.numero}\nSaldo: ${this.saldo}`)
    }
    get verSaldo() {
        return `Saldo: ${this.saldo}`
    }
    set mudarSaldo(valor: number) {
        this.saldo = valor
    }
    depositar(valor: number): number|string {
        return valor < 10000 ? this.saldo+=valor : 'Valor inválido'
    }
    saquar(valor: number): number|string {
        return valor < this.saldo ? this.saldo-=valor : 'Saldo insuficiente'
    }
}

interface juros{
    calcularJuros(porcentagem: number): void
}

class ContaPF extends Conta implements juros{
    cpf: number

    calcularJuros(porcentagem: number) {
        this.saldo += this.saldo*porcentagem
    }

    constructor(cpf: number, titular: string, saldo: number) {
        super(titular, saldo)
        this.cpf = cpf
    }

    infoPF() {
        super.info()
        console.log(`CPF: ${this.cpf}`)
        console.log('------------------------')
    }
}

const conta1 = new ContaPF(37512, 'carlos', 0)

conta1.infoPF()
conta1.depositar(1000)
conta1.saquar(450)
console.log(conta1.verSaldo)
conta1.mudarSaldo=800
console.log(conta1.verSaldo)
conta1.calcularJuros(.05)
console.log(conta1.verSaldo)