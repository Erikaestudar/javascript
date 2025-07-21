const book = {
    title: "Objetos Imutáveis",
    category: "javascript",
    author: {
        name: "Erika",
        email: "erika@email.com"
    }
}

// O Javascript em si não impõe restrições à modificação dos objetos.
//book.category = "HTML"


// Congela o objeto e impede a modificação.
Object.freeze(book)
book.category = "CSS" // não modifica.

// O Object.freeze() não impede modificações profundas em objetos aninhados (shallow freezing).
book.author.name = "Amanda"

console.log(book)

