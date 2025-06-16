// Efeito Hosting, ela é içada antes mesmo da função ser declarada
showMessage("Olá, Erika")

function showMessage(message) {
    console.log(message)
    endLine()

    function endLine() {
        console.log("-------")
    }
}

showMessage("Hello, World")

// Não existe nesse escopo, ela não irá funcionar.
//endLine()