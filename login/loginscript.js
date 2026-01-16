//Interaccion email/pass

const $submit = document.getElementById("submit"),
    $password = document.getElementById("password"),
    $username = document.getElementById("username"),
    $visible = document.getElementById("visible");

document.addEventListener("change", (e) => {
    if (e.target === $visible) {
        if ($visible.checked === false) $password.type = "password";
        else $password.type = "text";

    }
});

//Hacer visible pass

document.addEventListener("click", (e) => {
    if(e.target === $submit) {
    if ($password.value !== "" && $username.value !== "") {
        e.preventDefault();
        window.location.href = "../wallet/menu.html";
    }
}})

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


