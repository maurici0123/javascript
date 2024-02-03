"use strict";
let n = 3;
console.log(n);
let MyNumbers = [2, 6, 8, 1, 9, 4, 2];
console.log(MyNumbers);
let MyTupla;
MyTupla = ['jorge', 34, 'economista'];
console.log(MyTupla);
let ObjectLiterals = {
    name: 'pedro',
    age: 17,
    job: false
};
console.log(ObjectLiterals);
// any -> aceita qualquer tipo de valor
let x = 3;
x = 'hello';
x = true;
// union type
let id = 'nome';
id = 67;
let city = 'london';
let count = 34;
// enum
var size;
(function (size) {
    size["p"] = "pequeno";
    size["m"] = "m\u00E9dio";
    size["g"] = "grande";
})(size || (size = {}));
let camisa = {
    name: 'polo',
    size: size.p
};
console.log(camisa);
// literal types
let teste;
teste: 'verificado';
teste: null;
// function
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 9));
function SayAge(age) {
    return `your age is ${age} years`;
}
console.log(SayAge(45));
function NoReturn(msg) {
    console.log(msg);
}
NoReturn('teste');
function greeting(name, greet) {
    greet ? console.log(`welcome ${greet} ${name}`) : console.log(`welcome ${name}`);
}
greeting('joâo');
function SumInterface(num) {
    return num.n1 + num.n2;
}
console.log(SumInterface({ n1: 3, n2: 8 }));
function MutplyInterface(num) {
    return num.n1 * num.n2;
}
const Params = {
    n1: 5,
    n2: 9
};
console.log(MutplyInterface(Params));
// narrowing -> checagem de tipos
function chacar(info) {
    typeof (info) == 'number' ? console.log('o tipo do parametro é number') : console.log('o tipo do parametro é boolean');
}
chacar(3);
chacar(false);
// generics
function ShowArray(arr) {
    arr.forEach(item => console.log(`item ${item}`));
}
ShowArray([2, 6, 8, 5]);
ShowArray([true, false, false, true]);
// class
class user {
    constructor(name, role, IsApproved) {
        this.name = name;
        this.role = role;
        this.IsApproved = IsApproved;
    }
    ShowUserName() {
        console.log(`o nome do usuario é ${this.name}`);
    }
    ShowUserRole(role) {
        role ? console.log(`o papel do user é ${this.role}`) : console.log('esta informação é restrita');
    }
}
const person1 = new user('beatriz', 'admin', true);
console.log(person1);
person1.ShowUserName();
person1.ShowUserRole(false);
class car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    ShowBrand() {
        console.log(`a marca do carro é ${this.brand}`);
    }
}
const XC60 = new car('volvo', 4);
console.log(XC60);
XC60.ShowBrand();
// herança
class SuperCar extends car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const R6 = new SuperCar('audio', 4, 2.0);
console.log(R6);
R6.ShowBrand();
// decorators
