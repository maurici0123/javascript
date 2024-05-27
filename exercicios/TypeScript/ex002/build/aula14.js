"use strict";
const soma2 = (vet = [0]) => {
    return vet.reduce((tot, current) => tot + current);
};
let array = [3, 6, 2, 9, 23];
console.log(soma2(array));
