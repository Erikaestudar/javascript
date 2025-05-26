
let button = document.querySelector(".generalBtn")
let counterSpan = document.querySelector(".counter")
let totalSpan = document.querySelector(".total")

let count = 0

button.addEventListener("click", (e) => {

    if (button.classList.contains("checked")) {
        if (e.target.id === "img-02") {
            count++
        } else if (e.target.id === "img-01") {
            if (count > 0) {
            count--
            }  
        }
        
        counterSpan.textContent = count
        totalSpan.textContent = count

        if (count === 0) {
            button.classList.remove("checked")
            button.classList.add("default")
            counterSpan.textContent = ""
        }

    } else {
        button.classList.add("checked")
        button.classList.remove("default")
        count = 1
        counterSpan.textContent = count
        totalSpan.textContent = count
    }
})




// TESTE 02
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".geralBtn")
    buttons.classList.add("checked")
    buttons.classList.remove("default")
})
