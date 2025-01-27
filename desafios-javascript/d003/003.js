const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", (event)=> {
    const num = Number (prompt ("Digite um número inteiro", ""));
    const add = num + 1;
    const sub = num - 1;
    
    // Validar apenas números inteiros
    if ( Number.parseInt(num) == num) { 
    alert ("Você digitou o número: " + num + "!\n" + "Seu Antecessor é: " + sub + "!\n" + "Seu Sucessor é: " + add + "!");
    } else {    
    alert ("Esse comando não é válido!\nFavor digitar um número inteiro!")
    }
});