import { cpf } from './text.js'

// ^ -> Começa com
// $ -> Termina com
// [^] -> Negação
// m - multiline

const excpf = ' 254.224.877-45';

const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log(cpfs2);
console.log(cpfs2.match(cpfRegExp));