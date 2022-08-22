import { saveLocalStorage } from "./save-products.js";
import { createTable } from "./create-table.js";

/* VARIABLES */
let products = JSON.parse(localStorage.getItem("productos"));

/* DELETE TABLE */
export const deleteProduct = () => {
  const $tableDelete = document.querySelectorAll(".table-delete");

  $tableDelete.forEach((element, index) => {
    element.addEventListener("click", () => {
      products.splice(index, 1);
      saveLocalStorage("productos", products);
      createTable();
    });
  });
};
