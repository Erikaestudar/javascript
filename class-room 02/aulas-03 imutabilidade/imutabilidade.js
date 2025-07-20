const address1 = {
    street: "Av. Brasil",
    number: 20,
}

// Isso não é uma cópia é uma referência. Nesse caso esta substituindo.
//const address2 = address1

// Criando uma nova cópia (um novo objeto utilizando as propriedades e valores de address1) para mudar um dado (Opção 1). 

/*
const address2 = {...address1}
address2.number = 30
*/

// Opção 2
const address2 = {...address1, number: 30}
console.log(address1, address2)


const list1 = ["Apple", "Banana"]

// Exemplo de referência de Array 
//const list2 = list1
//list2.push("Watermelon")


const list2 = [...list1, "Watermelon"]
//list2.push("Watermelon")

console.log(list1, list2)