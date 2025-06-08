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
        first_name: "Erika",
        surname: "Sugawara"
    },
    address: {
        street: "Rua Manoel",
        number: 19,
        city: "São Paulo", 
        postal_code: "19068-700"
    },
    message: () => {
        console.log("hello! world")
    }
}

console.log(user)