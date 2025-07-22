// DeepFreeze é a imutabilidade profunda, congela recursivamente cada propriedade.
// Função recursiva é uma função que chama ela mesma, percorrendo cada propriedade para congelar ela.


const book = {
    title: "Objetos Imutáveis",
    category: "javascript",
    author: {
        name: "Erika",
        email: "erika@email.com"
    }
}


function deepFreeze(object) {
    // Obtém um array com todas as propriedades do objeto.
    const props = Reflect.ownKeys(object)
    
    // Itera sobre todas as propriedades do objeto.
    for (const prop of props) {

        // Obtém o vlor associado à propriedade atual.
        const value = object[prop]
        //console.log(value)


        // Verifica se o vlaor é um objeto ou função para continuar aplicando o deepFreeze em objetos aninhados.
        if (value && typeof value === "object" || typeof value === "function"){
            deepFreeze(value)
        }
    }

    // Retorna o objeto congelado.
    return Object.freeze(object)
}

// Chama a função para congelar o objeto com Deep Freeze (congelamento profundo).
deepFreeze(book)

book.category = "CSS"
book.author.name = "Elena"

console.log(book)