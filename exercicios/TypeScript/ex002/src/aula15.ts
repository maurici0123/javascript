function fsoma(...n: number[]) {
    let s = n.reduce((tot, current)=> tot+current)
    return s
}

console.log(fsoma(10,20,67,30,79))

