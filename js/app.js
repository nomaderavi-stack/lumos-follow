document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("btnMagic");
  const loading = document.getElementById("loading");
  const result = document.getElementById("result");
  const resultBox = document.getElementById("resultBox");
  const closeResult = document.getElementById("closeResult");
  const usuario = document.getElementById("usuario");

  let isRunning = false;

  btn.addEventListener("click", () => {
    if (isRunning) return;

    const user = usuario.value.trim();
    if (!user) {
      alert("Digite um usuário ✨");
      return;
    }

    isRunning = true;

    // limpa resultados antigos
    const old = resultBox.querySelectorAll("p");
    old.forEach(e => e.remove());

    loading.classList.remove("hidden");

    setTimeout(() => {
      loading.classList.add("hidden");
      result.classList.remove("hidden");

      const fake = ["usuario1", "usuario2", "usuario3"];

      fake.forEach((u, i) => {
        setTimeout(() => {
          const p = document.createElement("p");
          p.textContent = `🚫 @${u} não te segue de volta`;
          resultBox.insertBefore(p, closeResult);
        }, i * 300);
      });

      isRunning = false;
    }, 1800);
  });

  closeResult.addEventListener("click", () => {
    result.classList.add("hidden");
  });

});