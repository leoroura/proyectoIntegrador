const reserva = {
    nombre: '',
    telefono: '',
    fecha: '',
    hora: '',
    comensales: ''
}

// Eventos de los Inputs...
const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const fecha = document.querySelector('#fecha');
const hora = document.querySelector('#hora');
const comensales = document.querySelector('#comensales');



nombre.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);
fecha.addEventListener('input', leerTexto);
hora.addEventListener('input', leerTexto);
comensales.addEventListener('input', leerTexto);


function leerTexto(e) {

    reserva[e.target.id] = e.target.value;
    console.log(reserva);
}

const formulario = document.querySelector('.formulario-booking');
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    //Validacion
    const { nombre, telefono, fecha, hora, comensales} = reserva;

    if(nombre === '' || telefono === '' || fecha === '' || hora === '' || comensales === '') {
        alerta('Todos los campos son obligatorios');
        return;
    }

    confirmacionReserva('Su reserva fue creada con éxito');
    
})

//Alerta de validacion
function alerta(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    setTimeout(() => {
        error.remove()
    }, 3000);
}

function confirmacionReserva(mensaje) {
    const exito = document.createElement('P');
    exito.textContent = mensaje;
    exito.classList.add('confirmacion');

    formulario.appendChild(exito);

    setTimeout(() => {
        exito.remove()
    }, 3000);
}


