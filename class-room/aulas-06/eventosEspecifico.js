let ul = document.querySelector("ul")

ul.addEventListener("scroll", () => {
    // console.log(ul.scrollTop)

    if (ul.scrollTop > 300) {
        //console.log("FIM DA LISTA")

        // Dentro do OBJETO usasse ,
        ul.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
})

let button = document.querySelector("button")

button.addEventListener("click", (event) => {
    event.preventDefault()

    console.log("CLICOU!")
})