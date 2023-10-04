let button = document.getElementById("button");
let usuario = document.getElementById("usuario")
let contraseña = document.getElementById("contraseña")





button.addEventListener("click", clickboton);

function clickboton() {
  if (usuario.value === "") {
    alert("Por favor, escribe tu nombre de usuario.");
    usuario.focus();
   
  } 
  else if (contraseña.value === "") {
    alert("Escribe una contraseña");
    contraseña.focus();
}

    else if (contraseña.value.length < 8) {
    alert("La longitud de la contraseña es menor a 8");
    contraseña.focus();
}

else {
    alert("Bienvenido")
}

}

