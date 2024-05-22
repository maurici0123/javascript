array = [5, 6, 1, 9, 3, 7]
array.push(6)  // coloca o numero 6 na ultima posição => [5, 6, 1, 9, 3, 7, 6]
console.log(array.length)  // comprimento do vetor => 7
console.log(array.sort())  // deixa o vetor em ordem crescente => [1, 3, 5, 6, 6, 7, 9]
console.log(array[5])  // vai mostrar o valor nesse indice => 7
console.log(array.indexOf(9))  // vai buscar o indice nesse valor => 6
console.log(array.indexOf(2))  // caso não encontre ele mostrará -1 => -1
array.pop()  // remove o ultimo valor => [1, 3, 5, 6, 6, 7]
array.shift()  // remove o primeiro valor => [3, 5, 6, 6, 7]
array.unshift(3, 7)  // adiciona um ou mais elementos no começo do array => [3, 7, 3, 5, 6, 6, 7]
console.log(array.concat([6, 8]))  // junta dois ou mais arrays => [3, 7, 3, 5, 6, 6, 7, 6, 8]
console.log(array.join(' '))  // junta todos so elementos de um array em forma de string separando pelo parâmetro => 3 7 3 5 6 6 7
console.log(array.slice(1, 5))  // retorna uma cópia começando a partir do primeiro parâmetro e termina no segundo parâmetro => [7, 3, 5, 6]
console.log(array.includes(5))  // Verificar se o elemento existe no array => true
console.log(array.reverse())  // inverte o array => [7, 6, 6, 5, 3, 7, 3]
console.log(array.splice(6, 1))  // remove um elemento do array, o primeiro é a posição no array e o segundo é a quantidade de elementos a remover => [7, 6, 6, 5, 3, 7]
console.log(array.splice(2, 0, 1))  // adicionar um elemento no array, o elemento 1 naposição 2 => [7, 6, 1, 6, 5, 3, 7]
str = 'não adentre a boa noite apenas com ternura'
console.log(str.split(' '))  // separa a string por caractere, palavra ou coloca tudo em um index  => ['não', 'adentre', 'a', 'boa', 'noite', 'apenas', 'com', 'ternura']


// forEach = O .forEach() irá jogar cada um dos elemetos do Array no primeiro parâmetro, o índice do elemento no segundo e o Array original no terceiro
array.forEach((number, index, array) => {
    console.log(`o numero ${number} esta no indice ${index}, no array ${array}`)
})
console.log()


// map = Nós utilizamos o .map() quando queremos fazer alguma modificação nos elementos de um Array.
usersList = [
    {name: 'João', credit: 500},
	{name: 'Maria', credit: 300},
	{name: 'bernado', credit: 900},
	{name: 'natalia', credit: 400},
]

usersList.map((user, index, array) => {
    user.credit += 100
    console.log(user)
})
console.log()


// filter = Passamos para ele uma função. Se essa função retornar true, o elemento será inserido no novo Array que será criado. Se a função retornar false, o elemento será ignorado
filterUser = usersList.filter(user => user.credit > 500)
console.log(filterUser)
console.log()


// find = Usamos esse método quando queremos encontrar algum elemento dentro no Array. Para isso, passamos uma função que irá retornar true ou false. O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos.
findUser = usersList.find(user => user.credit > 300)
console.log(findUser)
console.log()


// findIndex = Faz o mesmo que o .find(), mas retorna o índice do elemento encontrado ao invés de retornar o próprio elemento.
findUser = usersList.findIndex(user => user.credit > 300)
console.log(findUser)
console.log()


// every = Passamos uma função que retorna true ou false. Se todos os retornos forem true, significa que todos os elementos passaram no teste, e a função retornará true.
everyUser = usersList.every(user => user.credit > 100)
console.log(everyUser)
console.log()


// some =  O .some() retorna true se pelo menos um elemento do Array passar no teste
someUser = usersList.some(user => user.credit == 1000)
console.log(someUser)
console.log()


// reduce = Esta função serve para reduzirmos o conteúdo de um Array para apenas um elemento. O exemplo mais clássico é somar todos os valores de um array
reduceArray = array.reduce((total, currentElement) => total + currentElement)
console.log(reduceArray)