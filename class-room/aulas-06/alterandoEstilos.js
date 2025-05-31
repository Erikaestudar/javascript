let input = document.querySelector("#name")

// Adiciona a classe do elemento.
input.classList.add("input-error")

// Remove a classe.
input.classList.remove("input-error")
 

// Toggle é muito usado principalmente com Modal (tela menores que ficam em destaque)
// Se não tiver a classe ativa, ela adicionada. Se tem, ela remove.
input.classList.toggle("input-error")



let button = document.querySelector("button")

// Modificar as propriedades　CSS do elemento.
button.style.backgroundColor = "red"