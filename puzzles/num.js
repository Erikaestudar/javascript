let button = document.querySelector("#sub");

button.addEventListener("click",(e)=>{
    let number = Number(window.prompt ("Digite um número"));
    let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    if (isNaN(number) || number < 1 || number > 26) {
        window.alert("Digite um número de 1 à 26.")
    } else {
        // Pegando a letra correspondente (ajustando o índice subtraindo 1)
        let letra = alfabeto[number - 1]
        window.alert("O número " + number + " é a letra " + letra + "." )    
    }
});