console.clear()

namespace veiculos {
    export class carro {
        nome: string
        motor: motores.motor

        constructor(nome: string) {
            this.nome = nome
            this.motor = new motores.motor(250)
        }
    }
}

namespace motores {
    export class motor {
        potencia: number

        constructor(potencia: number){
            this.potencia = potencia
        }
    }
}

const carro1 = new veiculos.carro('Cooper')
console.log(carro1)