import { hamburgerSpin } from "./hamburger.js";
import { fileSource } from "./file-upload.js";
import { saveLocalStorage } from "./save-products.js";

/* VARIABLES */
const $adminForm = document.querySelector("#admin-form");
let products = JSON.parse(localStorage.getItem("productos"));

/* FUNCTIONS */
hamburgerSpin();

/* CREATE PRODUCT */
const createProduct = (category, name, price, img) => {
  let product = {
    id: uuid.v4(),
    category,
    name,
    price,
    img,
  };

  if (products == null) {
    products = [];
  }

  products.push(product);
};

/* FORM SUBMIT */
$adminForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const $productCategory = document.querySelector("#categoria-input").value;
  const $productName = document.querySelector("#nombre-input").value;
  const $productPrice = document.querySelector("#precio-input").value;

  createProduct($productCategory, $productName, $productPrice, fileSource);
  saveLocalStorage("productos", products);
  $adminForm.reset();
});
