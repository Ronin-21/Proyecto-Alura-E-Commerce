import { saveLocalStorage } from "./save-products.js";

/* VARIABLES */
let products = JSON.parse(localStorage.getItem("productos"));

/* EDIT TABLE */
export const editProduct = () => {
  const $tableEdit = document.querySelectorAll(".table-edit");

  $tableEdit.forEach((element, index) => {
    element.addEventListener("click", () => {
      const selectedProduct = products.splice(index, 1);
      saveLocalStorage("editable", selectedProduct);
      window.location.href = "edit.html";
    });
  });
};
