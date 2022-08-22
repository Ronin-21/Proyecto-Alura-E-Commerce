import { hamburgerSpin } from "./hamburger.js";
import { fileSource } from "./file-upload.js";
import { saveLocalStorage } from "./save-products.js";

/* VARIABLES */
const $editForm = document.querySelector("#edit-form");
let $productCategory = document.querySelector("#categoria-input");
let $productName = document.querySelector("#nombre-input");
let $productPrice = document.querySelector("#precio-input");
const selectedProduct = JSON.parse(localStorage.getItem("editable"));
let editableProduct = selectedProduct[0];
let products = JSON.parse(localStorage.getItem("productos"));

/* MODIFY PRODUCT */
const modifyProduct = () => {
  editableProduct.category = $productCategory.value;
  editableProduct.name = $productName.value;
  editableProduct.price = $productPrice.value;
  editableProduct.img = fileSource;

  products.forEach((element, index) => {
    if (element.id === editableProduct.id) {
      products.splice(index, 1, editableProduct);
    }
  });
};

/* FORM SUBMIT */
const setFormData = ({ category, name, price }) => {
  $productCategory.value = category;
  $productName.value = name;
  $productPrice.value = price;
};

/* FORM SUBMIT */
$editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  modifyProduct();
  saveLocalStorage("editable", editableProduct);
  saveLocalStorage("productos", products);
});

/* FUNCTIONS */
hamburgerSpin();
setFormData(editableProduct);
