// JSON.parse()  transforma em objeto
// JSON.stringify()  transforma em string

str = `[
    {
        "name": "jhon",
        "age": 45,
        "job": "driver",
        "city": "new york"
    },
    {
        "name": "cooper",
        "age": 41,
        "job": "astronaut",
        "city": "california"
    } 
]`
console.log(str)
console.log(typeof(str))

obj = JSON.parse(str)
console.log(obj)
console.log(typeof(obj))

vet = [23, 45, "house", 12, "ice"]
console.log(vet)
console.log(typeof(vet))

s = JSON.stringify(vet)
console.log(s)
console.log(typeof(s))