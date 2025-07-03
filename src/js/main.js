import { createUser, mostraUtenti } from "./createUser.js";
import { createPopShow } from "./allPop.js";
import { resetForm } from "./allPop.js";
import { closePop } from "./allPop.js";
import { showSuccessToast } from "./allPop.js";
import { validateUserForm, clearError } from "./formValidation.js";



const btnCreateUser = document.querySelector(".btn-primary");
const popup = document.getElementById("userForm");
const btnClosePopUser = document.getElementById("closeWindowCreateUser");
const btnSaveUser = document.getElementById("saveUser");
const btnChoseUser = document.querySelector(".btn-secondary");
const popupSfoglia = document.getElementById("userBrowser");
const btnCloseSfogliaUtente = document.getElementById("closeUserBrowser");
const inputs = document.querySelectorAll("#userForm input");

btnCreateUser.addEventListener("click", () => createPopShow(popup));
btnClosePopUser.addEventListener("click", () => {
  closePop(popup);
  resetForm(userForm);
});

btnSaveUser.addEventListener("click", () => {
  const formValid = validateUserForm(userForm);
  if (!formValid) return;
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


//ciclo per vedere la correzione in tempo reale dei campi input!
for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const errorEl = document.getElementById(`${input.id}-error`);
  
    input.addEventListener("input", () => {
            clearError(input, errorEl)
        })
}