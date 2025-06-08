let oneBtn = document.querySelector("#firstBtn")
let count = document.querySelector(".counter")
let minus = document.querySelector("#img-01")
let plus = document.querySelector("#img-02")

let counter = 1

function updateCounter() {
    count.textContent = counter
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
    updateCounter()
})

minus.addEventListener("click", (event) => {
    event.stopPropagation()
    if (counter >= 1) {
        minusMath()
    } else {
        oneBtn.classList.remove("checked")
        count.textContent = ""
    }
})

plus.addEventListener("click", (event) => {
    event.stopPropagation()
    plusMath()
})

