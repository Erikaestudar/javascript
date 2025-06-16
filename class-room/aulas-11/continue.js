// continue encerra (pula) a execução das instruções na iteração atual e continua a execução do loop com a próxima iteração.

for (let i = 0; i < 10; i++) {
    if ( i >= 3 && i <= 7) {
        continue
    }
    console.log(i)
}