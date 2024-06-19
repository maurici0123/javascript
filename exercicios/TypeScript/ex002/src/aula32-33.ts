console.clear()

namespace veiculos {
    export class carro {
        nome: string
        motor: motores.motor

        constructor(nome: string) {
            this.nome = nome
            this.motor = new motores.motor(250, 6, new motores.turbo(50))
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
        potencia: number
        private ligado: boolean
        cilindros: number

        set off_on(v: boolean) {
            this.ligado = v
        }

        constructor(potencia: number, cilindros: number, turbo?: turbo) {

            this.potencia = potencia+(turbo?turbo.pot:0)
            this.ligado = false
            this.cilindros = cilindros
        }
    }
}

const carro1 = new veiculos.carro('Cooper')
console.log(carro1)
carro1.motor.off_on = true
console.log(carro1)
