//offset de la navbar
// obtiene la altura de la barra de navegación
const navbarHeight = document.getElementById('navbar').offsetHeight;

// selecciona todos los enlaces que utilizan la etiqueta de anclaje
const links = document.querySelectorAll('a[href^="#"]');

// añade un evento click a cada enlace
links.forEach(link => {
  link.addEventListener('click', function(event) {
    // previene el comportamiento predeterminado del enlace
    event.preventDefault();
    
    // obtiene el objetivo del enlace (es decir, el ID del elemento)
    const target = document.querySelector(this.getAttribute('href'));
    
    // obtiene la posición del objetivo en la página
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    
    // calcula la posición final del desplazamiento, restando la altura de la barra de navegación
    const finalPosition = targetPosition - navbarHeight;
    
    // realiza el desplazamiento suave a la posición final
    window.scrollTo({
      top: finalPosition,
      behavior: 'smooth'
    });
  });
});
//

//Hidden Footer
const cardsDiv = document.getElementById('cards');
const hiddenFooter = document.getElementById('hidden');

cardsDiv.addEventListener('scroll', () => {
  if (cardsDiv.scrollTop > 0) {
    hiddenFooter.style.display = 'fixed';
  } else {
    hiddenFooter.style.display = 'none';
  }
});
//

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


