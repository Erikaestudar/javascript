// Substituindo e fatiando um texto.
let message = "Estou estudando os fundamentos do Javascript."

// Substituindo parte de um texto.
console.log(message.replace("os fundamentos do Javascript","Métodos de String"))

// Extraindo uma parte da string (start, end)
console.log(message.slice(0, 5))
console.log(message.slice(6, 30))

// Extraindo uma parte da string de trás para frente.
console.log(message.slice(-11))


let textWithSpace = "        Texto de exemplo      "
console.log(textWithSpace.length)

// Remove espaços em branco no início e no final da string.
console.log(textWithSpace.trim().length)