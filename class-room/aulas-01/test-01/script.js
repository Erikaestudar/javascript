let form = document.querySelector("form")
let address = document.querySelector("#address")
address.focus()
let number = document.querySelector("#number")
let list = document.querySelector("ul.list")

address.addEventListener("input", () => {
    let endRegex = /\d+/g
    address.value = address.value.replace(endRegex, "")
    console.log(address.value)
})

number.addEventListener("input", () => {
    let numRegex = /\D+/g
    number.value = number.value.replace(numRegex, "")
    console.log(number.value)
})

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let newItem = document.createElement("li")
    newItem.classList.add("show-result")

    let checkbox = document.createElement("span")
    checkbox.classList.add("checkbox")

    let endWrapper = document.createElement("p")
    endWrapper.classList.add("end-wrapper")
    endWrapper.textContent = `${address.value}, Nº ${number.value}`

    let deleteBtn = document.createElement("span")
    deleteBtn.classList.add("delete")

    newItem.appendChild(checkbox)
    newItem.appendChild(endWrapper)
    newItem.appendChild(deleteBtn)

    list.appendChild(newItem)
    list.classList.add("show-result")

    newItem.addEventListener("click", () => {
        newItem.classList.toggle("checked")
    })

    deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation()
        list.removeChild(newItem)
    })

    cleanInputs()
})

function cleanInputs() {
    address.value = ""
    number.value = ""
    address.focus()
}