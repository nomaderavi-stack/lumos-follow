const btn = document.getElementById("btnMagic");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const closeResult = document.getElementById("closeResult");
const usuarioInput = document.getElementById("usuario");

// trava de segurança anti-bug
let isRunning = false;

btn.addEventListener("click", () => {
  if (isRunning) return; // impede spam de clique
  isRunning = true;

  const usuario = usuarioInput.value.trim();

  // validação básica
  if (!usuario) {
    alert("Digite um usuário primeiro ✨");
    isRunning = false;
    return;
  }

  // limpa resultado anterior (evita bug visual)
  const oldResults = result.querySelectorAll("p");
  oldResults.forEach(el => el.remove());

  // mostra loading
  loading.classList.remove("hidden");

  // simula "IA scanner"
  setTimeout(() => {
    loading.classList.add("hidden");
    result.classList.remove("hidden");

    // gera resultados fake estilo Lumos
    const fakeUsers = [
      "usuario1",
      "usuario2",
      "usuario3"
    ];

    fakeUsers.forEach((u, index) => {
      setTimeout(() => {
        const p = document.createElement("p");
        p.textContent = `🚫 @${u} não te segue de volta`;
        result.querySelector(".box").insertBefore(p, closeResult);
      }, index * 400);
    });

    isRunning = false;
  }, 2000);
});

// fechar modal corretamente
closeResult.addEventListener("click", () => {
  result.classList.add("hidden");

  // limpa lista ao fechar (evita duplicação bugada)
  const ps = result.querySelectorAll("p");
  ps.forEach(el => el.remove());
});