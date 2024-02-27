// Habilitar si es otra especie
function habilitar(sel) {
  if (sel.value == "otro") {
    document.getElementById("especie_mascota_otro").disabled = false;
  } else {
    document.getElementById("especie_mascota_otro").disabled = true;
  }
}
// Validacion campos llenos
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
//verificar fechas de reservaciones

function confirmar(){
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
      text:"Cliente registrado con exito",
      showCloseButton: false,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Listo",
      cancelButtonText: "Otra mascota"
    }).then((result) => {
      if (result.isConfirmed) {
        window.open("index.html", '_self');
      } else {
        window.open("alta_otra_mascota.html", '_self');
      }
    });
  }
}