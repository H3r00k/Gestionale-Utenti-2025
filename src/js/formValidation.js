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

      if (value.length < 3) {
        showColorError(input, nomeError);
        nomeError.textContent = "Inserisci un nome di almeno 3 caratteri!";
        isValid = false;
      } else if (!isNaN(value)) {
        showColorError(input, nomeError);
        nomeError.textContent = "Il nome non può essere un numero!";
        isValid = false;
      } else if (/[^a-zA-ZàèéìòùÀÈÉÌÒÙ\s']/g.test(value)) {
        showColorError(input, nomeError);
        nomeError.textContent = "Il nome non può contenere caratteri speciali!";
        isValid = false;
      } else {
        clearError(input, nomeError);
      }
    }

    //gestione Cognome
    if (input.id === "cognome") {
      const cognomeError = document.getElementById("cognome-error");
      if (value.length < 3) {
        showColorError(input, cognomeError);
        cognomeError.textContent =
          "Inserisci un cognome di almeno 3 caratteri!";
        isValid = false;
      } else if (!isNaN(value)) {
        showColorError(input, cognomeError);
        cognomeError.textContent = "Il cognome non può essere un numero!";
        isValid = false;
      } else if (/[^a-zA-ZàèéìòùÀÈÉÌÒÙ\s']/g.test(value)) {
        showColorError(input, cognomeError);
        cognomeError.textContent =
          "Il cognome non può contenere caratteri speciali!";
        isValid = false;
      } else {
        clearError(input, cognomeError);
      }
    }

    if (input.id === "comune") {
      const comuneError = document.getElementById("comune-error");
      if (value.length < 3) {
        showColorError(input, comuneError);
        comuneError.textContent = "Inserisci un comune di almeno 3 caratteri!";
        isValid = false;
      } else if (!isNaN(value)) {
        showColorError(input, comuneError);
        comuneError.textContent = "Il comune non può essere un numero!";
        isValid = false;
      } else if (/[^a-zA-ZàèéìòùÀÈÉÌÒÙ\s']/g.test(value)) {
        showColorError(input, comuneError);
        comuneError.textContent =
          "Il comune non può contenere caratteri speciali!";
        isValid = false;
      } else {
        clearError(input, comuneError);
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
        showColorError(input, etaError);
        etaError.textContent = "Inserisci un'età valida (1-100)";

        isValid = false;
      } else {
        clearError(input, etaError);
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

function showColorError(inputEl, errorEl) {
  inputEl.style.borderColor = "red";
  errorEl.style.display = "block";
}

export function clearError(inputEl, errorEl) {
  inputEl.style.borderColor = "#ccc";
  errorEl.textContent = "";
  errorEl.style.display = "none";
}
