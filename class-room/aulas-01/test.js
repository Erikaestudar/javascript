
    let button = document.querySelector(".generalBtn")
    let counterSpan = document.querySelector(".counter")
    let totalSpan = document.querySelector(".total")

    let count = 0

    button.addEventListener("click", () => {
        button.classList.toggle("checked")
        button.classList.toggle("default")
    })
    
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
            }
        }
    })

