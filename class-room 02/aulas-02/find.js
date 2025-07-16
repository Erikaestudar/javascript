// O método find() retorna o valor do primeiro elemento do array que satisfizer a condição. Caso contrario, undefined é retornado.

const values = [5, 12, 8, 130, 44]

// Retorna o primeiro elemento que valor é maior que 10.
const found = values.find((value) => value > 10)
console.log(found)

// Exemplo com objetos.
const fruits = [
    {name: "apple", quantity: 23},
    {name: "banana", quantity: 25},
    {name: "orange", quantity: 52},
]

const result = fruits.find((fruit) => fruit.name === "banana")
console.log(result)