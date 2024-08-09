const button = document.querySelector("#sub");

button.addEventListener("click",(e)=>{
    const name = prompt ("Qual é seu nome?");
    const age = Number(prompt ("Olá " + name + "!" + " Quantos anos você tem?",""));

    if (name == " " || Number(age) == age){
        alert ("Acabei de conhecer " + name + "," + " que tem " + age + " anos de idade.")
    }else{
        alert ("Acabei de conhecer " + name + "," + " cuja a idade deixaremos no anominato.")
    };
});