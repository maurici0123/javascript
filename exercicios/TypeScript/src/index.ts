let n: number = 3
console.log(n)


let MyNumbers: number[] = [2, 6, 8, 1, 9, 4, 2]
console.log(MyNumbers)


let MyTupla: [string, number, string]
MyTupla = ['jorge', 34, 'economista']
console.log(MyTupla)


let ObjectLiterals: {name:string, age:number, job:boolean} = {
    name: 'pedro',
    age:  17,
    job: false
}
console.log(ObjectLiterals)


// any -> aceita qualquer tipo de valor
let x: any = 3
x = 'hello'
x = true

// union type
let id: string | number = 'nome'
id = 67


// type alias
type MyIdType = number | string
let city: MyIdType = 'london'
let count: MyIdType = 34


// enum
enum size{
    p  = 'pequeno',
    m = 'médio',
    g = 'grande'
}
let camisa = {
    name: 'polo',
    size: size.p
}
console.log(camisa)


// literal types
let teste: 'verificado' | null
teste: 'verificado'
teste: null

// function
function sum(a: number, b: number){
    return a+b
}
console.log(sum(5, 9))

function SayAge(age: number): string{
    return `your age is ${age} years`
}
console.log(SayAge(45))

function NoReturn(msg: string): void{
    console.log(msg)
}
NoReturn('teste')

function greeting(name: string, greet?: string): void{
    greet ? console.log(`welcome ${greet} ${name}`) : console.log(`welcome ${name}`)
}
greeting('joâo')


// interfaces
interface MathFunctionParams{
    n1: number,
    n2: number
}

function SumInterface(num: MathFunctionParams){
    return num.n1 + num.n2
}
console.log(SumInterface({n1: 3, n2: 8}))

function MutplyInterface(num: MathFunctionParams){
    return num.n1 * num.n2
}
const Params: MathFunctionParams = {
    n1: 5,
    n2: 9
}
console.log(MutplyInterface(Params))


// narrowing -> checagem de tipos
function chacar(info: number | boolean){
    typeof(info) == 'number' ? console.log('o tipo do parametro é number') : console.log('o tipo do parametro é boolean')
}
chacar(3)
chacar(false)


// generics
function ShowArray<T>(arr: T[]){
    arr.forEach(item => console.log(`item ${item}`));
}

ShowArray([2, 6, 8, 5])
ShowArray([true, false, false, true])


// class
class user {
    name
    role
    IsApproved

    constructor(name: string, role: string, IsApproved:boolean){
        this.name = name
        this.role = role
        this.IsApproved = IsApproved
    }
    ShowUserName(){
        console.log(`o nome do usuario é ${this.name}`)
    }
    ShowUserRole(role: boolean){
        role ? console.log(`o papel do user é ${this.role}`) : console.log('esta informação é restrita')
    }
}
const person1 = new user('beatriz', 'admin', true)
console.log(person1)
person1.ShowUserName()
person1.ShowUserRole(false)


// interface in class
interface IVehicle{
    brand: string
    ShowBrand(): void
}
class car implements IVehicle{
    brand
    wheels

    constructor(brand: string, wheels: number){
        this.brand = brand
        this.wheels = wheels
    }

    ShowBrand(): void {
        console.log(`a marca do carro é ${this.brand}`)
    }
}
const XC60 = new car('volvo', 4)
console.log(XC60)
XC60.ShowBrand()


// herança
class SuperCar extends car{
    engine

    constructor(brand: string, wheels: number, engine: number){
        super(brand, wheels)
        this.engine = engine
    }
}
const R6 = new SuperCar('audio', 4, 2.0)
console.log(R6)
R6.ShowBrand()


// decorators