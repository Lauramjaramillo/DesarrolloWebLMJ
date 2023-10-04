let button2 = document.getElementById("button2");
let primer_nombre = document.getElementById("inputname1")
let segundo_nombre = document.getElementById("inputname2")
let primer_apellido = document.getElementById("inputlast1")
let segundo_apellido = document.getElementById("inputlast2")
let email = document.getElementById("inputemail")
let direccion = document.getElementById("inputAddress1")
let contraseña = document.getElementById("inputpassword")
let contraseña_confirmacion = document.getElementById("inputpassword2")


const emailValido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}




button2.addEventListener("click", clickboton);

function clickboton() {
  if (primer_nombre.value === "") {
    alert("Por favor, escribe tu primer nombre.");
    primer_nombre.focus();
   
  } 
  else if (primer_apellido.value === "") {
    alert("Por favor, escribe tu primer apellido.");
    primer_apellido.focus();
  }
  else if (direccion.value === "") {
    alert("Por favor, escribe tu direccion.");
    direccion.focus();
  }
  else if (contraseña.value === "") {
    alert("Por favor, escribe una contraseña");
    contraseña.focus();
  }

    else if (contraseña.value.length < 8) {
    alert("La longitud de la contraseña es menor a 8");
    contraseña.focus();
  }
  else if (contraseña_confirmacion.value === "") {
    alert("Por favor, escribe una confirmación de contraseña");
    contraseña_confirmacion.focus();
  }

    else if (contraseña_confirmacion.value.length < 8) {
    alert("La longitud de la confirmación de la contraseña es menor a 8");
    contraseña_confirmacion.focus();
  }

  else if (contraseña.value != contraseña_confirmacion.value) {
    alert("Las contraseñas no coinciden");
    contraseña.focus();
  }
  else if (email.value === "") {
    alert("Por favor, ingrese un correo electrónico");
    email.focus();
  }
  else if (!emailValido(email.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    email.focus();
  }

  else {
    alert("Bienvenido")
  }

}