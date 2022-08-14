import { saveLocalStorage } from "./save-products.js";

/* VARIABLES */
const $tableBody = document.getElementById("admin-table");
let products = JSON.parse(localStorage.getItem("productos"));

/* CREATE TABLE */
const createTable = () => {
  if (products != null) {
    products.forEach((element) => {
      let tableRow = document.createElement("tr");
      tableRow.innerHTML = `<th scope="row">1</th>
      <td>${element.name}</td>
      <td>$${element.price}</td>
      <td>
        <img src="./assets/svg/edit.svg" class="table-edit" alt="">
        <img src="./assets/svg/delete.svg" class="table-delete" alt="">
        </td>`;

      $tableBody.appendChild(tableRow);
    });
  }
};

/* EDIT TABLE */
const editProduct = () => {
  const $tableEdit = document.querySelectorAll(".table-edit");

  $tableEdit.forEach((element) => {
    element.addEventListener("click", (e) => {
      window.location.href = "edit.html";
    });
  });
};

/* DELETE TABLE */
const deleteProduct = () => {
  const $tableDelete = document.querySelectorAll(".table-delete");

  $tableDelete.forEach((element, index) => {
    element.addEventListener("click", (e) => {
      products.splice(index, 1);
      saveLocalStorage(products);
      window.location.href = "admin.html";
    });
  });
};
/* ------------------ */
document.addEventListener("DOMContentLoaded", createTable);
document.addEventListener("DOMContentLoaded", editProduct);
document.addEventListener("DOMContentLoaded", deleteProduct);
