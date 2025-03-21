let button = document.querySelector('#button')
let res = document.querySelector('#res')

button.addEventListener('click', verificar)



function verificar() {

    let now = new Date()
    let hour = now.getHours()
    let dayWeek = now.getDay()

    switch(dayWeek) {
        case 0:
            res.innerHTML += 'Domingo'
            break
        
        case 1:
            res.innerHTML += 'Segunda-Feira'
            break
    
        case 2:
            res.innerHTML += 'Terça-Feira'
            break
    
        case 3:
            res.innerHTML += 'Quarta-Feira'
            break
    
        case 4:
            res.innerHTML += 'Quinta-Feira'
            break
    
        case 5:
            res.innerHTML += 'Sexta-Feira'
            break
    
        case 6:
            res.innerHTML += 'Sábado'
            break
    }

            res.innerHTML = `
            <p>O que eu recebi do sistema foi ${dayWeek}</p>
            `
        
    
}



