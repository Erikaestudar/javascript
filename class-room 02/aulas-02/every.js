// O método every() testa se todos os elementos do array passam na condição e retorna um valor Boolean.

// Exemplo de array de idades.
const ages = [15, 30, 39, 29]

// Verificando se todas as idades são maiores ou igual a 18.
const result = ages.every((age) => age >= 15)
console.log(result)