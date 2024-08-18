const button = document.querySelector("#sub");

button.addEventListener("click",(e)=>{
    const number = Number(window.prompt ("Digite um número"));
    const alfabeto = [" ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    const x = number;
    const letra = alfabeto[x];

    if (number < 1 || number > 26){
        window.alert("Digite um número de 1 à 26.")
    }else if(number < 27 || Number(number) == number){
        window.alert("O número " + number + " é a letra " + letra + "." )    
    }else{
        window.alert("Digite um número de 1 à 26.")    
        }
    
});