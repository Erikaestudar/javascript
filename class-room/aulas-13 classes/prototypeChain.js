/*
    PROTOTYPE 
    Quando se trata de herança, o Javascript tem somente um construtor: objetos.
    - Cada objeto tem um link interno para um outro objeto chamado PROTOTYPE.

    O objeto PROTOTYPE também tem um atributo prototype, e assim por diante até que o valor null seja encontrado como sendo o seu prototype. O null, não tem prototype e age como um link final nesta cadeia de protótipos (prototype chain).
*/

const address = {
    city: "São Paulo",
    country: "Brasil"
}

console.log(address)

const users = ["Erika", "Maria", "Ana"]

console.log(users)

// Coloca 2 underline
const userName = "Rodrigo Silva"
console.log(userName.__proto__)