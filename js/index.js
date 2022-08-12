import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

/* CREATE NEW PRODUCTS CARDS */
const $newProducts = document.querySelector("#nuevos-productos");

const createProductCard = () => {
  let products = JSON.parse(localStorage.getItem("productos"));

  if (products != null) {
    products.forEach((element) => {
      let card = document.createElement("article");
      card.innerHTML = `<div class="card shadow" style="width: 18rem;">
        <div class="card__img">
          <img src="${element.img}" class="card-img-top" alt="...">
        </div>
        <div class="card-body d-flex flex-column">
           <h5 class="card-title">${element.name}</h5>
           <p class="card-text fw-bold">$${element.price}</p>
           <div class="card__stars pb-3">
             <img src="./assets/svg/star-full.svg" alt="">
             <img src="./assets/svg/star-full.svg" alt="">
             <img src="./assets/svg/star-full.svg" alt="">
             <img src="./assets/svg/star-full.svg" alt="">
             <img src="./assets/svg/star.svg" alt="">
           </div>
           <a href="#" class="btn btn-primary align-self-end"><img src="./assets/svg/shop-cart.svg" alt=""></a>
        </div>
      </div>`;

      $newProducts.appendChild(card);
    });
  }
};

document.addEventListener("DOMContentLoaded", createProductCard);

// Hamburger animation library

export const $menuMobile = () => {
  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
  });
};

$menuMobile();
