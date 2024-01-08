// soma = function(n1, n2){
//     return n1+n2
// }

soma=(n1, n2)=>{return n1+n2}
console.log(soma(5, 9))

sub=n1=>{return n1-4} // com 1 parametro não precisa usar os parenteses
console.log(sub(5))

add=n1=>n1+6 // sem o return não precisa uasr as chaves
console.log(add(4))

obj=()=>({name: 'tars', sex: 'masculine'}) // tem que usar os parenteses para não ter q usar o return
console.table(obj())