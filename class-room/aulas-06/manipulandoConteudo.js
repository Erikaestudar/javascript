let guest1 = document.querySelector("#guest-1")

// Retorna o conteúdo como texto.
console.log(guest1.textContent) // Retorna o conteúdo visível e oculto.
console.log(guest1.innerText) // Retorna somente o conteúdo visível.
console.log(guest1.innerHTML) // Retorna o HTML como texto.

// guest1.textContent = "João"

let guest2 = document.querySelector("#guest-2 span")
guest2.textContent = "Maria"
console.log(guest2)


console.log(guest1.textContent)

