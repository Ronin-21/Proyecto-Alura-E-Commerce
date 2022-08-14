//import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import { $menuMobile } from "./index.js";

$menuMobile();

const admin = {
  usuario: "admin",
  contrasenna: "admin",
};

const $loginForm = document.querySelector("#login-form");

$loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const $user = document.querySelector("#text-input").value;
  const $password = document.querySelector("#password-input").value;

  if ($user == admin.usuario && $password == admin.contrasenna) {
    console.log("entro al if");
    window.location.href = "admin.html";
  } else {
    alert("Su usuario y contraseña son incorrectos");
  }
});
