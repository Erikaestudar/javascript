/* 
    OPTIONAL CHAINING (?.) - encadeamento opcional. Se a propriedade ou função chamada é nullish (null or undefined), a expressão retorna undefined em vez de gerar um erro.

    Útil ao explorar o conteúdo de um objeto quando não existe garantia da existência de determinadas propriedades obrigatórias.
*/

const user = {
    id: 1,
    name: "Erika",
    /*
    address: {
        street: "Avenida Brasil",
        city: "São Paulo",
        geo: {
            latitude: 47.808,
            longitude: 17.5674,
        },
    },

    message: function() {
        console.log(`Hi, ${this.name}`)
    }
    */
}

// Usando o optional chaining, ele retorna undefined ou no caso da função ele nem executa.
console.log(user?.address)
console.log(user?.address?.city)

user.message?.()
