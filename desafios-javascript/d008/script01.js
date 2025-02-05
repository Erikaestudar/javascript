let por = document.querySelector('input#ifdes');
let button = document.getElementById('button');
let res = document.getElementById('res');

// Adiciona o evento ao botão logo no início
button.addEventListener('click', calcular);

let pro = prompt('Qual é o produto que você está comprando?');

// Verifica se o nome do produto está vazio
if (!pro || pro.trim() === "") {
    alert('[ERRO] Digite o nome do produto corretamente.');
    marcarErro();
} else {
    pro = pro.trim().toUpperCase();
    let price = Number(prompt(`Qual é o preço de ${pro}?`));

    // Verifica se o preço é válido
    if (isNaN(price) || price <= 0) {
        alert('[ERRO] Digite um preço válido para o produto.');
        marcarErro();
    } else {
        por.focus();
    }

    function calcular() {
        let des = Number(por.value);

        if (por.value.trim() === "" || isNaN(des)) {
            alert('[ERRO] Digite um valor válido para o desconto!');
            blockInput(); // Bloqueia o input se der erro
        } else {
            if (des >= 1 && des <= 100) {
                let valorDes = (price * des) / 100;
                let finPrice = price - valorDes;

                res.innerHTML = `
                    <h1>Calculando desconto de ${des}% para ${pro}.</h1>
                    <p>O preço original era <strong>${price.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>.</p>
                    <p>Você acaba de ganhar <strong>${valorDes.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> de desconto (-${des}%).</p>
                    <p>Você vai pagar <strong>${finPrice.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> no produto ${pro}.</p>`;

                disBlockInput(); // Libera o input se o cálculo for bem-sucedido

                por.value = "";
                por.focus();

                // Evita adicionar vários botões "Limpar"
                if (!document.getElementById('btn-limpar')) {
                    let resBtn = document.createElement('input');
                    resBtn.setAttribute('type', 'button');
                    resBtn.setAttribute('value', 'Limpar');
                    resBtn.setAttribute('id', 'btn-limpar');
                    resBtn.addEventListener('click', limpar);
                    res.appendChild(resBtn);
                }

            } else if (des === 0) {
                res.innerHTML = `
                    <p>Sinto Muito. Esse produto não está na promoção!</p>
                    <p>Você vai pagar o preço integral de <strong>${price.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> pelo ${pro}.</p>`;

                por.value = "";
                por.focus();
            } else {
                alert('[ERRO] O valor do desconto deve estar entre 1% e 100%.');
                por.value = "";
                por.focus();
            }
        }
    }
}

// Função para limpar o resultado sem recarregar a página
function limpar() {
    res.innerHTML = "";
    por.value = "";
    por.focus();
}

// Função para indicar erro visualmente e bloquear o input
function marcarErro() {
    button.style.backgroundColor = 'red';
    button.style.border = '3px solid red';
    blockInput(); 

    // Reseta o erro após 2 sec.
    setTimeout(() => {
        button.style.backgroundColor = '';
        button.style.border = '';
    }, 2000);
}

// Função para bloquear o input
function blockInput() {
    por.disabled = true;
}

// Função para desbloquear o input
function disBlockInput() {
    por.disabled = false;
}
