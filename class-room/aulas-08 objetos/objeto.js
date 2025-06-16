/* 
    OBJETO 
    - Uma coleção de dados e /ou funcionalidades;
    - Podem ter propriedades e métodos; 
*/

// Cria um objeto vazio.
let obj = {}
console.log(obj)
console.log(typeof obj)

// Cria um objeto com propriedades e métodos.
const user = {
    // chave : valor
    email: "erika@email.com",
    age: 18,
    // Estrutura de objeto aninhada
    name: {
        first_name: "Edson",
        surname: "Sugawara"
    },
    address: {
        street: "Rua Manoel",
        number: 19,
        city: "São Paulo", 
        postal_code: "19068-700"
    },
    message: () => {
        console.log(`hello! ${user.name.first_name}`)
    },
    task: function () {
        console.log(`Eu moro na ${this.address.street}, no estado de ${this.address.city} `)
    }
}

// Acessando Objetos.
user.message()
user.task()

const userName = {
    name: "Erika Miyuki",
    email: "ka@email.com",
    message: function () {
        // Palavra reservada (this), o this não funciona com arrow function "() => {}". Deve-se usar o função anônima
        console.log(`Olá ${this.name}, ${this.email}`)
    },
}

// Acessando Objetos.
userName.message()



// ATUALIZANDO O OBJETO.
const product = {
    name: "Teclado",
    quantity: 100,
}




// Atualiza o valor de uma propriedade.
console.log(product.quantity) // Acessando a propriedade do objeto.
product.quantity = 90
console.log(product.quantity) 


console.log(product.name)
product.name = "Mouse"
console.log(product.name)


// Notação de colchetes.
product["quantity"] = 50
console.log(product)