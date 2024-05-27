const soma2 = (vet: number[]=[0]): number => {
    return vet.reduce((tot: number, current: number) => tot + current)
}

let array:Array<number>=[3,6,2,9,23]

console.log(soma2(array))