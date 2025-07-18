const address1 = {
    street: "Av. Brasil",
    number: 20,
}

// Nessa caso esta substituindo.
//const address2 = address1

// Criando uma nova cópia para mudar um dado.
const address2 = {...address1}
address2.number = 30

console.log(address1)
console.log(address2)