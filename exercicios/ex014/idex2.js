import { text } from "./text.js"

const reg = /maria/gi

console.log(text.match(reg))
console.log(text.replace(/joão/gi, 'felipe'))
console.log(text.replace(/(maria)/gi, '---$1---'))