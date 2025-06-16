// RegExr Expressões regulares.
/*
5 3 A 7 B 5 C
/ \D + / g

/ - Início do padrão.

\D - Representa qualquer caractere que não seja um dígito (0-9).

+ - Indica que o padrão \D pode aparecer uma ou mais vezes consecutivas. Portanto, \D+ procura por sequências de caracteres que não são dígitos. 

/ - Fim do padrão.

g - O modificador "global" é usado em expressões regulares para indicar que a correspondência deve ser feita em toda "STRING", não apenas na primeira ocorrência.
*/

let input = document.querySelector("input")
let form = document.querySelector("form")

/*
input.addEventListener("input", () => {
    const value = input.value

    const regex = /\D+/g

    // Match verifica o padrão.
    // Retorna o padrão encontrado na string.
    //console.log(value.match(regex))

    // Testa se atende o padrão.
    
    //const isValid = regex.test(value)
    //console.log(isValid)  
})
*/

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const value = input.value

    const regex = /\D+/g

    if (regex.test(value)) {
        console.log(value)
    } else {
        alert("Valor inválido. Digite corretamente!")
    }

    input.value = ""
    input.focus()

    /*
    // replace vai procurar o padrão e vai substituir por algo.
    const value = input.value.replace(regex, "")
    console.log(value)
    */
})