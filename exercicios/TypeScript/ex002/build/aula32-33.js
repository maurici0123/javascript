"use strict";
console.clear();
var veiculos;
(function (veiculos) {
    class carro {
        constructor(nome) {
            this.nome = nome;
            this.motor = new motores.motor(250, 6, new motores.turbo(50));
        }
    }
    veiculos.carro = carro;
})(veiculos || (veiculos = {}));
var motores;
(function (motores) {
    class turbo {
        constructor(potencia) {
            this.potencia = potencia;
        }
        get pot() {
            return this.potencia;
        }
    }
    motores.turbo = turbo;
    class motor {
        set off_on(v) {
            this.ligado = v;
        }
        constructor(potencia, cilindros, turbo) {
            this.potencia = potencia + (turbo ? turbo.pot : 0);
            this.ligado = false;
            this.cilindros = cilindros;
        }
    }
    motores.motor = motor;
})(motores || (motores = {}));
const carro1 = new veiculos.carro('Cooper');
console.log(carro1);
carro1.motor.off_on = true;
console.log(carro1);
