import { alfabeto } from "./text.js";

// [dfg] (conjunto)
// [^ghj] (negação)
// [0-9a-z] (ranger)

// \w ( encontra de a-zA-Z0-9)
// \s (encontra todo espaço em branco)
// \d (encontra de 0-9)

console.log(alfabeto)

console.log(alfabeto.match(/[adb]/g))
console.log(alfabeto.match(/[adb]+/g))

console.log(alfabeto.match(/[^adb]+/g))

console.log(alfabeto.match(/[a-zA-Z0-9]+/g)) ==
console.log(alfabeto.match(/\w+/g))
    // ao contrario
console.log(alfabeto.match(/\W+/g))

console.log(alfabeto.match(/\s+/g))


