    const submitButton1 = document.querySelector("#submit-button1");
    const submitButton2 = document.querySelector("#submit-button2");
    const submitButton3 = document.querySelector("#submit-button3");

    const result = ["Você clicou no Primeiro Botão! ", "Você clicou no Segundo Botão! ", "Você clicou no Terceiro Botão! "];

    const results = document.querySelector(".answer");
    
    submitButton1.addEventListener("click", (event)=>{
        event.preventDefault();
        //return alert ("Você clicou no Primeiro Botão! ");

        const btn1Value = submitButton1.value;
        const r1 = result[0];
            results.innerHTML = r1;
            //console.log(r1);

        setTimeout(()=>{
            results.textContent="";
            results.classList="";
        },3000);
        return;
    });

    submitButton2.addEventListener("click", (event)=>{
        event.preventDefault();
        //return alert ("Você clicou no Segundo Botão! ");

        const btn2Value = submitButton2.value;
        const r2 = result[1];
            results.innerHTML = r2;

        setTimeout(()=>{
            results.textContent="";
            results.classList="";
        },3000);
        return;
    });

    submitButton3.addEventListener("click", (event)=>{
        event.preventDefault();
        //return alert ("Você clicou no Terceiro Botão! ");

        const btn3Value = submitButton3.value;
        const r3 = result[2];
            results.innerHTML = r3;

        setTimeout(()=>{
            results.textContent="";
            results.classList="";
        },3000);
        return;
    });