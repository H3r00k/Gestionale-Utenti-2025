import { createUser, mostraUtenti } from "./createUser.js";
import { createPopShow } from "./allPop.js";
import { resetForm } from "./allPop.js";
import { closePop } from "./allPop.js";
import { showSuccessToast } from "./allPop.js";


const btnCreateUser = document.querySelector(".btn-primary");
const popup = document.getElementById("userForm");
const btnClosePopUser = document.getElementById("closeWindowCreateUser");
const btnSaveUser = document.getElementById("saveUser");
const btnChoseUser = document.querySelector(".btn-secondary");
const popupSfoglia = document.getElementById("userBrowser");
const btnCloseSfogliaUtente = document.getElementById("closeUserBrowser");

btnCreateUser.addEventListener("click", () => createPopShow(popup));
btnClosePopUser.addEventListener("click", () => {
  closePop(popup);
  resetForm(userForm);
});

btnSaveUser.addEventListener("click", () => {
  createUser();
  showSuccessToast();
  resetForm(userForm)
});

btnChoseUser.addEventListener("click", () => {
    createPopShow(popupSfoglia);
    mostraUtenti();
})


btnCloseSfogliaUtente.addEventListener("click", () => {
    
    closePop(popupSfoglia);
    
})