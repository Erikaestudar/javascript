// Um Elemento do Array pode ser de qualquer tipo de dado.
let myArray = [
    "Um texto",
    10,
    true,
    function() {
        console.log("Função dentro do Array!")   
    },
    {
        name: "Erika",
        email: "erika@email.com"
    }
]

// Boolean.
console.log(myArray[2])

// Executando a função.
myArray[3]()

// Objeto
console.log(myArray[4].name, myArray[4].email)