const $submit = document.getElementById("submit"),
    $password = document.getElementById("password"),
    $username = document.getElementById("username"),
    $visible = document.getElementById("visible");


//JQuery funcion abrir wallet con credencialesssss

$(document).ready(function() {
  $('#login').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();

    // Verificar las credenciales
    if (username === 'admin' && password === '12345') {
      // Credenciales válidas, redirigir a la pantalla de wallet
      window.location.href = '../wallet/menu.html';
    } else {
      // Credenciales inválidas, mostrar mensaje de error
      alert('Usuario o contraseña invalido. Inténtalo de nuevo.');
    }
  });
});




//Hacer visible pass

document.addEventListener("change", (e) => {
    if (e.target === $visible) {
        if ($visible.checked === false) $password.type = "password";
        else $password.type = "text";

    }
});


//Estilo de login

const container = document.querySelector(".container");
const btnLogin = document.getElementById("btn-login");
const btnSignUp = document.getElementById("btn-sign-up");

btnLogin.addEventListener("click", ()=> {
    container.classList.remove("toggle");
})

btnSignUp.addEventListener("click", ()=> {
    container.classList.add("toggle");
})


