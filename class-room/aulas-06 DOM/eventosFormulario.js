let form = document.querySelector("form")

// Você pode colocar diretamente o evento que você quer lidar, outros ex: onclick.
// O onsubmit só executa/ captura o último listener que você criou.
form.onsubmit = (event) => {
    event.preventDefault()

    console.log("Você fez submit no formulário. #1")
} 

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Você fez submit no formulário. #2")
} 


// Com addEventListener ele irá executar todas as aplicações.
form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Você fez submit no formulário. #3")
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Você fez submit no formulário. #4")
})