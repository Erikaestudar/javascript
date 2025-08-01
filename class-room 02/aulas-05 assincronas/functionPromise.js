/* 
    Quando uma função assíncrona é chamada, ela retorna uma PROMISE.

    Quando a função assíncrona retorna um valor, a PROMISE será RESOLVIDA com o valor retornado.

    Quando a função assíncrona lança uma exceção ou algum valor, a PROMISE será REJEITADA com o valor lançado.
*/

// Função que retorna um Promise.
function asyncFunction() {
    return new Promise((resolve, reject) => {
       // Simula uma operação assíncrona.
        setTimeout(() => {true

            if (isSuccess) {
                resolve("A operação foi concluída com sucesso!")
            } else {
                reject("Algo deu errado!")
            }
        },3000) // Simula uma operação que leva 3 segundos.
    })
}

// Visualizando que o retorno é uma promise.
//console.log(asyncFunction())

console.log("Executando função assíncrona...")

/*
const response = asyncFunction()
console.log(response)
*/

asyncFunction().then((response) => {
    console.log("Sucesso:", response)
}).catch((error) => {
    console.log("Erro:", error)
}).finally(() => {
    console.log("Fim da execução.")
})
