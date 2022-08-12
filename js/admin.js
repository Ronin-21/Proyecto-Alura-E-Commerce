import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { $menuMobile } from "./index.js";

/* VARIABLES */
const $adminForm = document.querySelector("#admin-form");
const newImg = document.createElement("img");
let products = JSON.parse(localStorage.getItem("productos"));

/* FUNCTIONS */
const fileUpload = () => {
  const $productFile = document.querySelector("#file-input");

  const reader = new FileReader();

  $productFile.addEventListener("change", (e) => {
    const file = e.target.files[0];

    reader.readAsDataURL(file);
    reader.addEventListener("load", (file) => {
      newImg.src = file.target.result;
    });
  });
};

const createProduct = (category, name, price, img) => {
  let product = {
    category: category,
    name: name,
    price: price,
    img: img,
  };

  if (products == null) {
    products = [];
  }

  products.push(product);
};

const saveLocalStorage = () => {
  localStorage.setItem("productos", JSON.stringify(products));
};

/* --------------------------- */
$adminForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const $productCategory = document.querySelector("#categoria-input").value;
  const $productName = document.querySelector("#nombre-input").value;
  const $productPrice = document.querySelector("#precio-input").value;

  createProduct($productCategory, $productName, $productPrice, newImg.src);
  saveLocalStorage();
  $adminForm.reset();
  console.log(products);
});

$menuMobile();
fileUpload();
