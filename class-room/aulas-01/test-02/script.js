let oneBtn = document.querySelector("#firstBtn")
let count = document.querySelector(".counter")
let minus = document.querySelector("#img-01")
let plus = document.querySelector("#img-02")
let total = document.querySelector(".total")

let counter = 1

function updateCounter() {
    count.textContent = counter
    total.textContent = counter
}

function plusMath() {
    counter++
    updateCounter()
}

function minusMath() {
    if (counter > 0) {
        counter--
        updateCounter()
    }
}

oneBtn.addEventListener("click", (event) => {
    event.preventDefault()

    oneBtn.classList.add("checked")

    if (counter === 0) {
        counter = 1 // Reinicia o contador quando ele estava zerado
    }
    updateCounter()
})

minus.addEventListener("click", (event) => {
    event.stopPropagation()
    if (counter >= 1) {
        minusMath()
    } 
    
    if (counter === 0) {
        oneBtn.classList.remove("checked")
        count.textContent = ""
        total.textContent = "0"
    }
})

plus.addEventListener("click", (event) => {
    event.stopPropagation()
    plusMath()
})


// CONFIGURAÇÃO DO FORM REPETIÇÕES E CRIAÇÃO DE ELEMENTOS

let form = document.querySelector("form")
let button = document.querySelector("#formBtn")

let list = document.querySelector("ol.list")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    for (let i = 1; i <= 2; i++) {
        let newItem = document.createElement("li")
        newItem.classList.add("show-result")
        newItem.textContent = `${i}`

        let del = document.createElement("span")
        del.classList.add("del")

        newItem.appendChild(del)

        list.appendChild(newItem)

        del.addEventListener("click", (event) => {
            event.stopPropagation()

            list.removeChild(newItem)
        })
    }
})