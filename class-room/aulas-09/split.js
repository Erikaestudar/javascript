let text = "Estudar, Aprender, Praticar"

// Separar a String.
let separate = text.split(",")
console.log(separate)

let message = "Estou aprendendo Javascript"
console.log(message.split(" "))
console.log(message.split("en"))

// Unir a String.
let joined = separate.join(" - ")
console.log(joined)