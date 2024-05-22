"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 1] = "domingo";
    dias[dias["segunda"] = 2] = "segunda";
    dias[dias["ter\u00E7a"] = 3] = "ter\u00E7a";
    dias[dias["quarta"] = 4] = "quarta";
    dias[dias["quinta"] = 5] = "quinta";
    dias[dias["sexta"] = 6] = "sexta";
    dias[dias["sabado"] = 7] = "sabado";
})(dias || (dias = {}));
console.log(dias.domingo);
console.log(dias['terça']);
console.log(dias[5]);
var cores;
(function (cores) {
    cores["red"] = "#f00";
    cores["green"] = "#0f0";
    cores["blue"] = "#00f";
})(cores || (cores = {}));
console.log(cores.blue);
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["USER"] = 0] = "USER";
    tipoUsuario[tipoUsuario["ADMIN"] = 1] = "ADMIN";
    tipoUsuario[tipoUsuario["SUPER"] = 2] = "SUPER";
})(tipoUsuario || (tipoUsuario = {}));
console.log(tipoUsuario.ADMIN);
const role = tipoUsuario.SUPER;
console.log(role);
