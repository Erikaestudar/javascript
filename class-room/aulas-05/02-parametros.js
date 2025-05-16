// Parâmetros é a variável (escopo da função)
function message(username) {
    console.log("Olá", username)
}

// Argumento é o valor que passado para a função
message("Rodrigo")
message("Edson")



function sum(a, b) {
    console.log(a + b)
}

sum(12, 22)
sum(11, 99)


function joinText(text1, text2, text3) {
    console.log(text1, text2, text3)
}
// Passando apenas um valor, os outros Parâmetros ficaram "undefined"
joinText("erika")


// Definindo um valor (argumento) padrão
function joinTexts(text1, text2 = "", text3 = "") {
    console.log(text1, text2, text3)
}

joinTexts("ZX")