const product = {
    description: "Teclado",
    price: 150
}

const {description, price} = product
console.log("Descrição:", description)
console.log("Preço：R$", price)

/*
function newProduct(description, price) {
    console.log("### NOVO PRODUTO ###")
    console.log("Descrição:", description)
    console.log("Preço：R$", price)
}
newProduct("Mouse", 70)

*/


function newProduct({price, description}) {
    console.log("### NOVO PRODUTO ###")
    console.log("Descrição:", description)
    console.log("Preço：R$", price)
}

newProduct({
    description: "Monitor",
    price: 350
})