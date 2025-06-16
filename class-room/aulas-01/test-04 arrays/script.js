let form = document.querySelector("form")
let newTask = document.querySelector("input#task")

let list = document.querySelector(".list")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("ok")
})
