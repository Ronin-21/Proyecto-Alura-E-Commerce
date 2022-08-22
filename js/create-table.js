import { editProduct } from "./edit-table.js";
import { deleteProduct } from "./delete-table.js";

/* CREATE TABLE */
export const createTable = () => {
  let products = JSON.parse(localStorage.getItem("productos"));
  const $tableBody = document.getElementById("admin-table");

  if (products != null) {
    let count = 0;
    $tableBody.innerHTML = "";

    products.forEach((element) => {
      let tableRow = document.createElement("tr");
      count++;

      tableRow.innerHTML = `<th scope="row">${count}</th>
      <td>${element.category}</td>
      <td>${element.name}</td>
      <td>$${element.price}</td>
      <td>
        <img src="./assets/svg/edit.svg" class="table-edit" alt="">
        <img src="./assets/svg/delete.svg" class="table-delete" alt="">
        </td>`;

      $tableBody.appendChild(tableRow);
    });

    deleteProduct();
    editProduct();
  }
};
