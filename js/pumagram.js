// Acceder al boton like 
const btnLike = document.querySelector('.like-btn')

// Acceder al boton dislike
const btnDislike = document.querySelector('.dislike-btn')

// Acceder al contador de likes
const contadorLikes = document.querySelector('.like-count')

// Acceder a la imagen
const imagen = document.querySelector('.post-image')

// Btn para agregar comentario 
const btnAgregar = document.querySelector('.add-comment-btn')

// Input del texto
const input = document.querySelector('.comment-input')

let comentarios = []

// comentarios
const comentario = document.querySelector('.comments-container')

// Almacenar la cantidad de likes actuales
function aumentarLikes(){
    let ultimoLike = obtenerLikes()
    ultimoLike++
    localStorage.setItem('ultimoLike', ultimoLike);
    
    return ultimoLike
}

// decrementar la cantidad de likes actuales
function reducirLikes(){
    let ultimoLike = aumentarLikes()
    ultimoLike--
    localStorage.setItem('ultimoLike', ultimoLike);
    return ultimoLike
}

function obtenerLikes(){
    const ultimoLike = 0;
    return ultimoLike
}

// Click en me gusta 
btnLike.addEventListener('click', e => {
    contadorLikes.textContent = aumentarLikes()
})

// Click en no me gusta
btnDislike.addEventListener('click', e => {
    contadorLikes.textContent = reducirLikes()
})

// Doble click en la imagen
imagen.addEventListener('dblclick', e => {
    contadorLikes.textContent = aumentarLikes()
})

// Agregar comentarios
btnAgregar.addEventListener('click', e => {
    e.preventDefault()
    const contenido = input.value

    if(contenido.trim() !== ''){
        comentarios.push(contenido)
    }

    comentario.innerHTML = comentarios
    console.log(comentarios);
    limpiar()
})


function limpiar(){
    input.value = ''
}

// Local storage
window.addEventListener('load', () => {
    const cantidadLikes = localStorage.getItem('ultimoLike')
    if (cantidadLikes) {
        ultimoLike = JSON.parse(cantidadLikes);
    }
});