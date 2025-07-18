// O método some() testa se ao menos um dos elementos no array passa na condição e retorna um valor Boolean (true or false).

// Exemplo de array de idades.
const ages = [15, 30, 39, 29]

// Verificando se todas as idades são maiores ou igual a 18.
const result = ages.some((age) => age < 18)
console.log(result)