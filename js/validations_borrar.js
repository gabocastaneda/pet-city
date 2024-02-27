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


function buscar() {
    correo = document.getElementById("correo").value;
    
    if (correo.length == 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingrese un correo registrado",
        });
    }
    else {
        document.getElementById("datos").style.display = 'block';
    }

}


function confirmar_usuario() {
    Swal.fire({
        title: "¿Estás seguro de borrar este usuario?",
        text: "Las mascotas se eliminarán junto con el usuario. No podrás deshacer esta acción",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, borrar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
}

function confirmar_mascota() {
    Swal.fire({
        title: "¿Estás seguro de borrar esta mascota?",
        text: "No podrás deshacer esta acción",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, borrar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
}
