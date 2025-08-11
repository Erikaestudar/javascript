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

fetch("http://localhost:3333/products").then((response) => response.json()).then((data) => console.log(data))