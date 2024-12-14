const button = document.querySelector("#submit");

button.addEventListener("click",(e)=>{
    const obj = prompt("Que produto você está comprando?");
    const price = Number(prompt ("Quanto custa " + obj + " que você está comprando?","" ));
    const pay = Number(prompt("Qual foi o valor que você deu para pagar " + obj + " ?",""));
        const troco = pay - price;
        if (troco < 0){
            alert ("Sinto Muito, não foi possível efetuar a compra.\nValor insuficiente!")
        }else if (obj == " " || Number(price) == price || Number(pay) == pay || troco > 0){
            alert ("Você comprou " + obj + " que custou " + "R$ " + price + ",00.\n" + "Deu R$ " + pay + ",00" + " em dinheiro e vai receber R$ " + troco + ",00 de troco.\n" + "Obrigado pela Compra, Volte Sempre!");
        }else{
            alert ("Comando inválido, Favor digitar o preço corretamente.");
    }
});
