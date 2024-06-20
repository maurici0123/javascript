"use strict";
console.clear();
var veiculos;
(function (veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["branco"] = 0] = "branco";
        Cores[Cores["preto"] = 1] = "preto";
        Cores[Cores["prata"] = 2] = "prata";
        Cores[Cores["azul"] = 3] = "azul";
        Cores[Cores["vermelho"] = 4] = "vermelho";
    })(Cores || (Cores = {}));
    class carro {
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        set off_on(v) {
            this.motor.off_on = v;
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
        constructor(potencia, cilindros, turbo) {
            this.potencia = potencia + (turbo ? turbo.pot : 0);
            this.cilindros = cilindros;
            this.ligado = false;
        }
        set off_on(v) {
            this.ligado = v;
        }
    }
    motores.motor = motor;
})(motores || (motores = {}));
const carro1 = new veiculos.carro('Cooper', new motores.motor(300, 4, new motores.turbo(100)), 2);
console.log(carro1);
carro1.off_on = true;
console.log(carro1);
