class car {
    constructor(name, year) {
        this.name = name
        this.year = year
    }
    age(x) {
        return x - this.year
    }
}
let date = new Date()
let year = date.getFullYear()

my_car = new car("ford", 2016)

console.log(my_car.age(year))
