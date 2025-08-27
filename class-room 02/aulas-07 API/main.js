/* 
    No server.json você adiciona objetos ou arrays.
    Abra o terminal e digite: npm run server para descobrir a porta de saida, ela pode variar em 3000 ou 3333 se caso você configurou.
    No navegador digite - localhost:3333/products
*/

//Deixando assim volta uma promise
/*
const response = fetch("http://localhost:3333/products")
console.log(response)
*/


/* 
fetch("http://localhost:3333/products").then((response) => {
    console.log(response)
})
*/

// Utilizando o fetch com then.
/*
fetch("http://localhost:3333/products").then((response) => response.json()).then((data) => console.log(data))
*/


// Utilizando o fetch com async/await.
async function fetchProducts() {
    const response = await fetch("http://localhost:3333/products")
    const data = await response.json()
    console.log(data)
}
//fetchProducts()


async function fetchProductById(id) {
    const response = await fetch(`http://localhost:3333/products/${id}`)
    const data = await response.json()
    console.log(data)
}

//fetchProductById(1)
//fetchProductById("3")

const productName = document.getElementById("name")
const productPrice = document.getElementById("price")
const form = document.getElementsByTagName("form")

addEventListener("submit", async (event) => {
    event.preventDefault()
    
    await fetch("http://localhost:3333/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // É necessário pegar o objeto e passar para texto.
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            name: productName.value,
            price: productPrice.value,
        }),
    })

    await fetchProducts()
})

