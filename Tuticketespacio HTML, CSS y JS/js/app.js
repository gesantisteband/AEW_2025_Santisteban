const formularioregistro = document.getElementById("formulario-compra");
const mensajeserror = document.getElementById("mensajeserror");

formularioregistro.addEventListener("submit", function(event){
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const evento = document.getElementById("evento").value;
    const contrasena = document.getElementById("contrasena").value;
    mensajeserror.innerHTML= "";
    if( !nombre.trim() ) {
        mostrarError("El nombre de usuario es obligatorio.");
        return;
    }
    if ( !correo.trim() || !esCorreoValido(correo) ) {
        mostrarError("Por favor ingresar un correo válido.")
        return;
    }
    if ( !evento.trim() ) {
        mostrarError("El evento es obligatorio")
        return;
    }
    if ( !contrasena.trim() || !esContrasenaCorrecta(contrasena)) {
        mostrarError("La contraseña debe tener mínimo 8 caracteres y debe haber letras minúsculas, mayúsculas, número y símbolo.")
        return;
    }
    alert("El registro es satisfactorio.");
    formularioregistro.reset();
})
function mostrarError( mensaje ) {
    const mensajeerror = document.createElement("div");
    mensajeerror.className = "error";
    mensajeerror.textContent = mensaje;
    mensajeserror.appendChild(mensajeerror);
}
function esCorreoValido( correo ) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}
function esContrasenaCorrecta( contrasena ) {
    let patron = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return patron.test(contrasena);
}




