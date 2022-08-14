import { hamburgerSpin } from "./hamburger.js";

hamburgerSpin();

const admin = {
  user: "admin",
  password: "admin",
};

const $loginForm = document.querySelector("#login-form");

$loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const $user = document.querySelector("#text-input").value;
  const $password = document.querySelector("#password-input").value;

  if ($user == admin.user && $password == admin.password) {
    window.location.href = "admin.html";
  } else {
    alert("Su usuario y contraseña son incorrectos");
  }
});
