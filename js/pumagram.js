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
let dioClick = true

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
    if(dioClick){
        btnLike.textContent = 'No me gusta'
        contadorLikes.textContent = aumentarLikes()
        console.log('activo');
        dioClick = false
    }else{
        btnLike.textContent = 'Me gusta'
        contadorLikes.textContent = reducirLikes()
        dioClick = true
        console.log('no activo');
    }
})

// Click en no me gusta
// btnDislike.addEventListener('click', e => {
//     contadorLikes.textContent = reducirLikes()
// })

// Podia haber dejado el btnDislike porque funcionaba, pero como el ejercicio decia que tenia que 
// cambiar el texto del boton me gusta mejor quite este boton y le aplique la misma logica de la imagen

// Doble click en la imagen
imagen.addEventListener('dblclick', e => {
    if(dioClick){
        btnLike.textContent = 'No me gusta'
        contadorLikes.textContent = aumentarLikes()
        console.log('activo');
        dioClick = false
    }else{
        btnLike.textContent = 'Me gusta'
        contadorLikes.textContent = reducirLikes()
        dioClick = true
        console.log('no activo');
    }
})

// Agregar comentarios
btnAgregar.addEventListener('click', e => {
    e.preventDefault()
    const contenido = input.value
  
    if(contenido.trim() !== ''){
      comentarios.push(contenido)
      localStorage.setItem('comentarios', JSON.stringify(comentarios));
    }
  
    comentario.innerHTML = comentarios
    limpiar()
  })


function limpiar(){
    input.value = ''
}

// Local storage
window.addEventListener('load', () => {
    const cantidadLikes = localStorage.getItem('ultimoLike')
    const comentariosGuardar = localStorage.getItem('comentario')
    if (cantidadLikes) {
        ultimoLike = JSON.parse(cantidadLikes);
        contadorLikes.innerHTML = ultimoLike

        comentarios = JSON.parse(comentariosGuardar)
        comentario.innerHTML = comentarios
    }
});