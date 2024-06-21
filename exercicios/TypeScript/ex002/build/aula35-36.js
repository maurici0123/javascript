"use strict";
console.clear();
let [a, b, c, d, e = 'void'] = ['computador', 'teclado', 'mouse', 'monitor'];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log();
const obj = {
    Nome: 'kauan',
    Idade: 56
};
let { Nome, Idade } = obj;
console.log(Nome);
console.log(Idade);
console.log();
function fcores() {
    return ['azul', 'vermelho', 'amarelo', 'verde'];
}
let [cor1, cor2, cor3, cor4] = fcores();
console.log(cor1, cor2, cor3, cor4);
console.log();
let [...text] = 'não adentre a boa noite'.split(' ');
console.log(text);
