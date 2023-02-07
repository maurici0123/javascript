import { cpf, ip } from './text.js'

console.log(cpf)

const excpf = /(\d{3}\.){2}\d{3}-\d{2}/g
console.log(cpf.match(excpf))

console.log(ip)

// 250 255 25[0-5]
// 200 249 2[0-4]\d
// 100 199 1\d\d
// 10 99 [1-9]\d
// 0 9 \d

const exip = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g
console.log(ip.match(exip))