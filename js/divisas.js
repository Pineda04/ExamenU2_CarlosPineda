// Para el acceso a los elementos del html
const input = document.getElementById('amount')
const btnConvertir = document.getElementById('convert-btn')
const resultado = document.getElementById('result-container')

const opciones = document.getElementById('from')
const opciones2 = document.getElementById('to')

let to = opciones2.value
let equivalente
let resul 
let dinero = input.value

btnConvertir.addEventListener('change', e => {
    
    switch(opciones.value){
        case 'usd':
            switch (to){
                case 'usd':
                    equivalente = 1
                    break;
                case 'lps':
                    equivalente = 24.72
                    break
                case 'eur':
                    equivalente = 0,92
                    break
            }
            break;
        case 'eur':
            break;
        case 'lps':
            break;          
    }

    resul = dinero * equivalente
    resultado.value = resul
})


