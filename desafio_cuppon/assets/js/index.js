

// Validando formulario 

const nombre = document.querySelector("[data-nombre]");
const email = document.querySelector("[data-email]");


nombre.addEventListener('blur', (evento) => {
    validandoNombre(evento.target);
})
//  validando Nombre
function validandoNombre(input) {
    nombredata = nombre.value;
    textoDividido = nombredata.split("");
    numeroCaracteres = textoDividido.length;
    let mensajeNombre = "";

    if (numeroCaracteres > 40) {
        mensajeNombre = "error el NOMBRE no cumple con lo requerido, máximo 40 caracteres";

    } else {
        console.log(nombredata);
    }
    input.setCustomValidity(mensajeNombre);

}

// Validando E-mail
email.addEventListener('blur', (evento) => {
    validandoEmail(evento.target);
})

function validandoEmail(input) {
    mensajedata = email.value;
    mensajeDividido = mensajedata.split("");
    mensajeCaracteres = mensajeDividido.length;

    let mensajeText = "";
    if (mensajeCaracteres > 40) {

        mensajeText = "error, el CORREO no cumple con lo requerido, maximo 120 caracteres";

    } else {
        console.log(mensajedata);
    }
    input.setCustomValidity(mensajeText);
}

// enviando mensaje:

const enviarMensaje = document.querySelector("[data-btn]");


enviarMensaje.addEventListener('click', (evento) => {
    evento.preventDefault();

    if (validandoNombre);
    if (validandoEmail);   
    
    return alert("Mensaje enviado con exito");   
       
});










