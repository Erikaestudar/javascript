let message = "Estou estudando os fundamentos do Javascript."

// Obtém a posição da palavra.
console.log(message.indexOf("estudando"))

// Quando ele não encontra retorna -1.
console.log(message.indexOf("javascript"))


// Verifica se existe a palavra na String.
console.log(message.includes("Javascript"))
console.log(message.toLowerCase().includes("Javascript"))


// Pode usar para verificar frases.
console.log(message.includes("estudando os fundamentos"))