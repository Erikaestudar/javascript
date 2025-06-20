let obj = [17]
let index = 300

/*
try {
    obj.execute()

} catch (error) {
    // Verifica se a instância de error é uma instância dessa classe TypeError.
    if (error instanceof TypeError) {
        console.log("Método indisponível!")
    }
}
*/


try {
    if (!obj.includes(17)) {
        // Passando para o construtor da classe Error, uma nova mensagem.
        throw new Error("O número 17 não está disponível.")
    }

    if (index > 99) {
        throw new RangeError("Número está fora do intervalo. Escolha um número de 0 à 99.")
    }
} catch (error) {
    // Verifica se a instância de error é uma instância dessa classe TypeError.
    if (error instanceof TypeError) {
        console.log("Método indisponível!")
    } else if (error instanceof RangeError) {
        console.log(error.message)
    } else {
        console.log("Não foi possível realizar a ação.")
    } 
}