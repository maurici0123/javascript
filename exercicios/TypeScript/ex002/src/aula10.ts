// null - undefined - unknown

// null => tipo nulo
// undefined => indefinido
// unknown => desconhecido

let v1: string | null
v1 = 'bruno'
console.log(v1)

let v2:any
console.log(v2)

let v3:unknown = v1
let vnum:any = v3
console.log(vnum)