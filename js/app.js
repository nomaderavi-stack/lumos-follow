const btn = document.getElementById("btnMagic");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const closeResult = document.getElementById("closeResult");
const usuarioInput = document.getElementById("usuario");

const fakeDatabase = [
  "@ghost_user",
  "@fake_followback",
  "@inativo_01",
  "@nao_te_sigo",
  "@random_girl",
  "@bot_instagram",
  "@user_active"
];

function gerarResultado(usuario) {
  // simula IA filtrando quem "não segue de volta"
  return fakeDatabase
    .filter(() => Math.random() > 0.4)
    .slice(0, 3)
    .map(u => `🚫 ${u} não te segue de volta`);
}

btn.addEventListener("click", () => {
  const usuario = usuarioInput.value || "@usuario";

  // loading ON
  loading.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");

    const lista = gerarResultado(usuario);

    // limpa resultados antigos
    const box = result.querySelector(".box");
    box.innerHTML = `
      <h1>Resultado Lumos</h1>
    `;

    lista.forEach(item => {
      const p = document.createElement("p");
      p.textContent = item;
      box.appendChild(p);
    });

    const btnClose = document.createElement("button");
    btnClose.id = "closeResult";
    btnClose.textContent = "Fechar";
    box.appendChild(btnClose);

    btnClose.addEventListener("click", () => {
      result.classList.add("hidden");
    });

    result.classList.remove("hidden");

  }, 2500);
});