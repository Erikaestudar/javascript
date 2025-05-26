/*

function show() {
    console.log("Hello")
}

show()
*/


// Função anônima (função que não possui nome)
const showMessage1 = function() {
    return "Hello, Erika"
}
console.log(showMessage1)
console.log(showMessage1()) // executa a função


// Passando parâmetro
const showMessage2 = function(name) {
    return "Hi, " + name
}

console.log(showMessage2("Maria"))

const showMessage3 = function(message = "", name = "") {
    return message + name
}

console.log(showMessage3("Hi, How are you?", " Edson"))