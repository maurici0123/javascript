import { cpf } from './text.js'

// ^ -> Começa com
// $ -> Termina com
// [^] -> Negação
// m - multiline



const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log(cpf);
console.log(cpf.match(cpfRegExp));