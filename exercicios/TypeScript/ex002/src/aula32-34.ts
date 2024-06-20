console.clear()

namespace veiculos {
    enum Cores { 'branco', 'preto', 'prata', 'azul', 'vermelho' }
    export class carro {
        private nome: string
        private motor: motores.motor
        private cor: string

        constructor(nome: string, motor: motores.motor, cor: Cores) {
            this.nome = nome
            this.motor = motor
            this.cor = Cores[cor]
        }

        set off_on(v: boolean) {
            this.motor.off_on = v
        }
    }

}

namespace motores {
    export class turbo {
        private potencia: number
        constructor(potencia: number) {
            this.potencia = potencia
        }
        get pot() {
            return this.potencia
        }
    }

    export class motor {
        private potencia: number
        private ligado: boolean
        private cilindros: number

        constructor(potencia: number, cilindros: number, turbo?: turbo) {
            this.potencia = potencia + (turbo ? turbo.pot : 0)
            this.cilindros = cilindros
            this.ligado = false
        }


        set off_on(v: boolean) {
            this.ligado = v;
        }

    }
}

const carro1 = new veiculos.carro('Cooper', new motores.motor(300, 4, new motores.turbo(100)), 2)
console.log(carro1)
carro1.off_on = true
console.log(carro1)