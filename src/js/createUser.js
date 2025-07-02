export function createUser() {
  const nome = document.getElementById("nome").value.trim();
  const cognome = document.getElementById("cognome").value.trim();
  const eta = document.getElementById("eta").value.trim();
  const nazione = document.getElementById("nazione").value.trim();
  const indirizzo = document.getElementById("indirizzo").value.trim();
  const cap = document.getElementById("cap").value.trim();
  const comune = document.getElementById("comune").value.trim();
  const provincia = document.getElementById("provincia").value.trim();

  const user = {
    nome,
    cognome,
    eta,
    nazione,
    indirizzo,
    cap,
    comune,
    provincia
  };

  console.log(user);
  
}
