document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("analisarBtn");

  btn.addEventListener("click", () => {
    const username = document.getElementById("username").value;

    if (!username) {
      alert("Digite um usuário");
      return;
    }

    analisarPerfil(username);
  });
});

function analisarPerfil(user) {
  const resultado = document.getElementById("resultado");
  const lista = document.getElementById("lista");

  lista.innerHTML = "";

  // simulação (depois conectamos API real)
  const dados = [
    user + "_fake1",
    user + "_fake2",
    user + "_fake3"
  ];

  dados.forEach(u => {
    const div = document.createElement("div");
    div.textContent = "@" + u + " não te segue de volta";
    lista.appendChild(div);
  });

  resultado.classList.remove("hidden");
}

function fechar() {
  document.getElementById("resultado").classList.add("hidden");
}