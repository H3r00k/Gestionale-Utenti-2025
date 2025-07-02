const utenti = [];

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
    provincia,
  };

  utenti.push(user);
  console.log(utenti);
}

export function mostraUtenti() {
  for (let i = 0; i < utenti.length; i++) {
    const user = utenti[i];
    const userEntry = document.createElement("div");
    const details = document.createElement("div");
    details.classList.add("user-details");
    userEntry.classList.add("user-entry");

    const header = document.createElement("div");
    header.classList.add("user-header");

    const title = document.createElement("span");
    title.textContent = `${user.nome} ${user.cognome}`;

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "+";

    //dettagli Nascosti
    details.innerHTML = `
                            <p><strong>Età:</strong> ${user.eta}</p>
                            <p><strong>Nazione:</strong> ${user.nazione}</p>
                            <p><strong>Indirizzo:</strong> ${user.indirizzo}</p>
                            <p><strong>CAP:</strong> ${user.cap}</p>
                            <p><strong>Comune:</strong> ${user.comune}</p>
                            <p><strong>Provincia:</strong> ${user.provincia}</p>`;

    toggleBtn.addEventListener("click", () => {
      if (details.classList.contains("show")) {
        details.classList.remove("show");
        toggleBtn.textContent = "+";
      } else {
        details.classList.add("show");
        toggleBtn.textContent = "-";
      }
    });

    header.appendChild(title);
    header.appendChild(toggleBtn);
    userEntry.appendChild(header);
    userEntry.appendChild(details);
    userList.appendChild(userEntry);
  }
}
