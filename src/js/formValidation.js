export function validateUserForm(formElement) {
  const inputs = formElement.querySelectorAll("input");
  let isValid = true;

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const value = input.value.trim();

    // Reset di base
    input.style.borderColor = "#ccc";

    //Nome gestito com un messaggio
    if (input.id === "nome") {
      const nomeError = document.getElementById("nome-error");

      if (value.length < 2) {
        input.style.borderColor = "red";
        nomeError.textContent = "Inserisci un nome di almeno 2 caratteri!";
        nomeError.style.display = "block";
        isValid = false;
      } else if (!isNaN(value)) {
        input.style.borderColor = "red";
        nomeError.textContent = "Il nome non può essere un numero!";
        nomeError.style.display = "block";
        isValid = false;
      } else if (/[^a-zA-ZàèéìòùÀÈÉÌÒÙ\s']/g.test(value)) {
        input.style.borderColor = "red";
        nomeError.textContent = "Il nome non può contenere caratteri speciali!";
        nomeError.style.display = "block";
        isValid = false;
      }else {
        nomeError.textContent = "";
        nomeError.style.display = "none";
        input.style.borderColor = "#ccc";
      }
    }

    // Età: gestita con messaggio
    if (input.id === "eta") {
      const etaError = document.getElementById("eta-error");

      if (
        value === "" ||
        isNaN(value) ||
        Number(value) <= 0 ||
        Number(value) > 100
      ) {
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
