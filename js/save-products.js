/* SAVE LOCAL STORAGE */
export const saveLocalStorage = (products) => {
  localStorage.setItem("productos", JSON.stringify(products));
};
