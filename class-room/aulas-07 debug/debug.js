let input = document.querySelector("input")
let form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()

    let value  = input.value
    let hasNumberRegex = /\d+/g

    if (hasNumberRegex.test(value)) {
        alert("O texto contém número. Por favor, digite corretamente.")
    } else {
        alert("Enviado!")
    }
}