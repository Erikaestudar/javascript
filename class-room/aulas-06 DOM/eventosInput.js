let input = document.querySelector("input")

// keydown - quando uma tecla é pressionada (captura tudo, incluindo CTRL, SHIFT, etc.)
/* 
input.addEventListener("keydown", (event) => {
    console.log(event.key)
})
*/

// keypress - quando uma tecla do tipo caractere é pressionada (letras, números, pontos, etc.)
input.addEventListener("keypress", (event) => {
    console.log(event.key)
})


// Evento é acionado quando muda a propriedade ex: do input muda pro button com a tecla TAB.
/*
input.onchange = () => {
    console.log("O INPUT MUDOU!")
}

OU
*/

input.onchange = () => {
    inputChange()
}

function inputChange() {
    console.log("O INPUT MUDOU!")
}