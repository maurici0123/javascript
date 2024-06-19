"use strict";
console.clear();
var veiculos;
(function (veiculos) {
    class carro {
        constructor(nome) {
            this.nome = nome;
            this.motor = new motores.motor(250);
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
    }
    class motor {
        constructor(potencia) {
            this.potencia = potencia;
        }
    }
    motores.motor = motor;
})(motores || (motores = {}));
const carro1 = new veiculos.carro('Cooper');
console.log(carro1);
