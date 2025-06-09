function createProduct(name) {
    const product = {}

    product.name = name
    product.details = function () {
        console.log(` O nome do produto é ${this.name}.`)
    }

    return product
}

// O new cria um novo objeto utilizando a estrutura da função construtora.
// Instância é uma nova cópia na memória de um objeto.
const product1 = new createProduct("Teclado")
console.log (product1.name)
product1.details()

const product2 = new createProduct("Mouse")
console.log (product2.name)
product2.details()

//console.log(product1 === product2)


// Exemplos de funções construtoras disponíveis no próprio Javascript.
let myName = new String("Erika")
console.log(myName)

let price = "40.6".replace(".", "")
console.log(price)

let date = new Date("2025-1-1")
console.log(date)


function Person(name) {
    this.name = name
    this.message = function () {
        console.log(`Hi, ${this.name}`)
    }
}

const person1 = new Person("Edson")
console.log(person1)
person1.message()

const person2 = new Person("Elena")
console.log(person2.name)
person2.message()