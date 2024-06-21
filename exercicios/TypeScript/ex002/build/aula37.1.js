"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aula37_1 = require("./aula37");
console.log(aula37_1.global.test);
aula37_1.global.test = 1;
console.log(aula37_1.global.test);
new aula37_1.global(2);
console.log(aula37_1.global.test);
