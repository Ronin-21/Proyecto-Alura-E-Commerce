// Hamburger animation library

export const hamburgerSpin = () => {
  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
  });
};
