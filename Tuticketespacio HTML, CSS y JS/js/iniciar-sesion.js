const formulario = document.getElementById('formulario');

// Añadimos un evento al formulario para escuchar cuando se envíe
formulario.addEventListener('submit', function (event) {
    // Prevenimos el envío del formulario (para pruebas)
    event.preventDefault();

    // Obtenemos los valores de los campos
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validaciones personalizadas, si es que algunos de esos campos están vacíos
    if (!email || !password) {
        Swal.fire("¡Faltan Datos!", "¡Ups, no rellenaste todos los campos requeridos!", "error");
        return;
    }

    if (email == 'admin@gmail.com' && password == 'admin') {
        // Mostramos una alerta
        Swal.fire({
            title: "Inicio Correcto!",
            text: "Credenciales válidas!",
            icon: "success"
        });
    } else {
        Swal.fire({
            title: "Inicio Incorrecto!",
            text: "Credenciales Inválidas!",
            icon: "error"
        });
    }
});

$(document).ready(function () {
    $(".imagen-concierto").hover(
        function () {
            $(this).css("transform", "scale(0.98)");
        },
        function () {
            $(this).css("transform", "scale(1)");
        }
    )
    $(".iniciar-sesion").hover(
        function () {
            $(this).css("background-color", "#578FCA");
        },
        function () {
            $(this).css("background-color", "#F6F5F2");
        }
    )
})