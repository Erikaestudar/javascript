/*

function show() {
    console.log("Hello")
}

show()



// Função anônima (função que não possui nome)
const showMessage1 = function() {
    return "Hello, Erika"
}
console.log(showMessage1)    

*/

// Arrow Function (função de seta).
const showMessage1 = () => {
    console.log("Hello")
}

console.log(showMessage1)  
showMessage1()

const showMessage2 = (username = "", email = "") => {
    console.log("Hi, ", username)
    console.log(`Hey, ${username}. Seu e-mail é: ${email} `)
}

showMessage2("Igor")
showMessage2("Tom", "tom@email.com")