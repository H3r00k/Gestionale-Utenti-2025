export function validateUserForm(formElement) {
  const inputs = formElement.querySelectorAll("input");
  let isValid = true;

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const value = input.value.trim();

    // Reset di base
    input.style.borderColor = "#ccc";

    // Età: gestita con messaggio
    if (input.id === "eta") {
      const etaError = document.getElementById("eta-error");

      if (value === "" || isNaN(value) || Number(value) <= 0 || Number(value) > 100) {
        input.style.borderColor = "red";
        etaError.textContent = "Inserisci un'età valida (1-100)";
        etaError.style.display = "block";
        isValid = false;
      } else {
        etaError.textContent = "";
        etaError.style.display = "none";
      }
    } else {
      // Altri campi: controllo solo se vuoti
      if (value === "") {
        input.style.borderColor = "red";
        isValid = false;
      }
    }
  }

  return isValid;
}