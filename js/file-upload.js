/* FILE UPLOAD */
const $productFile = document.querySelector("#file-input");
const reader = new FileReader();
export let fileSource = "";

$productFile.addEventListener("change", (e) => {
  const file = e.target.files[0];

  reader.readAsDataURL(file);
  reader.addEventListener("load", (file) => {
    fileSource = file.target.result;
  });
});
