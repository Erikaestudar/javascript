// Visualiza o conteúdo do document.
// console.log(document)

// Obtém o title da página.
// console.log(document.title)

// Acessa o elemento pelo ID.
const guest = document.getElementById("guest-2")
console.log(guest)

// Mostra todas as propriedades do objeto.
console.dir(guest)

// Acessar elemento com class.
const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass)

// Exibir o primeiro elemento da lista.
console.log(guestsByClass.item(0))
console.log(guestsByClass[1])

// Selecionar lista de elementos pela tag
const guestsTag = document.getElementsByTagName("li")
console.log(guestsTag)


// Utilizando o querySelector.

// Acessa o elemento pelo seletor ID.
const guest01 = document.querySelector("#guest-2")
console.log(guest01)

// Retorna todos os elementos encontrados pelo query
const guest02 = document.querySelectorAll(".guest")
console.log(guest02)