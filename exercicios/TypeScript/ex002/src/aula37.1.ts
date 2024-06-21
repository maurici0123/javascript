import { global } from "./aula37"

console.log(global.test)

global.test = 1
console.log(global.test)

new global(2)
console.log(global.test)