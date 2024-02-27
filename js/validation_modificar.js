function buscarUsuario() {//funcion para buscar en la BD
    correo = document.getElementById("correo_usuario").value;

    if (correo.length == 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingrese un correo registrado",
        });
    }
    else {
        document.getElementById("formulario_modifica_usuario").style.display = 'block';
    }

}

function buscarMascota() {
    correo = document.getElementById("correo_mascota").value;
    nombre = document.getElementById("nombre_mascota").value;

    if (correo.length == 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingrese un correo registrado",
        });
    } else if (nombre.length == 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingrese el nombre de la mascota",
        });
    }
    else {
        document.getElementById("formulario_modifica_mascota").style.display = "block";
    }

}
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

function confirmar_mascota() {
    let hasError = false;
    var hoy = new Date();
    var opcion = document.getElementById("fecha").value;
    var mes = hoy.getMonth() + 1; //obteniendo mes
    var dia = hoy.getDate(); //obteniendo dia
    var anio = hoy.getFullYear(); //obteniendo año
    if (dia < 10)
        dia = '0' + dia; //agrega cero si el menor de 10
    if (mes < 10)
        mes = '0' + mes //agrega cero si el menor de 10
    var hoy_f = anio + "-" + mes + "-" + dia;

    if (!document.querySelector('input[name="convivencia"]:checked')) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Seleccione una opción de convivencia",
        });
        hasError = true;
    }
    if (!document.querySelector('input[name="desparacitado"]:checked')) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Seleccione una opción de desparacitación",
        });
        hasError = true;
    }
    if (opcion < hoy_f) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Seleccione una fecha posterior a hoy",
        });
        hasError = true;
    }
    var fin = document.getElementById("fecha_fin").value;
    if (fin < opcion) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Seleccione una fecha posterior a la de reserva",
        });
        hasError = true;
    }
    if (hasError == false) {
        Swal.fire({
            title: "Buen trabajo",
            icon: "success",
            text: "Datos modificados con éxito",
            showCloseButton: false,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: 'Listo',
        }).then((result) => {
            if (result.isConfirmed) {
                window.open("modificar.html", '_self');
            }
        });
    }
}

function habilitar(sel) {
    if (sel.value == "otro") {
        document.getElementById("especie_mascota_otro").disabled = false;
    } else {
        document.getElementById("especie_mascota_otro").disabled = true;
    }
}

function confirmar_usuario() {
    Swal.fire({
        title: "Buen trabajo",
        icon: "success",
        text: "Datos modificados con éxito",
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Listo',
    }).then((result) => {
        if (result.isConfirmed) {
            window.open("modificar.html", '_self');
        }
    });
}
