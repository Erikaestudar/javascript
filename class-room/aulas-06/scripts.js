// Visualizar o conteúdo do document.
// console.log(document)

// Obter o title da página.
// console.log(document.title)

// Acessar o elemento pelo ID.
const guest = document.getElementById("guest-2")
console.log(guest)

// Mostra todas as propriedades do objeto.
console.dir(guest)

// Acessar elemento com class.
const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass)

// Exibir o primeiro elemento da lista.
console.log(guestsByClass.item(0))
console.log(guestByClass[1])

// Selecionar lista elementos pela tag
const guestsTag = document.getElementsByTagName("li")
console.log(guestsTag)

