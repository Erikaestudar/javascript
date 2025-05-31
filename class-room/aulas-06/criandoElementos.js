let guests = document.querySelector("ul")

let newGuest = document.createElement("li")
// Adicionando uma classe em um elemento.
newGuest.classList.add("guest")

let guestName =document.createElement("span")

guestName.textContent = "Diego"

let guestSurname = document.createElement("span")
guestSurname.textContent = "Fernandes"

// Adiciona após o último filho.
//newGuest.append(guestName)

// Adiciona antes do primeiro filho.
//newGuest.prepend(guestSurname)

guestName.textContent = "Ada"
guestSurname.textContent = "Leon"

// newGuest.append(guestName, guestSurname)


// É mais simples que o append e aceita apenas um argumento.
newGuest.appendChild(guestName)

//guests.append(newGuest)
guests.prepend(newGuest)
console.log(newGuest)